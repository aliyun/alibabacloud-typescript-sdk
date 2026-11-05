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
exports.CreateDBInstanceEndpointAddressResponseBody = exports.CreateDBInstanceEndpointAddressResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateDBInstanceEndpointAddressResponseBodyData extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            DBInstanceEndpointId: 'DBInstanceEndpointId',
            DBInstanceName: 'DBInstanceName',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            DBInstanceEndpointId: 'string',
            DBInstanceName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBInstanceEndpointAddressResponseBodyData = CreateDBInstanceEndpointAddressResponseBodyData;
class CreateDBInstanceEndpointAddressResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: CreateDBInstanceEndpointAddressResponseBodyData,
            requestId: 'string',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBInstanceEndpointAddressResponseBody = CreateDBInstanceEndpointAddressResponseBody;
//# sourceMappingURL=CreateDbinstanceEndpointAddressResponseBody.js.map