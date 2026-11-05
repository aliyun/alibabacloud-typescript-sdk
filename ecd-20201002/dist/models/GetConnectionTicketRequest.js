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
exports.GetConnectionTicketRequest = exports.GetConnectionTicketRequestTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetConnectionTicketRequestTag extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetConnectionTicketRequestTag = GetConnectionTicketRequestTag;
class GetConnectionTicketRequest extends $dara.Model {
    static names() {
        return {
            accessType: 'AccessType',
            clientId: 'ClientId',
            clientOS: 'ClientOS',
            clientType: 'ClientType',
            clientVersion: 'ClientVersion',
            commandContent: 'CommandContent',
            desktopId: 'DesktopId',
            loginToken: 'LoginToken',
            ownerId: 'OwnerId',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            sessionId: 'SessionId',
            tag: 'Tag',
            taskId: 'TaskId',
            ticketBlackList: 'TicketBlackList',
            uuid: 'Uuid',
        };
    }
    static types() {
        return {
            accessType: 'string',
            clientId: 'string',
            clientOS: 'string',
            clientType: 'string',
            clientVersion: 'string',
            commandContent: 'string',
            desktopId: 'string',
            loginToken: 'string',
            ownerId: 'number',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            sessionId: 'string',
            tag: { 'type': 'array', 'itemType': GetConnectionTicketRequestTag },
            taskId: 'string',
            ticketBlackList: { 'type': 'array', 'itemType': 'string' },
            uuid: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        if (Array.isArray(this.ticketBlackList)) {
            $dara.Model.validateArray(this.ticketBlackList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetConnectionTicketRequest = GetConnectionTicketRequest;
//# sourceMappingURL=GetConnectionTicketRequest.js.map