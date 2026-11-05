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
exports.AppInstanceAggregate = exports.AppInstanceAggregateTags = exports.AppInstanceAggregatePartnerDetail = exports.AppInstanceAggregatePartnerDetailBindData = exports.AppInstanceAggregateConversationInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const AppAiStaff_1 = require("./AppAiStaff");
const AppOperationAddress_1 = require("./AppOperationAddress");
const AppServiceAggregate_1 = require("./AppServiceAggregate");
const AppInstanceProfile_1 = require("./AppInstanceProfile");
const TemplateRecord_1 = require("./TemplateRecord");
/**
 */
class AppInstanceAggregateConversationInfo extends $dara.Model {
    static names() {
        return {
            chatNum: 'ChatNum',
        };
    }
    static types() {
        return {
            chatNum: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AppInstanceAggregateConversationInfo = AppInstanceAggregateConversationInfo;
class AppInstanceAggregatePartnerDetailBindData extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            id: 'Id',
            mobile: 'Mobile',
            parentPk: 'ParentPk',
            partnerId: 'PartnerId',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            bizId: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            id: 'string',
            mobile: 'string',
            parentPk: 'string',
            partnerId: 'string',
            userId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AppInstanceAggregatePartnerDetailBindData = AppInstanceAggregatePartnerDetailBindData;
class AppInstanceAggregatePartnerDetail extends $dara.Model {
    static names() {
        return {
            bindData: 'BindData',
            partnerId: 'PartnerId',
            status: 'Status',
        };
    }
    static types() {
        return {
            bindData: AppInstanceAggregatePartnerDetailBindData,
            partnerId: 'string',
            status: 'string',
        };
    }
    validate() {
        if (this.bindData && typeof this.bindData.validate === 'function') {
            this.bindData.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AppInstanceAggregatePartnerDetail = AppInstanceAggregatePartnerDetail;
class AppInstanceAggregateTags extends $dara.Model {
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
exports.AppInstanceAggregateTags = AppInstanceAggregateTags;
class AppInstanceAggregate extends $dara.Model {
    static names() {
        return {
            aiStaffList: 'AiStaffList',
            appOperationAddress: 'AppOperationAddress',
            appServiceList: 'AppServiceList',
            appSubType: 'AppSubType',
            appType: 'AppType',
            bizId: 'BizId',
            buildType: 'BuildType',
            conversationInfo: 'ConversationInfo',
            createTime: 'CreateTime',
            deleted: 'Deleted',
            description: 'Description',
            designSpecBizId: 'DesignSpecBizId',
            designSpecId: 'DesignSpecId',
            domain: 'Domain',
            endTime: 'EndTime',
            espBizId: 'EspBizId',
            gmtDelete: 'GmtDelete',
            gmtModified: 'GmtModified',
            gmtPublish: 'GmtPublish',
            iconUrl: 'IconUrl',
            name: 'Name',
            offline: 'Offline',
            partnerDetail: 'PartnerDetail',
            profile: 'Profile',
            resourceGroupId: 'ResourceGroupId',
            siteHost: 'SiteHost',
            slug: 'Slug',
            sourceType: 'SourceType',
            startTime: 'StartTime',
            status: 'Status',
            statusText: 'StatusText',
            tags: 'Tags',
            templateRecord: 'TemplateRecord',
            thumbnailUrl: 'ThumbnailUrl',
            userId: 'UserId',
            version: 'Version',
        };
    }
    static types() {
        return {
            aiStaffList: { 'type': 'array', 'itemType': AppAiStaff_1.AppAiStaff },
            appOperationAddress: AppOperationAddress_1.AppOperationAddress,
            appServiceList: { 'type': 'array', 'itemType': AppServiceAggregate_1.AppServiceAggregate },
            appSubType: 'string',
            appType: 'string',
            bizId: 'string',
            buildType: 'string',
            conversationInfo: AppInstanceAggregateConversationInfo,
            createTime: 'string',
            deleted: 'number',
            description: 'string',
            designSpecBizId: 'string',
            designSpecId: 'string',
            domain: 'string',
            endTime: 'string',
            espBizId: 'string',
            gmtDelete: 'string',
            gmtModified: 'string',
            gmtPublish: 'string',
            iconUrl: 'string',
            name: 'string',
            offline: 'boolean',
            partnerDetail: AppInstanceAggregatePartnerDetail,
            profile: AppInstanceProfile_1.AppInstanceProfile,
            resourceGroupId: 'string',
            siteHost: 'string',
            slug: 'string',
            sourceType: 'string',
            startTime: 'string',
            status: 'string',
            statusText: 'string',
            tags: { 'type': 'array', 'itemType': AppInstanceAggregateTags },
            templateRecord: TemplateRecord_1.TemplateRecord,
            thumbnailUrl: 'string',
            userId: 'string',
            version: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.aiStaffList)) {
            $dara.Model.validateArray(this.aiStaffList);
        }
        if (this.appOperationAddress && typeof this.appOperationAddress.validate === 'function') {
            this.appOperationAddress.validate();
        }
        if (Array.isArray(this.appServiceList)) {
            $dara.Model.validateArray(this.appServiceList);
        }
        if (this.conversationInfo && typeof this.conversationInfo.validate === 'function') {
            this.conversationInfo.validate();
        }
        if (this.partnerDetail && typeof this.partnerDetail.validate === 'function') {
            this.partnerDetail.validate();
        }
        if (this.profile && typeof this.profile.validate === 'function') {
            this.profile.validate();
        }
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        if (this.templateRecord && typeof this.templateRecord.validate === 'function') {
            this.templateRecord.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AppInstanceAggregate = AppInstanceAggregate;
//# sourceMappingURL=AppInstanceAggregate.js.map