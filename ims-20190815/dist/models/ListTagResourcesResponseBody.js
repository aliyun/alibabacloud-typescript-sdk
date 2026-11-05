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
exports.ListTagResourcesResponseBody = exports.ListTagResourcesResponseBodyTagResources = exports.ListTagResourcesResponseBodyTagResourcesTagResource = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
    static names() {
        return {
            resourceId: 'ResourceId',
            resourceType: 'ResourceType',
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
            resourceId: 'string',
            resourceType: 'string',
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
exports.ListTagResourcesResponseBodyTagResourcesTagResource = ListTagResourcesResponseBodyTagResourcesTagResource;
class ListTagResourcesResponseBodyTagResources extends $dara.Model {
    static names() {
        return {
            tagResource: 'TagResource',
        };
    }
    static types() {
        return {
            tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
        };
    }
    validate() {
        if (Array.isArray(this.tagResource)) {
            $dara.Model.validateArray(this.tagResource);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListTagResourcesResponseBodyTagResources = ListTagResourcesResponseBodyTagResources;
class ListTagResourcesResponseBody extends $dara.Model {
    static names() {
        return {
            isTruncated: 'IsTruncated',
            nextToken: 'NextToken',
            requestId: 'RequestId',
            tagResources: 'TagResources',
        };
    }
    static types() {
        return {
            isTruncated: 'boolean',
            nextToken: 'string',
            requestId: 'string',
            tagResources: ListTagResourcesResponseBodyTagResources,
        };
    }
    validate() {
        if (this.tagResources && typeof this.tagResources.validate === 'function') {
            this.tagResources.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListTagResourcesResponseBody = ListTagResourcesResponseBody;
//# sourceMappingURL=ListTagResourcesResponseBody.js.map