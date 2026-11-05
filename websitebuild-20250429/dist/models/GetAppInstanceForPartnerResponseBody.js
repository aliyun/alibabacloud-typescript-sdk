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
exports.GetAppInstanceForPartnerResponseBody = exports.GetAppInstanceForPartnerResponseBodyModule = exports.GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList = exports.GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile = exports.GetAppInstanceForPartnerResponseBodyModuleProfile = exports.GetAppInstanceForPartnerResponseBodyModulePartnerDetail = exports.GetAppInstanceForPartnerResponseBodyModulePartnerDetailBindData = exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceList = exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile = exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress = exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions = exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions = exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList = exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup = exports.GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress = exports.GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions = exports.GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions = exports.GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec = exports.GetAppInstanceForPartnerResponseBodyModuleAiStaffList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAppInstanceForPartnerResponseBodyModuleAiStaffList extends $dara.Model {
    static names() {
        return {
            staffId: 'StaffId',
            staffName: 'StaffName',
            staffType: 'StaffType',
            status: 'Status',
        };
    }
    static types() {
        return {
            staffId: 'string',
            staffName: 'string',
            staffType: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAiStaffList = GetAppInstanceForPartnerResponseBodyModuleAiStaffList;
class GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec extends $dara.Model {
    static names() {
        return {
            bilingual: 'Bilingual',
            bizId: 'BizId',
            businessScope: 'BusinessScope',
            colorStyle: 'ColorStyle',
            companyName: 'CompanyName',
            deployArea: 'DeployArea',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            id: 'Id',
            mainBusiness: 'MainBusiness',
            referenceWebsite: 'ReferenceWebsite',
            siteGoals: 'SiteGoals',
            siteLanguage: 'SiteLanguage',
            siteLogo: 'SiteLogo',
            siteSlogan: 'SiteSlogan',
            siteStyle: 'SiteStyle',
            siteTitle: 'SiteTitle',
            siteType: 'SiteType',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            bilingual: 'boolean',
            bizId: 'string',
            businessScope: 'string',
            colorStyle: 'string',
            companyName: 'string',
            deployArea: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            id: 'number',
            mainBusiness: 'string',
            referenceWebsite: 'string',
            siteGoals: 'string',
            siteLanguage: 'string',
            siteLogo: 'string',
            siteSlogan: 'string',
            siteStyle: 'string',
            siteTitle: 'string',
            siteType: 'string',
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
exports.GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec = GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec;
class GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions extends $dara.Model {
    static names() {
        return {
            actionKey: 'ActionKey',
            actionText: 'ActionText',
            enable: 'Enable',
            href: 'Href',
        };
    }
    static types() {
        return {
            actionKey: 'string',
            actionText: 'string',
            enable: 'boolean',
            href: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions = GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions;
class GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions extends $dara.Model {
    static names() {
        return {
            actionKey: 'ActionKey',
            actionText: 'ActionText',
            enable: 'Enable',
            href: 'Href',
        };
    }
    static types() {
        return {
            actionKey: 'string',
            actionText: 'string',
            enable: 'boolean',
            href: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions = GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions;
class GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress extends $dara.Model {
    static names() {
        return {
            actions: 'Actions',
            aiCustomerConfigUrl: 'AiCustomerConfigUrl',
            aiDesignUrl: 'AiDesignUrl',
            appPublishUrl: 'AppPublishUrl',
            dashboardActions: 'DashboardActions',
            designUrl: 'DesignUrl',
            instanceLoginUrl: 'InstanceLoginUrl',
            renewBuyUrl: 'RenewBuyUrl',
            serverDeliveryUrl: 'ServerDeliveryUrl',
            upgradeBuyUrl: 'UpgradeBuyUrl',
        };
    }
    static types() {
        return {
            actions: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions },
            aiCustomerConfigUrl: 'string',
            aiDesignUrl: 'string',
            appPublishUrl: 'string',
            dashboardActions: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions },
            designUrl: 'string',
            instanceLoginUrl: 'string',
            renewBuyUrl: 'string',
            serverDeliveryUrl: 'string',
            upgradeBuyUrl: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.actions)) {
            $dara.Model.validateArray(this.actions);
        }
        if (Array.isArray(this.dashboardActions)) {
            $dara.Model.validateArray(this.dashboardActions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress = GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress;
class GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup extends $dara.Model {
    static names() {
        return {
            id: 'Id',
            name: 'Name',
            qrCode: 'QrCode',
            type: 'Type',
            url: 'Url',
        };
    }
    static types() {
        return {
            id: 'string',
            name: 'string',
            qrCode: 'string',
            type: 'string',
            url: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup = GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup;
class GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList extends $dara.Model {
    static names() {
        return {
            children: 'Children',
            finalStepNo: 'FinalStepNo',
            finishTime: 'FinishTime',
            isContainerNode: 'IsContainerNode',
            nodeId: 'NodeId',
            nodeName: 'NodeName',
            nodeStatus: 'NodeStatus',
            operatorRole: 'OperatorRole',
            parentNodeId: 'ParentNodeId',
            stepNo: 'StepNo',
        };
    }
    static types() {
        return {
            children: { 'type': 'array', 'itemType': 'any' },
            finalStepNo: 'number',
            finishTime: 'number',
            isContainerNode: 'boolean',
            nodeId: 'string',
            nodeName: 'string',
            nodeStatus: 'string',
            operatorRole: 'string',
            parentNodeId: 'string',
            stepNo: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.children)) {
            $dara.Model.validateArray(this.children);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList = GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList;
class GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions extends $dara.Model {
    static names() {
        return {
            actionKey: 'ActionKey',
            actionText: 'ActionText',
            enable: 'Enable',
            href: 'Href',
        };
    }
    static types() {
        return {
            actionKey: 'string',
            actionText: 'string',
            enable: 'boolean',
            href: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions = GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions;
class GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions extends $dara.Model {
    static names() {
        return {
            actionKey: 'ActionKey',
            actionText: 'ActionText',
            enable: 'Enable',
            href: 'Href',
        };
    }
    static types() {
        return {
            actionKey: 'string',
            actionText: 'string',
            enable: 'boolean',
            href: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions = GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions;
class GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress extends $dara.Model {
    static names() {
        return {
            actions: 'Actions',
            aiCustomerConfigUrl: 'AiCustomerConfigUrl',
            aiDesignUrl: 'AiDesignUrl',
            appPublishUrl: 'AppPublishUrl',
            dashboardActions: 'DashboardActions',
            designUrl: 'DesignUrl',
            instanceLoginUrl: 'InstanceLoginUrl',
            renewBuyUrl: 'RenewBuyUrl',
            serverDeliveryUrl: 'ServerDeliveryUrl',
            upgradeBuyUrl: 'UpgradeBuyUrl',
        };
    }
    static types() {
        return {
            actions: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions },
            aiCustomerConfigUrl: 'string',
            aiDesignUrl: 'string',
            appPublishUrl: 'string',
            dashboardActions: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions },
            designUrl: 'string',
            instanceLoginUrl: 'string',
            renewBuyUrl: 'string',
            serverDeliveryUrl: 'string',
            upgradeBuyUrl: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.actions)) {
            $dara.Model.validateArray(this.actions);
        }
        if (Array.isArray(this.dashboardActions)) {
            $dara.Model.validateArray(this.dashboardActions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress = GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress;
class GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            designType: 'DesignType',
            designTypeText: 'DesignTypeText',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            id: 'Id',
            lxInstanceId: 'LxInstanceId',
            orderId: 'OrderId',
            serviceSpec: 'ServiceSpec',
            serviceSpecText: 'ServiceSpecText',
            upgradeStatus: 'UpgradeStatus',
        };
    }
    static types() {
        return {
            bizId: 'string',
            designType: 'string',
            designTypeText: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            id: 'string',
            lxInstanceId: 'string',
            orderId: 'string',
            serviceSpec: 'string',
            serviceSpecText: 'string',
            upgradeStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile = GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile;
class GetAppInstanceForPartnerResponseBodyModuleAppServiceList extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            deleted: 'Deleted',
            endTime: 'EndTime',
            espBizId: 'EspBizId',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            group: 'Group',
            instanceBizId: 'InstanceBizId',
            name: 'Name',
            nodeList: 'NodeList',
            operationAddress: 'OperationAddress',
            orderId: 'OrderId',
            profile: 'Profile',
            serviceType: 'ServiceType',
            serviceTypeText: 'ServiceTypeText',
            slug: 'Slug',
            startTime: 'StartTime',
            status: 'Status',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            bizId: 'string',
            deleted: 'number',
            endTime: 'string',
            espBizId: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            group: GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup,
            instanceBizId: 'string',
            name: 'string',
            nodeList: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList },
            operationAddress: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress,
            orderId: 'string',
            profile: GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile,
            serviceType: 'string',
            serviceTypeText: 'string',
            slug: 'string',
            startTime: 'string',
            status: 'string',
            userId: 'string',
        };
    }
    validate() {
        if (this.group && typeof this.group.validate === 'function') {
            this.group.validate();
        }
        if (Array.isArray(this.nodeList)) {
            $dara.Model.validateArray(this.nodeList);
        }
        if (this.operationAddress && typeof this.operationAddress.validate === 'function') {
            this.operationAddress.validate();
        }
        if (this.profile && typeof this.profile.validate === 'function') {
            this.profile.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleAppServiceList = GetAppInstanceForPartnerResponseBodyModuleAppServiceList;
class GetAppInstanceForPartnerResponseBodyModulePartnerDetailBindData extends $dara.Model {
    static names() {
        return {
            aliyunPk: 'AliyunPk',
            bizId: 'BizId',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            grantAliyunPk: 'GrantAliyunPk',
            mobile: 'Mobile',
            parentPk: 'ParentPk',
            partnerId: 'PartnerId',
            userDisplayName: 'UserDisplayName',
        };
    }
    static types() {
        return {
            aliyunPk: 'string',
            bizId: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            grantAliyunPk: 'string',
            mobile: 'string',
            parentPk: 'string',
            partnerId: 'string',
            userDisplayName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModulePartnerDetailBindData = GetAppInstanceForPartnerResponseBodyModulePartnerDetailBindData;
class GetAppInstanceForPartnerResponseBodyModulePartnerDetail extends $dara.Model {
    static names() {
        return {
            bindData: 'BindData',
            partnerId: 'PartnerId',
            status: 'Status',
        };
    }
    static types() {
        return {
            bindData: GetAppInstanceForPartnerResponseBodyModulePartnerDetailBindData,
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
exports.GetAppInstanceForPartnerResponseBodyModulePartnerDetail = GetAppInstanceForPartnerResponseBodyModulePartnerDetail;
class GetAppInstanceForPartnerResponseBodyModuleProfile extends $dara.Model {
    static names() {
        return {
            adminUrl: 'AdminUrl',
            applicationType: 'ApplicationType',
            applicationTypeText: 'ApplicationTypeText',
            bindCname: 'BindCname',
            bizId: 'BizId',
            commodityCode: 'CommodityCode',
            customerService: 'CustomerService',
            deployArea: 'DeployArea',
            domainList: 'DomainList',
            editorUrl: 'EditorUrl',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            icpbaNo: 'IcpbaNo',
            imageList: 'ImageList',
            lxInstanceId: 'LxInstanceId',
            ordTime: 'OrdTime',
            orderId: 'OrderId',
            orderNum: 'OrderNum',
            partnerId: 'PartnerId',
            payTime: 'PayTime',
            previewUrl: 'PreviewUrl',
            seoSite: 'SeoSite',
            siteLogo: 'SiteLogo',
            siteVersion: 'SiteVersion',
            siteVersionText: 'SiteVersionText',
            source: 'Source',
            templateEtag: 'TemplateEtag',
            templateId: 'TemplateId',
            textList: 'TextList',
            thumbnail: 'Thumbnail',
            upgradeStatus: 'UpgradeStatus',
        };
    }
    static types() {
        return {
            adminUrl: 'string',
            applicationType: 'string',
            applicationTypeText: 'string',
            bindCname: 'string',
            bizId: 'string',
            commodityCode: 'string',
            customerService: 'string',
            deployArea: 'string',
            domainList: 'string',
            editorUrl: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            icpbaNo: 'string',
            imageList: 'string',
            lxInstanceId: 'string',
            ordTime: 'string',
            orderId: 'string',
            orderNum: 'number',
            partnerId: 'string',
            payTime: 'string',
            previewUrl: 'string',
            seoSite: 'string',
            siteLogo: 'string',
            siteVersion: 'string',
            siteVersionText: 'string',
            source: 'string',
            templateEtag: 'string',
            templateId: 'string',
            textList: 'string',
            thumbnail: 'string',
            upgradeStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleProfile = GetAppInstanceForPartnerResponseBodyModuleProfile;
class GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile extends $dara.Model {
    static names() {
        return {
            adminUrl: 'AdminUrl',
            applicationType: 'ApplicationType',
            applicationTypeText: 'ApplicationTypeText',
            bindCname: 'BindCname',
            bizId: 'BizId',
            commodityCode: 'CommodityCode',
            customerService: 'CustomerService',
            deployArea: 'DeployArea',
            domainList: 'DomainList',
            editorUrl: 'EditorUrl',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            icpbaNo: 'IcpbaNo',
            imageList: 'ImageList',
            lxInstanceId: 'LxInstanceId',
            ordTime: 'OrdTime',
            orderId: 'OrderId',
            orderNum: 'OrderNum',
            partnerId: 'PartnerId',
            payTime: 'PayTime',
            previewUrl: 'PreviewUrl',
            seoSite: 'SeoSite',
            siteLogo: 'SiteLogo',
            siteVersion: 'SiteVersion',
            siteVersionText: 'SiteVersionText',
            source: 'Source',
            templateEtag: 'TemplateEtag',
            templateId: 'TemplateId',
            textList: 'TextList',
            thumbnail: 'Thumbnail',
            upgradeStatus: 'UpgradeStatus',
        };
    }
    static types() {
        return {
            adminUrl: 'string',
            applicationType: 'string',
            applicationTypeText: 'string',
            bindCname: 'string',
            bizId: 'string',
            commodityCode: 'string',
            customerService: 'string',
            deployArea: 'string',
            domainList: 'string',
            editorUrl: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            icpbaNo: 'string',
            imageList: 'string',
            lxInstanceId: 'string',
            ordTime: 'string',
            orderId: 'string',
            orderNum: 'number',
            partnerId: 'string',
            payTime: 'string',
            previewUrl: 'string',
            seoSite: 'string',
            siteLogo: 'string',
            siteVersion: 'string',
            siteVersionText: 'string',
            source: 'string',
            templateEtag: 'string',
            templateId: 'string',
            textList: 'string',
            thumbnail: 'string',
            upgradeStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile = GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile;
class GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList extends $dara.Model {
    static names() {
        return {
            appSubType: 'AppSubType',
            appType: 'AppType',
            bizId: 'BizId',
            buildType: 'BuildType',
            deleted: 'Deleted',
            description: 'Description',
            designSpecBizId: 'DesignSpecBizId',
            designSpecId: 'DesignSpecId',
            domain: 'Domain',
            endTime: 'EndTime',
            env: 'Env',
            espBizId: 'EspBizId',
            gmtCreate: 'GmtCreate',
            gmtDelete: 'GmtDelete',
            gmtModified: 'GmtModified',
            gmtPublish: 'GmtPublish',
            iconUrl: 'IconUrl',
            name: 'Name',
            orderId: 'OrderId',
            profile: 'Profile',
            siteHost: 'SiteHost',
            slug: 'Slug',
            sourceType: 'SourceType',
            startTime: 'StartTime',
            status: 'Status',
            statusText: 'StatusText',
            thumbnailUrl: 'ThumbnailUrl',
            userId: 'UserId',
            version: 'Version',
        };
    }
    static types() {
        return {
            appSubType: 'string',
            appType: 'string',
            bizId: 'string',
            buildType: 'string',
            deleted: 'number',
            description: 'string',
            designSpecBizId: 'string',
            designSpecId: 'string',
            domain: 'string',
            endTime: 'string',
            env: 'string',
            espBizId: 'string',
            gmtCreate: 'string',
            gmtDelete: 'string',
            gmtModified: 'string',
            gmtPublish: 'string',
            iconUrl: 'string',
            name: 'string',
            orderId: 'string',
            profile: GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile,
            siteHost: 'string',
            slug: 'string',
            sourceType: 'string',
            startTime: 'string',
            status: 'string',
            statusText: 'string',
            thumbnailUrl: 'string',
            userId: 'string',
            version: 'string',
        };
    }
    validate() {
        if (this.profile && typeof this.profile.validate === 'function') {
            this.profile.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList = GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList;
class GetAppInstanceForPartnerResponseBodyModule extends $dara.Model {
    static names() {
        return {
            aiStaffList: 'AiStaffList',
            appDesignSpec: 'AppDesignSpec',
            appOperationAddress: 'AppOperationAddress',
            appServiceList: 'AppServiceList',
            appSubType: 'AppSubType',
            appType: 'AppType',
            bizId: 'BizId',
            buildType: 'BuildType',
            deleted: 'Deleted',
            description: 'Description',
            designSpecBizId: 'DesignSpecBizId',
            designSpecId: 'DesignSpecId',
            domain: 'Domain',
            endTime: 'EndTime',
            env: 'Env',
            espBizId: 'EspBizId',
            gmtCreate: 'GmtCreate',
            gmtDelete: 'GmtDelete',
            gmtModified: 'GmtModified',
            gmtPublish: 'GmtPublish',
            iconUrl: 'IconUrl',
            name: 'Name',
            orderId: 'OrderId',
            partnerDetail: 'PartnerDetail',
            profile: 'Profile',
            relatedInstanceList: 'RelatedInstanceList',
            siteHost: 'SiteHost',
            slug: 'Slug',
            sourceType: 'SourceType',
            startTime: 'StartTime',
            status: 'Status',
            statusText: 'StatusText',
            thumbnailUrl: 'ThumbnailUrl',
            userId: 'UserId',
            version: 'Version',
        };
    }
    static types() {
        return {
            aiStaffList: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAiStaffList },
            appDesignSpec: GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec,
            appOperationAddress: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress,
            appServiceList: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppServiceList },
            appSubType: 'string',
            appType: 'string',
            bizId: 'string',
            buildType: 'string',
            deleted: 'number',
            description: 'string',
            designSpecBizId: 'string',
            designSpecId: 'string',
            domain: 'string',
            endTime: 'string',
            env: 'string',
            espBizId: 'string',
            gmtCreate: 'string',
            gmtDelete: 'string',
            gmtModified: 'string',
            gmtPublish: 'string',
            iconUrl: 'string',
            name: 'string',
            orderId: 'string',
            partnerDetail: GetAppInstanceForPartnerResponseBodyModulePartnerDetail,
            profile: GetAppInstanceForPartnerResponseBodyModuleProfile,
            relatedInstanceList: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList },
            siteHost: 'string',
            slug: 'string',
            sourceType: 'string',
            startTime: 'string',
            status: 'string',
            statusText: 'string',
            thumbnailUrl: 'string',
            userId: 'string',
            version: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.aiStaffList)) {
            $dara.Model.validateArray(this.aiStaffList);
        }
        if (this.appDesignSpec && typeof this.appDesignSpec.validate === 'function') {
            this.appDesignSpec.validate();
        }
        if (this.appOperationAddress && typeof this.appOperationAddress.validate === 'function') {
            this.appOperationAddress.validate();
        }
        if (Array.isArray(this.appServiceList)) {
            $dara.Model.validateArray(this.appServiceList);
        }
        if (this.partnerDetail && typeof this.partnerDetail.validate === 'function') {
            this.partnerDetail.validate();
        }
        if (this.profile && typeof this.profile.validate === 'function') {
            this.profile.validate();
        }
        if (Array.isArray(this.relatedInstanceList)) {
            $dara.Model.validateArray(this.relatedInstanceList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAppInstanceForPartnerResponseBodyModule = GetAppInstanceForPartnerResponseBodyModule;
class GetAppInstanceForPartnerResponseBody extends $dara.Model {
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
            module: GetAppInstanceForPartnerResponseBodyModule,
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
exports.GetAppInstanceForPartnerResponseBody = GetAppInstanceForPartnerResponseBody;
//# sourceMappingURL=GetAppInstanceForPartnerResponseBody.js.map