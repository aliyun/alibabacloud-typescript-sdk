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
exports.DescribeRCInstanceHistoryEventsResponseBody = exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet = exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute = exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks = exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType = exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            name: 'Name',
        };
    }
    static types() {
        return {
            code: 'string',
            name: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus = DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus;
class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            name: 'Name',
        };
    }
    static types() {
        return {
            code: 'string',
            name: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType = DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType;
class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks extends $dara.Model {
    static names() {
        return {
            creationTime: 'CreationTime',
            deviceCategory: 'DeviceCategory',
            deviceSize: 'DeviceSize',
            deviceType: 'DeviceType',
            releaseTime: 'ReleaseTime',
        };
    }
    static types() {
        return {
            creationTime: 'string',
            deviceCategory: 'string',
            deviceSize: 'string',
            deviceType: 'string',
            releaseTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks = DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks;
class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute extends $dara.Model {
    static names() {
        return {
            canAccept: 'CanAccept',
            code: 'Code',
            device: 'Device',
            diskId: 'DiskId',
            hostId: 'HostId',
            hostType: 'HostType',
            inactiveDisks: 'InactiveDisks',
            migrationOptions: 'MigrationOptions',
            onlineRepairPolicy: 'OnlineRepairPolicy',
            punishDomain: 'PunishDomain',
            punishType: 'PunishType',
            punishUrl: 'PunishUrl',
            rack: 'Rack',
            responseResult: 'ResponseResult',
        };
    }
    static types() {
        return {
            canAccept: 'string',
            code: 'string',
            device: 'string',
            diskId: 'string',
            hostId: 'string',
            hostType: 'string',
            inactiveDisks: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttributeInactiveDisks },
            migrationOptions: { 'type': 'array', 'itemType': 'string' },
            onlineRepairPolicy: 'string',
            punishDomain: 'string',
            punishType: 'string',
            punishUrl: 'string',
            rack: 'string',
            responseResult: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.inactiveDisks)) {
            $dara.Model.validateArray(this.inactiveDisks);
        }
        if (Array.isArray(this.migrationOptions)) {
            $dara.Model.validateArray(this.migrationOptions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute = DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute;
class DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet extends $dara.Model {
    static names() {
        return {
            eventCycleStatus: 'EventCycleStatus',
            eventFinishTime: 'EventFinishTime',
            eventId: 'EventId',
            eventPublishTime: 'EventPublishTime',
            eventType: 'EventType',
            extendedAttribute: 'ExtendedAttribute',
            impactLevel: 'ImpactLevel',
            instanceId: 'InstanceId',
            notBefore: 'NotBefore',
            reason: 'Reason',
            reasonCode: 'ReasonCode',
            resourceType: 'ResourceType',
        };
    }
    static types() {
        return {
            eventCycleStatus: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventCycleStatus,
            eventFinishTime: 'string',
            eventId: 'string',
            eventPublishTime: 'string',
            eventType: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetEventType,
            extendedAttribute: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSetExtendedAttribute,
            impactLevel: 'string',
            instanceId: 'string',
            notBefore: 'string',
            reason: 'string',
            reasonCode: 'string',
            resourceType: 'string',
        };
    }
    validate() {
        if (this.eventCycleStatus && typeof this.eventCycleStatus.validate === 'function') {
            this.eventCycleStatus.validate();
        }
        if (this.eventType && typeof this.eventType.validate === 'function') {
            this.eventType.validate();
        }
        if (this.extendedAttribute && typeof this.extendedAttribute.validate === 'function') {
            this.extendedAttribute.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet = DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet;
class DescribeRCInstanceHistoryEventsResponseBody extends $dara.Model {
    static names() {
        return {
            instanceSystemEventSet: 'InstanceSystemEventSet',
            nextToken: 'NextToken',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            instanceSystemEventSet: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet },
            nextToken: 'string',
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.instanceSystemEventSet)) {
            $dara.Model.validateArray(this.instanceSystemEventSet);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsResponseBody = DescribeRCInstanceHistoryEventsResponseBody;
//# sourceMappingURL=DescribeRcinstanceHistoryEventsResponseBody.js.map