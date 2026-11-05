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
exports.DescribeDBInstanceReplicationResponseBody = exports.DescribeDBInstanceReplicationResponseBodySlaveStatusList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceReplicationResponseBodySlaveStatusList extends $dara.Model {
    static names() {
        return {
            channelName: 'ChannelName',
            executedGtidSet: 'ExecutedGtidSet',
            lastErrno: 'LastErrno',
            lastIoErrno: 'LastIoErrno',
            lastIoError: 'LastIoError',
            lastSqlErrno: 'LastSqlErrno',
            lastSqlError: 'LastSqlError',
            masterHost: 'MasterHost',
            masterUser: 'MasterUser',
            masterUuid: 'MasterUuid',
            replicateDoDb: 'ReplicateDoDb',
            replicateDoTable: 'ReplicateDoTable',
            replicateIgnoreDb: 'ReplicateIgnoreDb',
            replicateIgnoreTable: 'ReplicateIgnoreTable',
            replicateWildDoTable: 'ReplicateWildDoTable',
            replicateWildIgnoreTable: 'ReplicateWildIgnoreTable',
            secondsBehindMaster: 'SecondsBehindMaster',
            slaveIoRunning: 'SlaveIoRunning',
            slaveIoState: 'SlaveIoState',
            slaveSqlRunning: 'SlaveSqlRunning',
            slaveSqlRunningState: 'SlaveSqlRunningState',
        };
    }
    static types() {
        return {
            channelName: 'string',
            executedGtidSet: 'string',
            lastErrno: 'number',
            lastIoErrno: 'number',
            lastIoError: 'string',
            lastSqlErrno: 'number',
            lastSqlError: 'string',
            masterHost: 'string',
            masterUser: 'string',
            masterUuid: 'string',
            replicateDoDb: 'string',
            replicateDoTable: 'string',
            replicateIgnoreDb: 'string',
            replicateIgnoreTable: 'string',
            replicateWildDoTable: 'string',
            replicateWildIgnoreTable: 'string',
            secondsBehindMaster: 'number',
            slaveIoRunning: 'string',
            slaveIoState: 'string',
            slaveSqlRunning: 'string',
            slaveSqlRunningState: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceReplicationResponseBodySlaveStatusList = DescribeDBInstanceReplicationResponseBodySlaveStatusList;
class DescribeDBInstanceReplicationResponseBody extends $dara.Model {
    static names() {
        return {
            externalReplication: 'ExternalReplication',
            gtidExecuted: 'GtidExecuted',
            importStatus: 'ImportStatus',
            replicationDelay: 'ReplicationDelay',
            replicationErrorMessage: 'ReplicationErrorMessage',
            replicationIp: 'ReplicationIp',
            replicationPort: 'ReplicationPort',
            replicationSource: 'ReplicationSource',
            replicationState: 'ReplicationState',
            requestId: 'RequestId',
            slaveStatusList: 'SlaveStatusList',
        };
    }
    static types() {
        return {
            externalReplication: 'string',
            gtidExecuted: 'string',
            importStatus: 'string',
            replicationDelay: 'string',
            replicationErrorMessage: 'string',
            replicationIp: 'string',
            replicationPort: 'string',
            replicationSource: 'string',
            replicationState: 'string',
            requestId: 'string',
            slaveStatusList: { 'type': 'array', 'itemType': DescribeDBInstanceReplicationResponseBodySlaveStatusList },
        };
    }
    validate() {
        if (Array.isArray(this.slaveStatusList)) {
            $dara.Model.validateArray(this.slaveStatusList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceReplicationResponseBody = DescribeDBInstanceReplicationResponseBody;
//# sourceMappingURL=DescribeDbinstanceReplicationResponseBody.js.map