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
exports.DescribePolarClawAgentFileResponseBody = exports.DescribePolarClawAgentFileResponseBodyFile = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawAgentFileResponseBodyFile extends $dara.Model {
    static names() {
        return {
            content: 'Content',
            missing: 'Missing',
            name: 'Name',
            path: 'Path',
            size: 'Size',
            updatedAtMs: 'UpdatedAtMs',
        };
    }
    static types() {
        return {
            content: 'string',
            missing: 'boolean',
            name: 'string',
            path: 'string',
            size: 'number',
            updatedAtMs: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentFileResponseBodyFile = DescribePolarClawAgentFileResponseBodyFile;
class DescribePolarClawAgentFileResponseBody extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            applicationId: 'ApplicationId',
            code: 'Code',
            file: 'File',
            message: 'Message',
            requestId: 'RequestId',
            workspace: 'Workspace',
        };
    }
    static types() {
        return {
            agentId: 'string',
            applicationId: 'string',
            code: 'number',
            file: DescribePolarClawAgentFileResponseBodyFile,
            message: 'string',
            requestId: 'string',
            workspace: 'string',
        };
    }
    validate() {
        if (this.file && typeof this.file.validate === 'function') {
            this.file.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentFileResponseBody = DescribePolarClawAgentFileResponseBody;
//# sourceMappingURL=DescribePolarClawAgentFileResponseBody.js.map