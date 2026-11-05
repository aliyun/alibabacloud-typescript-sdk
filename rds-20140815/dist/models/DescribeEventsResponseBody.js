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
exports.DescribeEventsResponseBody = exports.DescribeEventsResponseBodyEventItems = exports.DescribeEventsResponseBodyEventItemsEventItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeEventsResponseBodyEventItemsEventItems extends $dara.Model {
    static names() {
        return {
            callerUid: 'CallerUid',
            eventId: 'EventId',
            eventName: 'EventName',
            eventPayload: 'EventPayload',
            eventReason: 'EventReason',
            eventRecordTime: 'EventRecordTime',
            eventTime: 'EventTime',
            eventType: 'EventType',
            eventUserType: 'EventUserType',
            regionId: 'RegionId',
            resourceName: 'ResourceName',
            resourceType: 'ResourceType',
        };
    }
    static types() {
        return {
            callerUid: 'number',
            eventId: 'number',
            eventName: 'string',
            eventPayload: 'string',
            eventReason: 'string',
            eventRecordTime: 'string',
            eventTime: 'string',
            eventType: 'string',
            eventUserType: 'string',
            regionId: 'string',
            resourceName: 'string',
            resourceType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeEventsResponseBodyEventItemsEventItems = DescribeEventsResponseBodyEventItemsEventItems;
class DescribeEventsResponseBodyEventItems extends $dara.Model {
    static names() {
        return {
            eventItems: 'EventItems',
        };
    }
    static types() {
        return {
            eventItems: { 'type': 'array', 'itemType': DescribeEventsResponseBodyEventItemsEventItems },
        };
    }
    validate() {
        if (Array.isArray(this.eventItems)) {
            $dara.Model.validateArray(this.eventItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeEventsResponseBodyEventItems = DescribeEventsResponseBodyEventItems;
class DescribeEventsResponseBody extends $dara.Model {
    static names() {
        return {
            eventItems: 'EventItems',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            eventItems: DescribeEventsResponseBodyEventItems,
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.eventItems && typeof this.eventItems.validate === 'function') {
            this.eventItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeEventsResponseBody = DescribeEventsResponseBody;
//# sourceMappingURL=DescribeEventsResponseBody.js.map