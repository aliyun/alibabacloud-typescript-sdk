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
exports.DescribeSandboxTemplatesResponseBody = exports.DescribeSandboxTemplatesResponseBodySandboxTemplates = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSandboxTemplatesResponseBodySandboxTemplates extends $dara.Model {
    static names() {
        return {
            createdBy: 'CreatedBy',
            defaultCpu: 'DefaultCpu',
            defaultMemory: 'DefaultMemory',
            description: 'Description',
            enableVpcAccess: 'EnableVpcAccess',
            image: 'Image',
            name: 'Name',
            replicas: 'Replicas',
            tags: 'Tags',
            templateId: 'TemplateId',
        };
    }
    static types() {
        return {
            createdBy: 'string',
            defaultCpu: 'string',
            defaultMemory: 'string',
            description: 'string',
            enableVpcAccess: 'string',
            image: 'string',
            name: 'string',
            replicas: 'number',
            tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            templateId: 'string',
        };
    }
    validate() {
        if (this.tags) {
            $dara.Model.validateMap(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSandboxTemplatesResponseBodySandboxTemplates = DescribeSandboxTemplatesResponseBodySandboxTemplates;
class DescribeSandboxTemplatesResponseBody extends $dara.Model {
    static names() {
        return {
            maxResults: 'MaxResults',
            nextToken: 'NextToken',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            sandboxTemplates: 'SandboxTemplates',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            maxResults: 'number',
            nextToken: 'string',
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            sandboxTemplates: { 'type': 'array', 'itemType': DescribeSandboxTemplatesResponseBodySandboxTemplates },
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.sandboxTemplates)) {
            $dara.Model.validateArray(this.sandboxTemplates);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSandboxTemplatesResponseBody = DescribeSandboxTemplatesResponseBody;
//# sourceMappingURL=DescribeSandboxTemplatesResponseBody.js.map