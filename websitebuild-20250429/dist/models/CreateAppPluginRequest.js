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
exports.CreateAppPluginRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateAppPluginRequest extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            description: 'Description',
            downloadUrl: 'DownloadUrl',
            extend: 'Extend',
            icon: 'Icon',
            ossKey: 'OssKey',
            pluginId: 'PluginId',
            pluginName: 'PluginName',
            pluginVersion: 'PluginVersion',
            tags: 'Tags',
            visibility: 'Visibility',
        };
    }
    static types() {
        return {
            category: 'string',
            description: 'string',
            downloadUrl: 'string',
            extend: 'string',
            icon: 'string',
            ossKey: 'string',
            pluginId: 'string',
            pluginName: 'string',
            pluginVersion: 'string',
            tags: 'string',
            visibility: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateAppPluginRequest = CreateAppPluginRequest;
//# sourceMappingURL=CreateAppPluginRequest.js.map