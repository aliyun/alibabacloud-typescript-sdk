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
exports.DescribeRCInstanceHistoryEventsRequest = exports.DescribeRCInstanceHistoryEventsRequestTag = exports.DescribeRCInstanceHistoryEventsRequestNotBefore = exports.DescribeRCInstanceHistoryEventsRequestEventPublishTime = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCInstanceHistoryEventsRequestEventPublishTime extends $dara.Model {
    static names() {
        return {
            end: 'End',
            start: 'Start',
        };
    }
    static types() {
        return {
            end: 'string',
            start: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsRequestEventPublishTime = DescribeRCInstanceHistoryEventsRequestEventPublishTime;
class DescribeRCInstanceHistoryEventsRequestNotBefore extends $dara.Model {
    static names() {
        return {
            end: 'End',
            start: 'Start',
        };
    }
    static types() {
        return {
            end: 'string',
            start: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsRequestNotBefore = DescribeRCInstanceHistoryEventsRequestNotBefore;
class DescribeRCInstanceHistoryEventsRequestTag extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsRequestTag = DescribeRCInstanceHistoryEventsRequestTag;
class DescribeRCInstanceHistoryEventsRequest extends $dara.Model {
    static names() {
        return {
            eventPublishTime: 'EventPublishTime',
            notBefore: 'NotBefore',
            eventCycleStatus: 'EventCycleStatus',
            eventId: 'EventId',
            eventType: 'EventType',
            impactLevel: 'ImpactLevel',
            instanceEventCycleStatus: 'InstanceEventCycleStatus',
            instanceEventType: 'InstanceEventType',
            instanceId: 'InstanceId',
            maxResults: 'MaxResults',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            resourceId: 'ResourceId',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            eventPublishTime: DescribeRCInstanceHistoryEventsRequestEventPublishTime,
            notBefore: DescribeRCInstanceHistoryEventsRequestNotBefore,
            eventCycleStatus: 'string',
            eventId: { 'type': 'array', 'itemType': 'string' },
            eventType: 'string',
            impactLevel: 'string',
            instanceEventCycleStatus: { 'type': 'array', 'itemType': 'string' },
            instanceEventType: { 'type': 'array', 'itemType': 'string' },
            instanceId: 'string',
            maxResults: 'string',
            pageNumber: 'string',
            pageSize: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            resourceId: { 'type': 'array', 'itemType': 'string' },
            tag: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsRequestTag },
        };
    }
    validate() {
        if (this.eventPublishTime && typeof this.eventPublishTime.validate === 'function') {
            this.eventPublishTime.validate();
        }
        if (this.notBefore && typeof this.notBefore.validate === 'function') {
            this.notBefore.validate();
        }
        if (Array.isArray(this.eventId)) {
            $dara.Model.validateArray(this.eventId);
        }
        if (Array.isArray(this.instanceEventCycleStatus)) {
            $dara.Model.validateArray(this.instanceEventCycleStatus);
        }
        if (Array.isArray(this.instanceEventType)) {
            $dara.Model.validateArray(this.instanceEventType);
        }
        if (Array.isArray(this.resourceId)) {
            $dara.Model.validateArray(this.resourceId);
        }
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCInstanceHistoryEventsRequest = DescribeRCInstanceHistoryEventsRequest;
//# sourceMappingURL=DescribeRcinstanceHistoryEventsRequest.js.map