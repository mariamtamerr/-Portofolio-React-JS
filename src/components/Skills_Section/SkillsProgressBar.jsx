import './Skills.css';

// name and level as props
function SkillsProgressBar({ name, level }) {
  // Function to determine the progress bar color
  function getProgressBarColor(progress) {
    if (progress >= 90) {
      return "success";
    } else if (progress >= 70) {
      return "info";
    } else if (progress >= 50) {
      return "warning";
    } else {
      return "danger";
    }
  }

  return (
    <div className="progress" role="progressbar" aria-valuenow={level}>
      <div className={`progress-bar bg-${getProgressBarColor(level)}`} style={{ width: `${level}%` }}>{name}</div>
    </div>
  );
}

export default SkillsProgressBar;
