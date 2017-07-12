var HumanStandardToken = artifacts.require("./HumanStandardToken.sol");
var HumanStandardTokenFactory = artifacts.require("./HumanStandardTokenFactory.sol");
module.exports = function(deployer) {
  deployer.deploy(HumanStandardToken);
  deployer.deploy(HumanStandardTokenFactory);
};
