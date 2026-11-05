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
exports.SyncAppInstanceForPartnerRequest = exports.SyncAppInstanceForPartnerRequestAppInstance = exports.SyncAppInstanceForPartnerRequestAppInstanceProfile = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class SyncAppInstanceForPartnerRequestAppInstanceProfile extends $dara.Model {
    static names() {
        return {
            deployArea: 'DeployArea',
            lxInstanceId: 'LxInstanceId',
            orderId: 'OrderId',
            siteVersion: 'SiteVersion',
            templateEtag: 'TemplateEtag',
            templateId: 'TemplateId',
        };
    }
    static types() {
        return {
            deployArea: 'string',
            lxInstanceId: 'string',
            orderId: 'string',
            siteVersion: 'string',
            templateEtag: 'string',
            templateId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SyncAppInstanceForPartnerRequestAppInstanceProfile = SyncAppInstanceForPartnerRequestAppInstanceProfile;
class SyncAppInstanceForPartnerRequestAppInstance extends $dara.Model {
    static names() {
        return {
            appType: 'AppType',
            bizId: 'BizId',
            deleted: 'Deleted',
            domain: 'Domain',
            endTime: 'EndTime',
            gmtDelete: 'GmtDelete',
            gmtPublish: 'GmtPublish',
            iconUrl: 'IconUrl',
            name: 'Name',
            profile: 'Profile',
            siteHost: 'SiteHost',
            slug: 'Slug',
            startTime: 'StartTime',
            status: 'Status',
            thumbnailUrl: 'ThumbnailUrl',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            appType: 'string',
            bizId: 'string',
            deleted: 'string',
            domain: 'string',
            endTime: 'string',
            gmtDelete: 'string',
            gmtPublish: 'string',
            iconUrl: 'string',
            name: 'string',
            profile: SyncAppInstanceForPartnerRequestAppInstanceProfile,
            siteHost: 'string',
            slug: 'string',
            startTime: 'string',
            status: 'string',
            thumbnailUrl: 'string',
            userId: 'string',
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
exports.SyncAppInstanceForPartnerRequestAppInstance = SyncAppInstanceForPartnerRequestAppInstance;
class SyncAppInstanceForPartnerRequest extends $dara.Model {
    static names() {
        return {
            appInstance: 'AppInstance',
            eventType: 'EventType',
            operator: 'Operator',
            sourceBizId: 'SourceBizId',
            sourceType: 'SourceType',
        };
    }
    static types() {
        return {
            appInstance: SyncAppInstanceForPartnerRequestAppInstance,
            eventType: 'string',
            operator: 'string',
            sourceBizId: 'string',
            sourceType: 'string',
        };
    }
    validate() {
        if (this.appInstance && typeof this.appInstance.validate === 'function') {
            this.appInstance.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SyncAppInstanceForPartnerRequest = SyncAppInstanceForPartnerRequest;
//# sourceMappingURL=SyncAppInstanceForPartnerRequest.js.map