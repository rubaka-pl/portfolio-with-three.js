const Button = ({ name, isBeam = false, containerClass, href, download }) => {
  const content = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3 mr-2">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </>
  );

  if (href) {
    return (
      <a href={href} download={download} className={`btn ${containerClass} inline-flex items-center justify-center`}>
        {content}
      </a>
    );
  }

  return <button className={`btn ${containerClass}`}>{content}</button>;
};

export default Button;
