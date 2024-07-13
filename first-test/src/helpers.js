export const kebabCaseToTitleCase = (color) => {
  return color
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
