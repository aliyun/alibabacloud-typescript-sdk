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
exports.CreateDBNodesResponseBody = exports.CreateDBNodesResponseBodyDBNodeIds = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateDBNodesResponseBodyDBNodeIds extends $dara.Model {
    static names() {
        return {
            DBNodeId: 'DBNodeId',
        };
    }
    static types() {
        return {
            DBNodeId: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.DBNodeId)) {
            $dara.Model.validateArray(this.DBNodeId);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBNodesResponseBodyDBNodeIds = CreateDBNodesResponseBodyDBNodeIds;
class CreateDBNodesResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            DBNodeIds: 'DBNodeIds',
            orderId: 'OrderId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            DBNodeIds: CreateDBNodesResponseBodyDBNodeIds,
            orderId: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.DBNodeIds && typeof this.DBNodeIds.validate === 'function') {
            this.DBNodeIds.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBNodesResponseBody = CreateDBNodesResponseBody;
//# sourceMappingURL=CreateDbnodesResponseBody.js.map