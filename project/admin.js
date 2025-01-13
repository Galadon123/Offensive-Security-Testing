document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const statusSelect = document.getElementById('paymentStatusSelect');
    const currentStatusBadge = document.getElementById('currentStatusBadge');
    
    // Get the saved payment status from localStorage
    const savedStatus = localStorage.getItem('paymentStatus') || 'Pending';
    
    // Update the select value and current status badge
    statusSelect.value = savedStatus;
    currentStatusBadge.textContent = savedStatus;
    currentStatusBadge.className = `status-badge status-${savedStatus.toLowerCase()}`;
});

function updatePaymentStatus() {
    // Get the selected status
    const statusSelect = document.getElementById('paymentStatusSelect');
    const currentStatusBadge = document.getElementById('currentStatusBadge');
    const newStatus = statusSelect.value;
    
    // Save to localStorage
    localStorage.setItem('paymentStatus', newStatus);
    
    // Update the current status badge
    currentStatusBadge.textContent = newStatus;
    currentStatusBadge.className = `status-badge status-${newStatus.toLowerCase()}`;
    
    // Show success message
    alert('Payment status updated successfully!');
}