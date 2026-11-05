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
exports.DescribeDBInstanceByTagsResponseBody = exports.DescribeDBInstanceByTagsResponseBodyItems = exports.DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag = exports.DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags = exports.DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag extends $dara.Model {
    static names() {
        return {
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
            tagKey: 'string',
            tagValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag = DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag;
class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTagsTag },
        };
    }
    validate() {
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags = DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags;
class DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            tags: 'Tags',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            tags: DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTagTags,
        };
    }
    validate() {
        if (this.tags && typeof this.tags.validate === 'function') {
            this.tags.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag = DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag;
class DescribeDBInstanceByTagsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBInstanceTag: 'DBInstanceTag',
        };
    }
    static types() {
        return {
            DBInstanceTag: { 'type': 'array', 'itemType': DescribeDBInstanceByTagsResponseBodyItemsDBInstanceTag },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceTag)) {
            $dara.Model.validateArray(this.DBInstanceTag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceByTagsResponseBodyItems = DescribeDBInstanceByTagsResponseBodyItems;
class DescribeDBInstanceByTagsResponseBody extends $dara.Model {
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
            items: DescribeDBInstanceByTagsResponseBodyItems,
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
exports.DescribeDBInstanceByTagsResponseBody = DescribeDBInstanceByTagsResponseBody;
//# sourceMappingURL=DescribeDbinstanceByTagsResponseBody.js.map