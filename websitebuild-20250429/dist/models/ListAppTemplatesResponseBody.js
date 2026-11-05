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
exports.ListAppTemplatesResponseBody = exports.ListAppTemplatesResponseBodyModule = exports.ListAppTemplatesResponseBodyModuleNext = exports.ListAppTemplatesResponseBodyModuleData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListAppTemplatesResponseBodyModuleData extends $dara.Model {
    static names() {
        return {
            appType: 'AppType',
            bizId: 'BizId',
            colorScheme: 'ColorScheme',
            colorSchemeName: 'ColorSchemeName',
            copyCount: 'CopyCount',
            creator: 'Creator',
            gmtCreateTime: 'GmtCreateTime',
            gmtModifiedTime: 'GmtModifiedTime',
            id: 'Id',
            industry: 'Industry',
            industryName: 'IndustryName',
            isRecommended: 'IsRecommended',
            lastModifier: 'LastModifier',
            likeCount: 'LikeCount',
            liked: 'Liked',
            metadata: 'Metadata',
            previewUrl: 'PreviewUrl',
            productVersion: 'ProductVersion',
            productVersionName: 'ProductVersionName',
            shareCount: 'ShareCount',
            status: 'Status',
            templateId: 'TemplateId',
            templateName: 'TemplateName',
            thumbnailUrl: 'ThumbnailUrl',
            viewCount: 'ViewCount',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            appType: 'string',
            bizId: 'string',
            colorScheme: 'string',
            colorSchemeName: 'string',
            copyCount: 'number',
            creator: 'string',
            gmtCreateTime: 'string',
            gmtModifiedTime: 'string',
            id: 'number',
            industry: 'string',
            industryName: 'string',
            isRecommended: 'boolean',
            lastModifier: 'string',
            likeCount: 'number',
            liked: 'boolean',
            metadata: 'string',
            previewUrl: 'string',
            productVersion: 'string',
            productVersionName: 'string',
            shareCount: 'number',
            status: 'string',
            templateId: 'string',
            templateName: 'string',
            thumbnailUrl: 'string',
            viewCount: 'number',
            weight: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppTemplatesResponseBodyModuleData = ListAppTemplatesResponseBodyModuleData;
class ListAppTemplatesResponseBodyModuleNext extends $dara.Model {
    static names() {
        return {
            appType: 'AppType',
            bizId: 'BizId',
            colorScheme: 'ColorScheme',
            colorSchemeName: 'ColorSchemeName',
            copyCount: 'CopyCount',
            creator: 'Creator',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            id: 'Id',
            industry: 'Industry',
            industryName: 'IndustryName',
            isRecommended: 'IsRecommended',
            lastModifier: 'LastModifier',
            likeCount: 'LikeCount',
            liked: 'Liked',
            metadata: 'Metadata',
            previewUrl: 'PreviewUrl',
            productVersion: 'ProductVersion',
            productVersionName: 'ProductVersionName',
            shareCount: 'ShareCount',
            status: 'Status',
            templateId: 'TemplateId',
            templateName: 'TemplateName',
            thumbnailUrl: 'ThumbnailUrl',
            viewCount: 'ViewCount',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            appType: 'string',
            bizId: 'string',
            colorScheme: 'string',
            colorSchemeName: 'string',
            copyCount: 'number',
            creator: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            id: 'number',
            industry: 'string',
            industryName: 'string',
            isRecommended: 'boolean',
            lastModifier: 'string',
            likeCount: 'number',
            liked: 'boolean',
            metadata: 'string',
            previewUrl: 'string',
            productVersion: 'string',
            productVersionName: 'string',
            shareCount: 'number',
            status: 'string',
            templateId: 'string',
            templateName: 'string',
            thumbnailUrl: 'string',
            viewCount: 'number',
            weight: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppTemplatesResponseBodyModuleNext = ListAppTemplatesResponseBodyModuleNext;
class ListAppTemplatesResponseBodyModule extends $dara.Model {
    static names() {
        return {
            currentPageNum: 'CurrentPageNum',
            data: 'Data',
            next: 'Next',
            nextPage: 'NextPage',
            pageSize: 'PageSize',
            prePage: 'PrePage',
            resultLimit: 'ResultLimit',
            totalItemNum: 'TotalItemNum',
            totalPageNum: 'TotalPageNum',
        };
    }
    static types() {
        return {
            currentPageNum: 'number',
            data: { 'type': 'array', 'itemType': ListAppTemplatesResponseBodyModuleData },
            next: ListAppTemplatesResponseBodyModuleNext,
            nextPage: 'boolean',
            pageSize: 'number',
            prePage: 'boolean',
            resultLimit: 'boolean',
            totalItemNum: 'number',
            totalPageNum: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        if (this.next && typeof this.next.validate === 'function') {
            this.next.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppTemplatesResponseBodyModule = ListAppTemplatesResponseBodyModule;
class ListAppTemplatesResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            maxResults: 'MaxResults',
            module: 'Module',
            nextToken: 'NextToken',
            requestId: 'RequestId',
            rootErrorCode: 'RootErrorCode',
            rootErrorMsg: 'RootErrorMsg',
            synchro: 'Synchro',
        };
    }
    static types() {
        return {
            accessDeniedDetail: 'string',
            allowRetry: 'boolean',
            appName: 'string',
            dynamicCode: 'string',
            dynamicMessage: 'string',
            errorArgs: { 'type': 'array', 'itemType': 'any' },
            maxResults: 'number',
            module: ListAppTemplatesResponseBodyModule,
            nextToken: 'string',
            requestId: 'string',
            rootErrorCode: 'string',
            rootErrorMsg: 'string',
            synchro: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.errorArgs)) {
            $dara.Model.validateArray(this.errorArgs);
        }
        if (this.module && typeof this.module.validate === 'function') {
            this.module.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAppTemplatesResponseBody = ListAppTemplatesResponseBody;
//# sourceMappingURL=ListAppTemplatesResponseBody.js.map