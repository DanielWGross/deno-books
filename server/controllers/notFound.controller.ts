export default ({ response }: { response: any }) => {
  response.status = 400;
  response.body = { msg: "You suck" };
};
