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
exports.DescribeWhitelistTemplateResponseBody = exports.DescribeWhitelistTemplateResponseBodyData = exports.DescribeWhitelistTemplateResponseBodyDataTemplate = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeWhitelistTemplateResponseBodyDataTemplate extends $dara.Model {
    static names() {
        return {
            id: 'Id',
            ips: 'Ips',
            templateId: 'TemplateId',
            templateName: 'TemplateName',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            id: 'number',
            ips: 'string',
            templateId: 'number',
            templateName: 'string',
            userId: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeWhitelistTemplateResponseBodyDataTemplate = DescribeWhitelistTemplateResponseBodyDataTemplate;
class DescribeWhitelistTemplateResponseBodyData extends $dara.Model {
    static names() {
        return {
            template: 'Template',
        };
    }
    static types() {
        return {
            template: DescribeWhitelistTemplateResponseBodyDataTemplate,
        };
    }
    validate() {
        if (this.template && typeof this.template.validate === 'function') {
            this.template.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeWhitelistTemplateResponseBodyData = DescribeWhitelistTemplateResponseBodyData;
class DescribeWhitelistTemplateResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            data: 'Data',
            httpStatusCode: 'HttpStatusCode',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: DescribeWhitelistTemplateResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeWhitelistTemplateResponseBody = DescribeWhitelistTemplateResponseBody;
//# sourceMappingURL=DescribeWhitelistTemplateResponseBody.js.map