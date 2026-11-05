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
exports.DescribeTagsResponseBody = exports.DescribeTagsResponseBodyItems = exports.DescribeTagsResponseBodyItemsTagInfos = exports.DescribeTagsResponseBodyItemsTagInfosDBInstanceIds = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeTagsResponseBodyItemsTagInfosDBInstanceIds extends $dara.Model {
    static names() {
        return {
            DBInstanceIds: 'DBInstanceIds',
        };
    }
    static types() {
        return {
            DBInstanceIds: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceIds)) {
            $dara.Model.validateArray(this.DBInstanceIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeTagsResponseBodyItemsTagInfosDBInstanceIds = DescribeTagsResponseBodyItemsTagInfosDBInstanceIds;
class DescribeTagsResponseBodyItemsTagInfos extends $dara.Model {
    static names() {
        return {
            DBInstanceIds: 'DBInstanceIds',
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
            DBInstanceIds: DescribeTagsResponseBodyItemsTagInfosDBInstanceIds,
            tagKey: 'string',
            tagValue: 'string',
        };
    }
    validate() {
        if (this.DBInstanceIds && typeof this.DBInstanceIds.validate === 'function') {
            this.DBInstanceIds.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeTagsResponseBodyItemsTagInfos = DescribeTagsResponseBodyItemsTagInfos;
class DescribeTagsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            tagInfos: 'TagInfos',
        };
    }
    static types() {
        return {
            tagInfos: { 'type': 'array', 'itemType': DescribeTagsResponseBodyItemsTagInfos },
        };
    }
    validate() {
        if (Array.isArray(this.tagInfos)) {
            $dara.Model.validateArray(this.tagInfos);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeTagsResponseBodyItems = DescribeTagsResponseBodyItems;
class DescribeTagsResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: DescribeTagsResponseBodyItems,
            requestId: 'string',
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
exports.DescribeTagsResponseBody = DescribeTagsResponseBody;
//# sourceMappingURL=DescribeTagsResponseBody.js.map