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
exports.DescribeHistoryEventsResponseBody = exports.DescribeHistoryEventsResponseBodyItems = exports.DescribeHistoryEventsResponseBodyItemsData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeHistoryEventsResponseBodyItemsData extends $dara.Model {
    static names() {
        return {
            cmsProduct: 'CmsProduct',
            dbType: 'DbType',
            detailImpact: 'DetailImpact',
            detailReason: 'DetailReason',
            endTime: 'EndTime',
            eventCategory: 'EventCategory',
            eventCode: 'EventCode',
            eventDetail: 'EventDetail',
            eventId: 'EventId',
            eventImpact: 'EventImpact',
            eventLevel: 'EventLevel',
            eventReason: 'EventReason',
            eventStatus: 'EventStatus',
            eventType: 'EventType',
            gmtCreated: 'GmtCreated',
            gmtModified: 'GmtModified',
            handleStatus: 'HandleStatus',
            hasLifeCycle: 'HasLifeCycle',
            instanceId: 'InstanceId',
            instanceName: 'InstanceName',
            isClosed: 'IsClosed',
            product: 'Product',
            regionId: 'RegionId',
            resourceType: 'ResourceType',
            sourceType: 'SourceType',
            startTime: 'StartTime',
            uid: 'Uid',
        };
    }
    static types() {
        return {
            cmsProduct: 'string',
            dbType: 'string',
            detailImpact: 'string',
            detailReason: 'string',
            endTime: 'string',
            eventCategory: 'string',
            eventCode: 'string',
            eventDetail: 'string',
            eventId: 'string',
            eventImpact: 'string',
            eventLevel: 'string',
            eventReason: 'string',
            eventStatus: 'string',
            eventType: 'string',
            gmtCreated: 'string',
            gmtModified: 'string',
            handleStatus: 'string',
            hasLifeCycle: 'number',
            instanceId: 'string',
            instanceName: 'string',
            isClosed: 'number',
            product: 'string',
            regionId: 'string',
            resourceType: 'string',
            sourceType: 'string',
            startTime: 'string',
            uid: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeHistoryEventsResponseBodyItemsData = DescribeHistoryEventsResponseBodyItemsData;
class DescribeHistoryEventsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            id: 'Id',
            region: 'Region',
            source: 'Source',
            specversion: 'Specversion',
            subject: 'Subject',
            time: 'Time',
            type: 'Type',
        };
    }
    static types() {
        return {
            data: DescribeHistoryEventsResponseBodyItemsData,
            id: 'string',
            region: 'string',
            source: 'string',
            specversion: 'string',
            subject: 'string',
            time: 'string',
            type: 'string',
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
exports.DescribeHistoryEventsResponseBodyItems = DescribeHistoryEventsResponseBodyItems;
class DescribeHistoryEventsResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeHistoryEventsResponseBodyItems },
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeHistoryEventsResponseBody = DescribeHistoryEventsResponseBody;
//# sourceMappingURL=DescribeHistoryEventsResponseBody.js.map