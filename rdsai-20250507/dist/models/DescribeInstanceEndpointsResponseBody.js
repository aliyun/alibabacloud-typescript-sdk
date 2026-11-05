"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeInstanceEndpointsResponseBody = exports.DescribeInstanceEndpointsResponseBodyInstanceEndpoints = exports.DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            ipType: 'IpType',
            port: 'Port',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            ipType: 'string',
            port: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints = DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints;
class DescribeInstanceEndpointsResponseBodyInstanceEndpoints extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            domain: 'Domain',
            IP: 'IP',
            ipType: 'IpType',
            port: 'Port',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            domain: 'string',
            IP: 'string',
            ipType: 'string',
            port: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceEndpointsResponseBodyInstanceEndpoints = DescribeInstanceEndpointsResponseBodyInstanceEndpoints;
class DescribeInstanceEndpointsResponseBody extends $dara.Model {
    static names() {
        return {
            branchName: 'BranchName',
            DBInstanceEndpoints: 'DBInstanceEndpoints',
            instanceEndpoints: 'InstanceEndpoints',
            instanceName: 'InstanceName',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            branchName: 'string',
            DBInstanceEndpoints: { 'type': 'array', 'itemType': DescribeInstanceEndpointsResponseBodyDBInstanceEndpoints },
            instanceEndpoints: { 'type': 'array', 'itemType': DescribeInstanceEndpointsResponseBodyInstanceEndpoints },
            instanceName: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceEndpoints)) {
            $dara.Model.validateArray(this.DBInstanceEndpoints);
        }
        if (Array.isArray(this.instanceEndpoints)) {
            $dara.Model.validateArray(this.instanceEndpoints);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceEndpointsResponseBody = DescribeInstanceEndpointsResponseBody;
//# sourceMappingURL=DescribeInstanceEndpointsResponseBody.js.map