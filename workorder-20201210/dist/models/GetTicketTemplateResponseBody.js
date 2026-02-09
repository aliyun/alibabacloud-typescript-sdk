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
exports.GetTicketTemplateResponseBody = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetTicketTemplateResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            code: 'Code',
            data: 'Data',
            httpStatusCode: 'HttpStatusCode',
            message: 'Message',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            success: 'Success',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            accessDeniedDetail: 'string',
            code: 'number',
            data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            httpStatusCode: 'number',
            message: 'string',
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            success: 'boolean',
            totalCount: 'number',
        };
    }
    validate() {
        if (this.data) {
            $dara.Model.validateMap(this.data);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetTicketTemplateResponseBody = GetTicketTemplateResponseBody;
//# sourceMappingURL=GetTicketTemplateResponseBody.js.map