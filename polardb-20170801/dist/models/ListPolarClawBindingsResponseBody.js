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
exports.ListPolarClawBindingsResponseBody = exports.ListPolarClawBindingsResponseBodyBindings = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListPolarClawBindingsResponseBodyBindings extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            channel: 'Channel',
            channelAccountId: 'ChannelAccountId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            channel: 'string',
            channelAccountId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListPolarClawBindingsResponseBodyBindings = ListPolarClawBindingsResponseBodyBindings;
class ListPolarClawBindingsResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            bindings: 'Bindings',
            code: 'Code',
            message: 'Message',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            bindings: { 'type': 'array', 'itemType': ListPolarClawBindingsResponseBodyBindings },
            code: 'number',
            message: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.bindings)) {
            $dara.Model.validateArray(this.bindings);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListPolarClawBindingsResponseBody = ListPolarClawBindingsResponseBody;
//# sourceMappingURL=ListPolarClawBindingsResponseBody.js.map