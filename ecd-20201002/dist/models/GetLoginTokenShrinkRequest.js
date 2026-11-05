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
exports.GetLoginTokenShrinkRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetLoginTokenShrinkRequest extends $dara.Model {
    static names() {
        return {
            authenticationCode: 'AuthenticationCode',
            availableFeaturesShrink: 'AvailableFeatures',
            clientId: 'ClientId',
            clientName: 'ClientName',
            clientOS: 'ClientOS',
            clientType: 'ClientType',
            clientVersion: 'ClientVersion',
            currentStage: 'CurrentStage',
            directoryId: 'DirectoryId',
            endUserId: 'EndUserId',
            keepAlive: 'KeepAlive',
            keepAliveToken: 'KeepAliveToken',
            newPassword: 'NewPassword',
            officeSiteId: 'OfficeSiteId',
            oldPassword: 'OldPassword',
            password: 'Password',
            regionId: 'RegionId',
            sessionId: 'SessionId',
            tokenCode: 'TokenCode',
            uuid: 'Uuid',
        };
    }
    static types() {
        return {
            authenticationCode: 'string',
            availableFeaturesShrink: 'string',
            clientId: 'string',
            clientName: 'string',
            clientOS: 'string',
            clientType: 'string',
            clientVersion: 'string',
            currentStage: 'string',
            directoryId: 'string',
            endUserId: 'string',
            keepAlive: 'boolean',
            keepAliveToken: 'string',
            newPassword: 'string',
            officeSiteId: 'string',
            oldPassword: 'string',
            password: 'string',
            regionId: 'string',
            sessionId: 'string',
            tokenCode: 'string',
            uuid: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetLoginTokenShrinkRequest = GetLoginTokenShrinkRequest;
//# sourceMappingURL=GetLoginTokenShrinkRequest.js.map