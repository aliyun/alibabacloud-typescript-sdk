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
exports.RestartPolarClawGatewayResponseBody = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RestartPolarClawGatewayResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            downtimeMs: 'DowntimeMs',
            gatewayVersion: 'GatewayVersion',
            message: 'Message',
            mode: 'Mode',
            ok: 'Ok',
            operation: 'Operation',
            requestId: 'RequestId',
            restarted: 'Restarted',
            state: 'State',
            taskId: 'TaskId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            downtimeMs: 'number',
            gatewayVersion: 'string',
            message: 'string',
            mode: 'string',
            ok: 'boolean',
            operation: 'string',
            requestId: 'string',
            restarted: 'boolean',
            state: 'string',
            taskId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RestartPolarClawGatewayResponseBody = RestartPolarClawGatewayResponseBody;
//# sourceMappingURL=RestartPolarClawGatewayResponseBody.js.map