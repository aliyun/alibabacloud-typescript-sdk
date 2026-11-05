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
exports.AppInstanceProfile = exports.AppInstanceProfileIndependentDeployment = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class AppInstanceProfileIndependentDeployment extends $dara.Model {
    static names() {
        return {
            canRetry: 'CanRetry',
            deployArea: 'DeployArea',
            dnsRecordType: 'DnsRecordType',
            eligibility: 'Eligibility',
            enableStatus: 'EnableStatus',
            independentIp: 'IndependentIp',
            serverSpec: 'ServerSpec',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            canRetry: 'boolean',
            deployArea: 'string',
            dnsRecordType: 'string',
            eligibility: 'string',
            enableStatus: 'string',
            independentIp: 'string',
            serverSpec: 'string',
            taskId: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AppInstanceProfileIndependentDeployment = AppInstanceProfileIndependentDeployment;
class AppInstanceProfile extends $dara.Model {
    static names() {
        return {
            applicationType: 'ApplicationType',
            applicationTypeText: 'ApplicationTypeText',
            bizId: 'BizId',
            caseAuditStatus: 'CaseAuditStatus',
            caseShelfStatus: 'CaseShelfStatus',
            chatbiTaskId: 'ChatbiTaskId',
            chatbiTaskStatus: 'ChatbiTaskStatus',
            commodityCode: 'CommodityCode',
            customerService: 'CustomerService',
            deployArea: 'DeployArea',
            icpbaNo: 'IcpbaNo',
            independentDeployment: 'IndependentDeployment',
            instanceId: 'InstanceId',
            openChatBi: 'OpenChatBi',
            ordTime: 'OrdTime',
            orderId: 'OrderId',
            payTime: 'PayTime',
            previewUrl: 'PreviewUrl',
            seoSite: 'SeoSite',
            shareRenderWatermark: 'ShareRenderWatermark',
            siteVersion: 'SiteVersion',
            siteVersionText: 'SiteVersionText',
            source: 'Source',
            templateEtag: 'TemplateEtag',
            templateId: 'TemplateId',
            upgradeStatus: 'UpgradeStatus',
        };
    }
    static types() {
        return {
            applicationType: 'string',
            applicationTypeText: 'string',
            bizId: 'string',
            caseAuditStatus: 'string',
            caseShelfStatus: 'string',
            chatbiTaskId: 'string',
            chatbiTaskStatus: 'string',
            commodityCode: 'string',
            customerService: 'string',
            deployArea: 'string',
            icpbaNo: 'string',
            independentDeployment: AppInstanceProfileIndependentDeployment,
            instanceId: 'string',
            openChatBi: 'boolean',
            ordTime: 'string',
            orderId: 'string',
            payTime: 'string',
            previewUrl: 'string',
            seoSite: 'string',
            shareRenderWatermark: 'string',
            siteVersion: 'string',
            siteVersionText: 'string',
            source: 'string',
            templateEtag: 'string',
            templateId: 'string',
            upgradeStatus: 'string',
        };
    }
    validate() {
        if (this.independentDeployment && typeof this.independentDeployment.validate === 'function') {
            this.independentDeployment.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AppInstanceProfile = AppInstanceProfile;
//# sourceMappingURL=AppInstanceProfile.js.map