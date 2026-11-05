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
exports.SearchImageResponseBody = exports.SearchImageResponseBodyImageResponse = exports.SearchImageResponseBodyImageResponseImageList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class SearchImageResponseBodyImageResponseImageList extends $dara.Model {
    static names() {
        return {
            descriptiveTones: 'DescriptiveTones',
            height: 'Height',
            imageCategory: 'ImageCategory',
            imageRatio: 'ImageRatio',
            imageUuid: 'ImageUuid',
            ossKey: 'OssKey',
            quantitativePalette: 'QuantitativePalette',
            tagsFromImage: 'TagsFromImage',
            url: 'Url',
            width: 'Width',
        };
    }
    static types() {
        return {
            descriptiveTones: 'string',
            height: 'number',
            imageCategory: 'string',
            imageRatio: 'string',
            imageUuid: 'string',
            ossKey: 'string',
            quantitativePalette: 'string',
            tagsFromImage: 'string',
            url: 'string',
            width: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchImageResponseBodyImageResponseImageList = SearchImageResponseBodyImageResponseImageList;
class SearchImageResponseBodyImageResponse extends $dara.Model {
    static names() {
        return {
            imageList: 'ImageList',
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
        };
    }
    static types() {
        return {
            imageList: { 'type': 'array', 'itemType': SearchImageResponseBodyImageResponseImageList },
            maxResults: 'number',
            nextToken: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.imageList)) {
            $dara.Model.validateArray(this.imageList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchImageResponseBodyImageResponse = SearchImageResponseBodyImageResponse;
class SearchImageResponseBody extends $dara.Model {
    static names() {
        return {
            errorCode: 'ErrorCode',
            errorMsg: 'ErrorMsg',
            imageResponse: 'ImageResponse',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            errorCode: 'string',
            errorMsg: 'string',
            imageResponse: SearchImageResponseBodyImageResponse,
            requestId: 'string',
            success: 'string',
        };
    }
    validate() {
        if (this.imageResponse && typeof this.imageResponse.validate === 'function') {
            this.imageResponse.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchImageResponseBody = SearchImageResponseBody;
//# sourceMappingURL=SearchImageResponseBody.js.map