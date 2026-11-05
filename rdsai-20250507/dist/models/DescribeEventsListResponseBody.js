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
exports.DescribeEventsListResponseBody = exports.DescribeEventsListResponseBodyEvents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeEventsListResponseBodyEvents extends $dara.Model {
    static names() {
        return {
            eventCode: 'EventCode',
            eventStatus: 'EventStatus',
            eventTimeList: 'EventTimeList',
            instanceDescription: 'InstanceDescription',
            instanceId: 'InstanceId',
            recoveryTime: 'RecoveryTime',
            regionId: 'RegionId',
        };
    }
    static types() {
        return {
            eventCode: 'string',
            eventStatus: 'string',
            eventTimeList: { 'type': 'array', 'itemType': 'string' },
            instanceDescription: 'string',
            instanceId: 'string',
            recoveryTime: 'string',
            regionId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.eventTimeList)) {
            $dara.Model.validateArray(this.eventTimeList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeEventsListResponseBodyEvents = DescribeEventsListResponseBodyEvents;
class DescribeEventsListResponseBody extends $dara.Model {
    static names() {
        return {
            eventCodeCounts: 'EventCodeCounts',
            events: 'Events',
            pageCount: 'PageCount',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
            totalPages: 'TotalPages',
        };
    }
    static types() {
        return {
            eventCodeCounts: 'string',
            events: { 'type': 'array', 'itemType': DescribeEventsListResponseBodyEvents },
            pageCount: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
            totalPages: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.events)) {
            $dara.Model.validateArray(this.events);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeEventsListResponseBody = DescribeEventsListResponseBody;
//# sourceMappingURL=DescribeEventsListResponseBody.js.map