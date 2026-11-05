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
exports.GetDBInstanceTopologyResponseBody = exports.GetDBInstanceTopologyResponseBodyData = exports.GetDBInstanceTopologyResponseBodyDataNodes = exports.GetDBInstanceTopologyResponseBodyDataConnections = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetDBInstanceTopologyResponseBodyDataConnections extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            DBInstanceName: 'DBInstanceName',
            netType: 'NetType',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            DBInstanceName: 'string',
            netType: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetDBInstanceTopologyResponseBodyDataConnections = GetDBInstanceTopologyResponseBodyDataConnections;
class GetDBInstanceTopologyResponseBodyDataNodes extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            dedicatedHostGroupId: 'DedicatedHostGroupId',
            dedicatedHostId: 'DedicatedHostId',
            nodeId: 'NodeId',
            role: 'Role',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            dedicatedHostGroupId: 'string',
            dedicatedHostId: 'string',
            nodeId: 'string',
            role: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetDBInstanceTopologyResponseBodyDataNodes = GetDBInstanceTopologyResponseBodyDataNodes;
class GetDBInstanceTopologyResponseBodyData extends $dara.Model {
    static names() {
        return {
            connections: 'Connections',
            DBInstanceName: 'DBInstanceName',
            nodes: 'Nodes',
        };
    }
    static types() {
        return {
            connections: { 'type': 'array', 'itemType': GetDBInstanceTopologyResponseBodyDataConnections },
            DBInstanceName: 'string',
            nodes: { 'type': 'array', 'itemType': GetDBInstanceTopologyResponseBodyDataNodes },
        };
    }
    validate() {
        if (Array.isArray(this.connections)) {
            $dara.Model.validateArray(this.connections);
        }
        if (Array.isArray(this.nodes)) {
            $dara.Model.validateArray(this.nodes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetDBInstanceTopologyResponseBodyData = GetDBInstanceTopologyResponseBodyData;
class GetDBInstanceTopologyResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            data: 'Data',
            message: 'Message',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            code: 'string',
            data: GetDBInstanceTopologyResponseBodyData,
            message: 'string',
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
exports.GetDBInstanceTopologyResponseBody = GetDBInstanceTopologyResponseBody;
//# sourceMappingURL=GetDbinstanceTopologyResponseBody.js.map