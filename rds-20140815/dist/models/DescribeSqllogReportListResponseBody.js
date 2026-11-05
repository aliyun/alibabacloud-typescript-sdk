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
exports.DescribeSQLLogReportListResponseBody = exports.DescribeSQLLogReportListResponseBodyItems = exports.DescribeSQLLogReportListResponseBodyItemsItem = exports.DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems = exports.DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem = exports.DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems = exports.DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem extends $dara.Model {
    static names() {
        return {
            avgLatency: 'AvgLatency',
            SQLExecuteTimes: 'SQLExecuteTimes',
            SQLText: 'SQLText',
        };
    }
    static types() {
        return {
            avgLatency: 'number',
            SQLExecuteTimes: 'number',
            SQLText: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem = DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem;
class DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems extends $dara.Model {
    static names() {
        return {
            latencyTopNItem: 'LatencyTopNItem',
        };
    }
    static types() {
        return {
            latencyTopNItem: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItemsLatencyTopNItem },
        };
    }
    validate() {
        if (Array.isArray(this.latencyTopNItem)) {
            $dara.Model.validateArray(this.latencyTopNItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems = DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems;
class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem extends $dara.Model {
    static names() {
        return {
            SQLExecuteTimes: 'SQLExecuteTimes',
            SQLText: 'SQLText',
        };
    }
    static types() {
        return {
            SQLExecuteTimes: 'number',
            SQLText: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem = DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem;
class DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems extends $dara.Model {
    static names() {
        return {
            QPSTopNItem: 'QPSTopNItem',
        };
    }
    static types() {
        return {
            QPSTopNItem: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItemsQPSTopNItem },
        };
    }
    validate() {
        if (Array.isArray(this.QPSTopNItem)) {
            $dara.Model.validateArray(this.QPSTopNItem);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems = DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems;
class DescribeSQLLogReportListResponseBodyItemsItem extends $dara.Model {
    static names() {
        return {
            latencyTopNItems: 'LatencyTopNItems',
            QPSTopNItems: 'QPSTopNItems',
            reportTime: 'ReportTime',
        };
    }
    static types() {
        return {
            latencyTopNItems: DescribeSQLLogReportListResponseBodyItemsItemLatencyTopNItems,
            QPSTopNItems: DescribeSQLLogReportListResponseBodyItemsItemQPSTopNItems,
            reportTime: 'string',
        };
    }
    validate() {
        if (this.latencyTopNItems && typeof this.latencyTopNItems.validate === 'function') {
            this.latencyTopNItems.validate();
        }
        if (this.QPSTopNItems && typeof this.QPSTopNItems.validate === 'function') {
            this.QPSTopNItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogReportListResponseBodyItemsItem = DescribeSQLLogReportListResponseBodyItemsItem;
class DescribeSQLLogReportListResponseBodyItems extends $dara.Model {
    static names() {
        return {
            item: 'Item',
        };
    }
    static types() {
        return {
            item: { 'type': 'array', 'itemType': DescribeSQLLogReportListResponseBodyItemsItem },
        };
    }
    validate() {
        if (Array.isArray(this.item)) {
            $dara.Model.validateArray(this.item);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogReportListResponseBodyItems = DescribeSQLLogReportListResponseBodyItems;
class DescribeSQLLogReportListResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeSQLLogReportListResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSQLLogReportListResponseBody = DescribeSQLLogReportListResponseBody;
//# sourceMappingURL=DescribeSqllogReportListResponseBody.js.map