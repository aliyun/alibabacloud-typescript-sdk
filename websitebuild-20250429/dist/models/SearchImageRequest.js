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
exports.SearchImageRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class SearchImageRequest extends $dara.Model {
    static names() {
        return {
            colorHex: 'ColorHex',
            hasPerson: 'HasPerson',
            imageCategory: 'ImageCategory',
            imageRatio: 'ImageRatio',
            maxHeight: 'MaxHeight',
            maxResults: 'MaxResults',
            maxWidth: 'MaxWidth',
            minHeight: 'MinHeight',
            minWidth: 'MinWidth',
            nextToken: 'NextToken',
            ossKey: 'OssKey',
            size: 'Size',
            start: 'Start',
            tags: 'Tags',
            text: 'Text',
        };
    }
    static types() {
        return {
            colorHex: 'string',
            hasPerson: 'boolean',
            imageCategory: 'string',
            imageRatio: 'string',
            maxHeight: 'number',
            maxResults: 'number',
            maxWidth: 'number',
            minHeight: 'number',
            minWidth: 'number',
            nextToken: 'string',
            ossKey: 'string',
            size: 'number',
            start: 'number',
            tags: { 'type': 'array', 'itemType': 'string' },
            text: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchImageRequest = SearchImageRequest;
//# sourceMappingURL=SearchImageRequest.js.map