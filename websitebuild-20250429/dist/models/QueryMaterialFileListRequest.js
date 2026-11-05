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
exports.QueryMaterialFileListRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class QueryMaterialFileListRequest extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            directoryId: 'DirectoryId',
            maxFileSize: 'MaxFileSize',
            maxResults: 'MaxResults',
            minFileSize: 'MinFileSize',
            name: 'Name',
            nextToken: 'NextToken',
            orderColumn: 'OrderColumn',
            orderType: 'OrderType',
            pageNum: 'PageNum',
            pageSize: 'PageSize',
            statusList: 'StatusList',
            suffixList: 'SuffixList',
            typeList: 'TypeList',
        };
    }
    static types() {
        return {
            bizId: 'string',
            directoryId: 'string',
            maxFileSize: 'number',
            maxResults: 'number',
            minFileSize: 'number',
            name: 'string',
            nextToken: 'string',
            orderColumn: 'string',
            orderType: 'string',
            pageNum: 'number',
            pageSize: 'number',
            statusList: { 'type': 'array', 'itemType': 'string' },
            suffixList: { 'type': 'array', 'itemType': 'string' },
            typeList: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.statusList)) {
            $dara.Model.validateArray(this.statusList);
        }
        if (Array.isArray(this.suffixList)) {
            $dara.Model.validateArray(this.suffixList);
        }
        if (Array.isArray(this.typeList)) {
            $dara.Model.validateArray(this.typeList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.QueryMaterialFileListRequest = QueryMaterialFileListRequest;
//# sourceMappingURL=QueryMaterialFileListRequest.js.map