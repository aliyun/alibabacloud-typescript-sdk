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
exports.DescribeDBInstanceHAConfigResponseBody = exports.DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos = exports.DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo extends $dara.Model {
    static names() {
        return {
            dataSyncTime: 'DataSyncTime',
            logSyncTime: 'LogSyncTime',
            nodeId: 'NodeId',
            nodeType: 'NodeType',
            regionId: 'RegionId',
            syncStatus: 'SyncStatus',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            dataSyncTime: 'string',
            logSyncTime: 'string',
            nodeId: 'string',
            nodeType: 'string',
            regionId: 'string',
            syncStatus: 'string',
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
exports.DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo = DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo;
class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos extends $dara.Model {
    static names() {
        return {
            nodeInfo: 'NodeInfo',
        };
    }
    static types() {
        return {
            nodeInfo: { 'type': 'array', 'itemType': DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo },
        };
    }
    validate() {
        if (Array.isArray(this.nodeInfo)) {
            $dara.Model.validateArray(this.nodeInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos = DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos;
class DescribeDBInstanceHAConfigResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            HAMode: 'HAMode',
            hostInstanceInfos: 'HostInstanceInfos',
            requestId: 'RequestId',
            syncMode: 'SyncMode',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            HAMode: 'string',
            hostInstanceInfos: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos,
            requestId: 'string',
            syncMode: 'string',
        };
    }
    validate() {
        if (this.hostInstanceInfos && typeof this.hostInstanceInfos.validate === 'function') {
            this.hostInstanceInfos.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceHAConfigResponseBody = DescribeDBInstanceHAConfigResponseBody;
//# sourceMappingURL=DescribeDbinstanceHaconfigResponseBody.js.map