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
exports.DialogBaseBody = exports.DialogBaseBodyUserInfo = exports.DialogBaseBodyFooterInfo = exports.DialogBaseBodyDataInfo = exports.DialogBaseBodyAttachments = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
/**
 */
class DialogBaseBodyAttachments extends $dara.Model {
    static names() {
        return {
            name: 'Name',
            size: 'Size',
            type: 'Type',
            url: 'Url',
        };
    }
    static types() {
        return {
            name: 'string',
            size: 'string',
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
exports.DialogBaseBodyAttachments = DialogBaseBodyAttachments;
class DialogBaseBodyDataInfo extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            bizType: 'BizType',
            component: 'Component',
            container: 'Container',
            content: 'Content',
            contentDesensitized: 'ContentDesensitized',
            editable: 'Editable',
            props: 'Props',
            schema: 'Schema',
            schemaId: 'SchemaId',
            serviceChannel: 'ServiceChannel',
            title: 'Title',
            values: 'Values',
        };
    }
    static types() {
        return {
            bizId: 'string',
            bizType: 'number',
            component: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
            container: 'any',
            content: 'string',
            contentDesensitized: 'string',
            editable: 'number',
            props: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
            schema: 'string',
            schemaId: 'number',
            serviceChannel: 'string',
            title: 'string',
            values: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
        };
    }
    validate() {
        if (Array.isArray(this.component)) {
            $dara.Model.validateArray(this.component);
        }
        if (Array.isArray(this.props)) {
            $dara.Model.validateArray(this.props);
        }
        if (this.values) {
            $dara.Model.validateMap(this.values);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DialogBaseBodyDataInfo = DialogBaseBodyDataInfo;
class DialogBaseBodyFooterInfo extends $dara.Model {
    static names() {
        return {
            ext: 'Ext',
            schema: 'Schema',
        };
    }
    static types() {
        return {
            ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            schema: 'string',
        };
    }
    validate() {
        if (this.ext) {
            $dara.Model.validateMap(this.ext);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DialogBaseBodyFooterInfo = DialogBaseBodyFooterInfo;
class DialogBaseBodyUserInfo extends $dara.Model {
    static names() {
        return {
            avatar: 'Avatar',
            role: 'Role',
            userId: 'UserId',
            userName: 'UserName',
        };
    }
    static types() {
        return {
            avatar: 'string',
            role: 'number',
            userId: 'string',
            userName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DialogBaseBodyUserInfo = DialogBaseBodyUserInfo;
class DialogBaseBody extends $dara.Model {
    static names() {
        return {
            attachments: 'Attachments',
            channelCode: 'ChannelCode',
            createTime: 'CreateTime',
            dataInfo: 'DataInfo',
            dialogId: 'DialogId',
            footerInfo: 'FooterInfo',
            hitWords: 'HitWords',
            modifiedTime: 'ModifiedTime',
            referInfo: 'ReferInfo',
            stage: 'Stage',
            status: 'Status',
            ticketId: 'TicketId',
            ticketStatus: 'TicketStatus',
            timestamp: 'Timestamp',
            tip: 'Tip',
            type: 'Type',
            userInfo: 'UserInfo',
        };
    }
    static types() {
        return {
            attachments: { 'type': 'array', 'itemType': DialogBaseBodyAttachments },
            channelCode: 'string',
            createTime: 'number',
            dataInfo: DialogBaseBodyDataInfo,
            dialogId: 'number',
            footerInfo: DialogBaseBodyFooterInfo,
            hitWords: { 'type': 'array', 'itemType': 'string' },
            modifiedTime: 'number',
            referInfo: DialogBaseBody,
            stage: 'number',
            status: 'number',
            ticketId: 'string',
            ticketStatus: 'number',
            timestamp: 'number',
            tip: 'string',
            type: 'number',
            userInfo: DialogBaseBodyUserInfo,
        };
    }
    validate() {
        if (Array.isArray(this.attachments)) {
            $dara.Model.validateArray(this.attachments);
        }
        if (this.dataInfo && typeof this.dataInfo.validate === 'function') {
            this.dataInfo.validate();
        }
        if (this.footerInfo && typeof this.footerInfo.validate === 'function') {
            this.footerInfo.validate();
        }
        if (Array.isArray(this.hitWords)) {
            $dara.Model.validateArray(this.hitWords);
        }
        if (this.referInfo && typeof this.referInfo.validate === 'function') {
            this.referInfo.validate();
        }
        if (this.userInfo && typeof this.userInfo.validate === 'function') {
            this.userInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DialogBaseBody = DialogBaseBody;
//# sourceMappingURL=DialogBaseBody.js.map