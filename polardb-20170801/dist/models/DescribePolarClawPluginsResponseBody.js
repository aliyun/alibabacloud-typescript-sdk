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
exports.DescribePolarClawPluginsResponseBody = exports.DescribePolarClawPluginsResponseBodyPlugins = exports.DescribePolarClawPluginsResponseBodyDiagnostics = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawPluginsResponseBodyDiagnostics extends $dara.Model {
    static names() {
        return {
            level: 'Level',
            message: 'Message',
            pluginId: 'PluginId',
            source: 'Source',
        };
    }
    static types() {
        return {
            level: 'string',
            message: 'string',
            pluginId: 'string',
            source: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawPluginsResponseBodyDiagnostics = DescribePolarClawPluginsResponseBodyDiagnostics;
class DescribePolarClawPluginsResponseBodyPlugins extends $dara.Model {
    static names() {
        return {
            channelIds: 'ChannelIds',
            description: 'Description',
            error: 'Error',
            format: 'Format',
            id: 'Id',
            name: 'Name',
            origin: 'Origin',
            providerIds: 'ProviderIds',
            source: 'Source',
            status: 'Status',
            version: 'Version',
        };
    }
    static types() {
        return {
            channelIds: { 'type': 'array', 'itemType': 'string' },
            description: 'string',
            error: 'string',
            format: 'string',
            id: 'string',
            name: 'string',
            origin: 'string',
            providerIds: { 'type': 'array', 'itemType': 'string' },
            source: 'string',
            status: 'string',
            version: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.channelIds)) {
            $dara.Model.validateArray(this.channelIds);
        }
        if (Array.isArray(this.providerIds)) {
            $dara.Model.validateArray(this.providerIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawPluginsResponseBodyPlugins = DescribePolarClawPluginsResponseBodyPlugins;
class DescribePolarClawPluginsResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            diagnostics: 'Diagnostics',
            message: 'Message',
            plugins: 'Plugins',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            diagnostics: { 'type': 'array', 'itemType': DescribePolarClawPluginsResponseBodyDiagnostics },
            message: 'string',
            plugins: { 'type': 'array', 'itemType': DescribePolarClawPluginsResponseBodyPlugins },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.diagnostics)) {
            $dara.Model.validateArray(this.diagnostics);
        }
        if (Array.isArray(this.plugins)) {
            $dara.Model.validateArray(this.plugins);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawPluginsResponseBody = DescribePolarClawPluginsResponseBody;
//# sourceMappingURL=DescribePolarClawPluginsResponseBody.js.map