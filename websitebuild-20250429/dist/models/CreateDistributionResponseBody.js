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
exports.CreateDistributionResponseBody = exports.CreateDistributionResponseBodyModule = exports.CreateDistributionResponseBodyModuleDrafts = exports.CreateDistributionResponseBodyModuleDraftsCoverImages = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateDistributionResponseBodyModuleDraftsCoverImages extends $dara.Model {
    static names() {
        return {
            materialFileId: 'MaterialFileId',
            ossUrl: 'OssUrl',
            sortOrder: 'SortOrder',
        };
    }
    static types() {
        return {
            materialFileId: 'string',
            ossUrl: 'string',
            sortOrder: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDistributionResponseBodyModuleDraftsCoverImages = CreateDistributionResponseBodyModuleDraftsCoverImages;
class CreateDistributionResponseBodyModuleDrafts extends $dara.Model {
    static names() {
        return {
            adaptStatus: 'AdaptStatus',
            adaptedContent: 'AdaptedContent',
            adaptedTitle: 'AdaptedTitle',
            channel: 'Channel',
            channelAccount: 'ChannelAccount',
            channelAccountName: 'ChannelAccountName',
            channelName: 'ChannelName',
            channelType: 'ChannelType',
            coverImages: 'CoverImages',
            draftId: 'DraftId',
            externalId: 'ExternalId',
            externalUrl: 'ExternalUrl',
            failReason: 'FailReason',
            publishConfig: 'PublishConfig',
            publishedAt: 'PublishedAt',
            status: 'Status',
        };
    }
    static types() {
        return {
            adaptStatus: 'string',
            adaptedContent: 'string',
            adaptedTitle: 'string',
            channel: 'string',
            channelAccount: 'string',
            channelAccountName: 'string',
            channelName: 'string',
            channelType: 'string',
            coverImages: { 'type': 'array', 'itemType': CreateDistributionResponseBodyModuleDraftsCoverImages },
            draftId: 'string',
            externalId: 'string',
            externalUrl: 'string',
            failReason: 'string',
            publishConfig: 'string',
            publishedAt: 'number',
            status: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.coverImages)) {
            $dara.Model.validateArray(this.coverImages);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDistributionResponseBodyModuleDrafts = CreateDistributionResponseBodyModuleDrafts;
class CreateDistributionResponseBodyModule extends $dara.Model {
    static names() {
        return {
            articleId: 'ArticleId',
            batchId: 'BatchId',
            createTime: 'CreateTime',
            drafts: 'Drafts',
        };
    }
    static types() {
        return {
            articleId: 'string',
            batchId: 'string',
            createTime: 'number',
            drafts: { 'type': 'array', 'itemType': CreateDistributionResponseBodyModuleDrafts },
        };
    }
    validate() {
        if (Array.isArray(this.drafts)) {
            $dara.Model.validateArray(this.drafts);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDistributionResponseBodyModule = CreateDistributionResponseBodyModule;
class CreateDistributionResponseBody extends $dara.Model {
    static names() {
        return {
            accessDeniedDetail: 'AccessDeniedDetail',
            allowRetry: 'AllowRetry',
            appName: 'AppName',
            dynamicCode: 'DynamicCode',
            dynamicMessage: 'DynamicMessage',
            errorArgs: 'ErrorArgs',
            module: 'Module',
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
            module: CreateDistributionResponseBodyModule,
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
exports.CreateDistributionResponseBody = CreateDistributionResponseBody;
//# sourceMappingURL=CreateDistributionResponseBody.js.map