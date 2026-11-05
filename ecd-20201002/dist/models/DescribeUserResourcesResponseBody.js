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
exports.DescribeUserResourcesResponseBody = exports.DescribeUserResourcesResponseBodyResources = exports.DescribeUserResourcesResponseBodyResourcesSessions = exports.DescribeUserResourcesResponseBodyResourcesOsUpdate = exports.DescribeUserResourcesResponseBodyResourcesOsUpdatePackages = exports.DescribeUserResourcesResponseBodyResourcesFotaUpdate = exports.DescribeUserResourcesResponseBodyResourcesDisks = exports.DescribeUserResourcesResponseBodyResourcesDesktopTimers = exports.DescribeUserResourcesResponseBodyResourcesDesktopDurationList = exports.DescribeUserResourcesResponseBodyResourcesClients = exports.DescribeUserResourcesResponseBodyAgentBriefSummary = exports.DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs extends $dara.Model {
    static names() {
        return {
            agentPlatform: 'AgentPlatform',
            agentProvider: 'AgentProvider',
            avatarNoResourceUrl: 'AvatarNoResourceUrl',
            avatarUrl: 'AvatarUrl',
            count: 'Count',
            displayName: 'DisplayName',
            pcAvatarUrl: 'PcAvatarUrl',
            subTitle: 'SubTitle',
            url: 'Url',
            watermark: 'Watermark',
        };
    }
    static types() {
        return {
            agentPlatform: 'string',
            agentProvider: 'string',
            avatarNoResourceUrl: 'string',
            avatarUrl: 'string',
            count: 'number',
            displayName: 'string',
            pcAvatarUrl: 'string',
            subTitle: 'string',
            url: 'string',
            watermark: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs = DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs;
class DescribeUserResourcesResponseBodyAgentBriefSummary extends $dara.Model {
    static names() {
        return {
            agentBriefs: 'AgentBriefs',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            agentBriefs: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyAgentBriefSummaryAgentBriefs },
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.agentBriefs)) {
            $dara.Model.validateArray(this.agentBriefs);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesResponseBodyAgentBriefSummary = DescribeUserResourcesResponseBodyAgentBriefSummary;
class DescribeUserResourcesResponseBodyResourcesClients extends $dara.Model {
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
exports.DescribeUserResourcesResponseBodyResourcesClients = DescribeUserResourcesResponseBodyResourcesClients;
class DescribeUserResourcesResponseBodyResourcesDesktopDurationList extends $dara.Model {
    static names() {
        return {
            orderInstanceId: 'OrderInstanceId',
            packageCreationTime: 'PackageCreationTime',
            packageExpiredTime: 'PackageExpiredTime',
            packageId: 'PackageId',
            packageStatus: 'PackageStatus',
            packageType: 'PackageType',
            packageUsedUpStrategy: 'PackageUsedUpStrategy',
            periodEndTime: 'PeriodEndTime',
            periodStartTime: 'PeriodStartTime',
            postPaidLimitFee: 'PostPaidLimitFee',
            totalDuration: 'TotalDuration',
            usedDuration: 'UsedDuration',
        };
    }
    static types() {
        return {
            orderInstanceId: 'string',
            packageCreationTime: 'string',
            packageExpiredTime: 'string',
            packageId: 'string',
            packageStatus: 'string',
            packageType: 'string',
            packageUsedUpStrategy: 'string',
            periodEndTime: 'string',
            periodStartTime: 'string',
            postPaidLimitFee: 'number',
            totalDuration: 'number',
            usedDuration: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesResponseBodyResourcesDesktopDurationList = DescribeUserResourcesResponseBodyResourcesDesktopDurationList;
class DescribeUserResourcesResponseBodyResourcesDesktopTimers extends $dara.Model {
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
            allowClientSetting: 'string',
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
exports.DescribeUserResourcesResponseBodyResourcesDesktopTimers = DescribeUserResourcesResponseBodyResourcesDesktopTimers;
class DescribeUserResourcesResponseBodyResourcesDisks extends $dara.Model {
    static names() {
        return {
            diskSize: 'DiskSize',
            diskType: 'DiskType',
        };
    }
    static types() {
        return {
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
exports.DescribeUserResourcesResponseBodyResourcesDisks = DescribeUserResourcesResponseBodyResourcesDisks;
class DescribeUserResourcesResponseBodyResourcesFotaUpdate extends $dara.Model {
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
exports.DescribeUserResourcesResponseBodyResourcesFotaUpdate = DescribeUserResourcesResponseBodyResourcesFotaUpdate;
class DescribeUserResourcesResponseBodyResourcesOsUpdatePackages extends $dara.Model {
    static names() {
        return {
            description: 'Description',
            kb: 'Kb',
            title: 'Title',
        };
    }
    static types() {
        return {
            description: 'string',
            kb: 'string',
            title: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesResponseBodyResourcesOsUpdatePackages = DescribeUserResourcesResponseBodyResourcesOsUpdatePackages;
class DescribeUserResourcesResponseBodyResourcesOsUpdate extends $dara.Model {
    static names() {
        return {
            checkId: 'CheckId',
            kbListString: 'KbListString',
            packageCount: 'PackageCount',
            packages: 'Packages',
            updateCatalogUrl: 'UpdateCatalogUrl',
        };
    }
    static types() {
        return {
            checkId: 'string',
            kbListString: 'string',
            packageCount: 'number',
            packages: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesOsUpdatePackages },
            updateCatalogUrl: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.packages)) {
            $dara.Model.validateArray(this.packages);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesResponseBodyResourcesOsUpdate = DescribeUserResourcesResponseBodyResourcesOsUpdate;
class DescribeUserResourcesResponseBodyResourcesSessions extends $dara.Model {
    static names() {
        return {
            lastClientIp: 'LastClientIp',
            nickName: 'NickName',
            resourceSessionStartTime: 'ResourceSessionStartTime',
            userId: 'UserId',
            userPrincipalName: 'UserPrincipalName',
        };
    }
    static types() {
        return {
            lastClientIp: 'string',
            nickName: 'string',
            resourceSessionStartTime: 'string',
            userId: 'string',
            userPrincipalName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesResponseBodyResourcesSessions = DescribeUserResourcesResponseBodyResourcesSessions;
class DescribeUserResourcesResponseBodyResources extends $dara.Model {
    static names() {
        return {
            accessType: 'AccessType',
            agentImUrl: 'AgentImUrl',
            agentProviderList: 'AgentProviderList',
            aliUid: 'AliUid',
            appId: 'AppId',
            authMode: 'AuthMode',
            categoryId: 'CategoryId',
            categoryType: 'CategoryType',
            cdsName: 'CdsName',
            centerResourceId: 'CenterResourceId',
            chargeType: 'ChargeType',
            clients: 'Clients',
            connectionProperties: 'ConnectionProperties',
            cpu: 'Cpu',
            createTime: 'CreateTime',
            desktopDurationList: 'DesktopDurationList',
            desktopTimers: 'DesktopTimers',
            disks: 'Disks',
            expiredTime: 'ExpiredTime',
            externalDomainId: 'ExternalDomainId',
            externalUserId: 'ExternalUserId',
            fotaUpdate: 'FotaUpdate',
            globalStatus: 'GlobalStatus',
            gpuSpec: 'GpuSpec',
            hasUpgrade: 'HasUpgrade',
            hibernationBeta: 'HibernationBeta',
            icon: 'Icon',
            lastStartTime: 'LastStartTime',
            localName: 'LocalName',
            managementStatuses: 'ManagementStatuses',
            memory: 'Memory',
            officeSiteId: 'OfficeSiteId',
            orderStatus: 'OrderStatus',
            os: 'Os',
            osDescription: 'OsDescription',
            osType: 'OsType',
            osUpdate: 'OsUpdate',
            productType: 'ProductType',
            protocolType: 'ProtocolType',
            realDesktopId: 'RealDesktopId',
            regionId: 'RegionId',
            regionLocation: 'RegionLocation',
            resourceGroupId: 'ResourceGroupId',
            resourceId: 'ResourceId',
            resourceLevel: 'ResourceLevel',
            resourceName: 'ResourceName',
            resourceSessionStatus: 'ResourceSessionStatus',
            resourceStatus: 'ResourceStatus',
            resourceType: 'ResourceType',
            sessionType: 'SessionType',
            sessions: 'Sessions',
            subPayType: 'SubPayType',
            supportAgentIm: 'SupportAgentIm',
            supportHibernation: 'SupportHibernation',
            supportedActions: 'SupportedActions',
            themeColor: 'ThemeColor',
            userCustomName: 'UserCustomName',
            version: 'Version',
        };
    }
    static types() {
        return {
            accessType: 'string',
            agentImUrl: 'string',
            agentProviderList: { 'type': 'array', 'itemType': 'string' },
            aliUid: 'number',
            appId: 'string',
            authMode: 'string',
            categoryId: 'number',
            categoryType: 'number',
            cdsName: 'string',
            centerResourceId: 'string',
            chargeType: 'string',
            clients: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesClients },
            connectionProperties: 'string',
            cpu: 'number',
            createTime: 'string',
            desktopDurationList: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesDesktopDurationList },
            desktopTimers: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesDesktopTimers },
            disks: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesDisks },
            expiredTime: 'string',
            externalDomainId: 'string',
            externalUserId: 'string',
            fotaUpdate: DescribeUserResourcesResponseBodyResourcesFotaUpdate,
            globalStatus: 'boolean',
            gpuSpec: 'string',
            hasUpgrade: 'boolean',
            hibernationBeta: 'boolean',
            icon: 'string',
            lastStartTime: 'string',
            localName: 'string',
            managementStatuses: { 'type': 'array', 'itemType': 'string' },
            memory: 'number',
            officeSiteId: 'string',
            orderStatus: 'string',
            os: 'string',
            osDescription: 'string',
            osType: 'string',
            osUpdate: DescribeUserResourcesResponseBodyResourcesOsUpdate,
            productType: 'string',
            protocolType: 'string',
            realDesktopId: 'string',
            regionId: 'string',
            regionLocation: 'string',
            resourceGroupId: 'string',
            resourceId: 'string',
            resourceLevel: 'string',
            resourceName: 'string',
            resourceSessionStatus: 'string',
            resourceStatus: 'string',
            resourceType: 'string',
            sessionType: 'string',
            sessions: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResourcesSessions },
            subPayType: 'string',
            supportAgentIm: 'boolean',
            supportHibernation: 'boolean',
            supportedActions: { 'type': 'array', 'itemType': 'string' },
            themeColor: 'string',
            userCustomName: 'string',
            version: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.agentProviderList)) {
            $dara.Model.validateArray(this.agentProviderList);
        }
        if (Array.isArray(this.clients)) {
            $dara.Model.validateArray(this.clients);
        }
        if (Array.isArray(this.desktopDurationList)) {
            $dara.Model.validateArray(this.desktopDurationList);
        }
        if (Array.isArray(this.desktopTimers)) {
            $dara.Model.validateArray(this.desktopTimers);
        }
        if (Array.isArray(this.disks)) {
            $dara.Model.validateArray(this.disks);
        }
        if (this.fotaUpdate && typeof this.fotaUpdate.validate === 'function') {
            this.fotaUpdate.validate();
        }
        if (Array.isArray(this.managementStatuses)) {
            $dara.Model.validateArray(this.managementStatuses);
        }
        if (this.osUpdate && typeof this.osUpdate.validate === 'function') {
            this.osUpdate.validate();
        }
        if (Array.isArray(this.sessions)) {
            $dara.Model.validateArray(this.sessions);
        }
        if (Array.isArray(this.supportedActions)) {
            $dara.Model.validateArray(this.supportedActions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesResponseBodyResources = DescribeUserResourcesResponseBodyResources;
class DescribeUserResourcesResponseBody extends $dara.Model {
    static names() {
        return {
            agentBriefSummary: 'AgentBriefSummary',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            queryFailedResourceTypes: 'QueryFailedResourceTypes',
            rankVersion: 'RankVersion',
            requestId: 'RequestId',
            resources: 'Resources',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            agentBriefSummary: DescribeUserResourcesResponseBodyAgentBriefSummary,
            maxResults: 'number',
            nextToken: 'string',
            queryFailedResourceTypes: { 'type': 'array', 'itemType': 'string' },
            rankVersion: 'number',
            requestId: 'string',
            resources: { 'type': 'array', 'itemType': DescribeUserResourcesResponseBodyResources },
            totalCount: 'number',
        };
    }
    validate() {
        if (this.agentBriefSummary && typeof this.agentBriefSummary.validate === 'function') {
            this.agentBriefSummary.validate();
        }
        if (Array.isArray(this.queryFailedResourceTypes)) {
            $dara.Model.validateArray(this.queryFailedResourceTypes);
        }
        if (Array.isArray(this.resources)) {
            $dara.Model.validateArray(this.resources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeUserResourcesResponseBody = DescribeUserResourcesResponseBody;
//# sourceMappingURL=DescribeUserResourcesResponseBody.js.map