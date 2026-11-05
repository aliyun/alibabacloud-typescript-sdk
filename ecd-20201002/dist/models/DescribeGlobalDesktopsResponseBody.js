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
exports.DescribeGlobalDesktopsResponseBody = exports.DescribeGlobalDesktopsResponseBodyDesktops = exports.DescribeGlobalDesktopsResponseBodyDesktopsSessions = exports.DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate = exports.DescribeGlobalDesktopsResponseBodyDesktopsDisks = exports.DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers = exports.DescribeGlobalDesktopsResponseBodyDesktopsClients = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGlobalDesktopsResponseBodyDesktopsClients extends $dara.Model {
    static names() {
        return {
            clientType: 'ClientType',
            status: 'Status',
        };
    }
    static types() {
        return {
            clientType: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDesktopsResponseBodyDesktopsClients = DescribeGlobalDesktopsResponseBodyDesktopsClients;
class DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers extends $dara.Model {
    static names() {
        return {
            allowClientSetting: 'AllowClientSetting',
            cronExpression: 'CronExpression',
            enforce: 'Enforce',
            executionTime: 'ExecutionTime',
            interval: 'Interval',
            operationType: 'OperationType',
            resetType: 'ResetType',
            timerType: 'TimerType',
        };
    }
    static types() {
        return {
            allowClientSetting: 'boolean',
            cronExpression: 'string',
            enforce: 'boolean',
            executionTime: 'string',
            interval: 'number',
            operationType: 'string',
            resetType: 'string',
            timerType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers = DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers;
class DescribeGlobalDesktopsResponseBodyDesktopsDisks extends $dara.Model {
    static names() {
        return {
            diskId: 'DiskId',
            diskSize: 'DiskSize',
            diskType: 'DiskType',
        };
    }
    static types() {
        return {
            diskId: 'string',
            diskSize: 'number',
            diskType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDesktopsResponseBodyDesktopsDisks = DescribeGlobalDesktopsResponseBodyDesktopsDisks;
class DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate extends $dara.Model {
    static names() {
        return {
            channel: 'Channel',
            currentAppVersion: 'CurrentAppVersion',
            force: 'Force',
            newAppVersion: 'NewAppVersion',
            newDcdVersion: 'NewDcdVersion',
            project: 'Project',
            releaseNote: 'ReleaseNote',
            releaseNoteEn: 'ReleaseNoteEn',
            releaseNoteJp: 'ReleaseNoteJp',
            size: 'Size',
        };
    }
    static types() {
        return {
            channel: 'string',
            currentAppVersion: 'string',
            force: 'boolean',
            newAppVersion: 'string',
            newDcdVersion: 'string',
            project: 'string',
            releaseNote: 'string',
            releaseNoteEn: 'string',
            releaseNoteJp: 'string',
            size: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate = DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate;
class DescribeGlobalDesktopsResponseBodyDesktopsSessions extends $dara.Model {
    static names() {
        return {
            endUserId: 'EndUserId',
            establishmentTime: 'EstablishmentTime',
        };
    }
    static types() {
        return {
            endUserId: 'string',
            establishmentTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDesktopsResponseBodyDesktopsSessions = DescribeGlobalDesktopsResponseBodyDesktopsSessions;
class DescribeGlobalDesktopsResponseBodyDesktops extends $dara.Model {
    static names() {
        return {
            chargeType: 'ChargeType',
            clients: 'Clients',
            connectionStatus: 'ConnectionStatus',
            cpu: 'Cpu',
            creationTime: 'CreationTime',
            desktopGroupId: 'DesktopGroupId',
            desktopId: 'DesktopId',
            desktopName: 'DesktopName',
            desktopStatus: 'DesktopStatus',
            desktopTimers: 'DesktopTimers',
            desktopType: 'DesktopType',
            directoryId: 'DirectoryId',
            disks: 'Disks',
            endUserId: 'EndUserId',
            endUserIds: 'EndUserIds',
            expiredTime: 'ExpiredTime',
            fotaUpdate: 'FotaUpdate',
            gpuMemory: 'GpuMemory',
            hibernationBeta: 'HibernationBeta',
            hostName: 'HostName',
            imageId: 'ImageId',
            lastStartTime: 'LastStartTime',
            localName: 'LocalName',
            managementFlags: 'ManagementFlags',
            memory: 'Memory',
            networkInterfaceIp: 'NetworkInterfaceIp',
            officeSiteId: 'OfficeSiteId',
            os: 'Os',
            osDescription: 'OsDescription',
            osType: 'OsType',
            platform: 'Platform',
            policyGroupId: 'PolicyGroupId',
            protocolType: 'ProtocolType',
            realDesktopId: 'RealDesktopId',
            regionId: 'RegionId',
            regionLocation: 'RegionLocation',
            sessionType: 'SessionType',
            sessions: 'Sessions',
            supportHibernation: 'SupportHibernation',
            userCustomName: 'UserCustomName',
        };
    }
    static types() {
        return {
            chargeType: 'string',
            clients: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsClients },
            connectionStatus: 'string',
            cpu: 'number',
            creationTime: 'string',
            desktopGroupId: 'string',
            desktopId: 'string',
            desktopName: 'string',
            desktopStatus: 'string',
            desktopTimers: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsDesktopTimers },
            desktopType: 'string',
            directoryId: 'string',
            disks: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsDisks },
            endUserId: 'string',
            endUserIds: { 'type': 'array', 'itemType': 'string' },
            expiredTime: 'string',
            fotaUpdate: DescribeGlobalDesktopsResponseBodyDesktopsFotaUpdate,
            gpuMemory: 'number',
            hibernationBeta: 'boolean',
            hostName: 'string',
            imageId: 'string',
            lastStartTime: 'string',
            localName: 'string',
            managementFlags: { 'type': 'array', 'itemType': 'string' },
            memory: 'number',
            networkInterfaceIp: 'string',
            officeSiteId: 'string',
            os: 'string',
            osDescription: 'string',
            osType: 'string',
            platform: 'string',
            policyGroupId: 'string',
            protocolType: 'string',
            realDesktopId: 'string',
            regionId: 'string',
            regionLocation: 'string',
            sessionType: 'string',
            sessions: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktopsSessions },
            supportHibernation: 'boolean',
            userCustomName: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.clients)) {
            $dara.Model.validateArray(this.clients);
        }
        if (Array.isArray(this.desktopTimers)) {
            $dara.Model.validateArray(this.desktopTimers);
        }
        if (Array.isArray(this.disks)) {
            $dara.Model.validateArray(this.disks);
        }
        if (Array.isArray(this.endUserIds)) {
            $dara.Model.validateArray(this.endUserIds);
        }
        if (this.fotaUpdate && typeof this.fotaUpdate.validate === 'function') {
            this.fotaUpdate.validate();
        }
        if (Array.isArray(this.managementFlags)) {
            $dara.Model.validateArray(this.managementFlags);
        }
        if (Array.isArray(this.sessions)) {
            $dara.Model.validateArray(this.sessions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDesktopsResponseBodyDesktops = DescribeGlobalDesktopsResponseBodyDesktops;
class DescribeGlobalDesktopsResponseBody extends $dara.Model {
    static names() {
        return {
            desktops: 'Desktops',
            nextToken: 'NextToken',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            desktops: { 'type': 'array', 'itemType': DescribeGlobalDesktopsResponseBodyDesktops },
            nextToken: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.desktops)) {
            $dara.Model.validateArray(this.desktops);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalDesktopsResponseBody = DescribeGlobalDesktopsResponseBody;
//# sourceMappingURL=DescribeGlobalDesktopsResponseBody.js.map