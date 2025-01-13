document.addEventListener('DOMContentLoaded', function() {
    // Get the payment status badge element
    const statusBadge = document.getElementById('paymentStatusBadge');
    
    // Get the saved payment status from localStorage
    const savedStatus = localStorage.getItem('paymentStatus') || 'Pending';
    
    // Update the badge text and classes
    statusBadge.textContent = savedStatus;
    statusBadge.className = `status-badge status-${savedStatus.toLowerCase()}`;
});