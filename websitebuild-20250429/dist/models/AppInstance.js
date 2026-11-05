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
exports.AppInstance = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const AppInstanceProfile_1 = require("./AppInstanceProfile");
class AppInstance extends $dara.Model {
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
            espBizId: 'EspBizId',
            gmtCreate: 'GmtCreate',
            gmtDelete: 'GmtDelete',
            gmtModified: 'GmtModified',
            gmtPublish: 'GmtPublish',
            iconUrl: 'IconUrl',
            name: 'Name',
            profile: 'Profile',
            siteHost: 'SiteHost',
            slug: 'Slug',
            sourceType: 'SourceType',
            startTime: 'StartTime',
            status: 'Status',
            statusText: 'StatusText',
            thumbnailUrl: 'ThumbnailUrl',
            userId: 'UserId',
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
            espBizId: 'string',
            gmtCreate: 'string',
            gmtDelete: 'string',
            gmtModified: 'string',
            gmtPublish: 'string',
            iconUrl: 'string',
            name: 'string',
            profile: AppInstanceProfile_1.AppInstanceProfile,
            siteHost: 'string',
            slug: 'string',
            sourceType: 'string',
            startTime: 'string',
            status: 'string',
            statusText: 'string',
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
exports.AppInstance = AppInstance;
//# sourceMappingURL=AppInstance.js.map