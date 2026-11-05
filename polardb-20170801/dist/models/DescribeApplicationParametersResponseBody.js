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
exports.DescribeApplicationParametersResponseBody = exports.DescribeApplicationParametersResponseBodyParameters = exports.DescribeApplicationParametersResponseBodyParametersComponentParameters = exports.DescribeApplicationParametersResponseBodyParametersComponentParametersParameters = exports.DescribeApplicationParametersResponseBodyParameterTemplates = exports.DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates = exports.DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters extends $dara.Model {
    static names() {
        return {
            default: 'Default',
            description: 'Description',
            name: 'Name',
            needRestart: 'NeedRestart',
            pattern: 'Pattern',
            readOnly: 'ReadOnly',
            type: 'Type',
        };
    }
    static types() {
        return {
            default: 'string',
            description: 'string',
            name: 'string',
            needRestart: 'boolean',
            pattern: 'string',
            readOnly: 'boolean',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters = DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters;
class DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates extends $dara.Model {
    static names() {
        return {
            componentId: 'ComponentId',
            componentType: 'ComponentType',
            parameters: 'Parameters',
        };
    }
    static types() {
        return {
            componentId: 'string',
            componentType: 'string',
            parameters: { 'type': 'array', 'itemType': DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplatesParameters },
        };
    }
    validate() {
        if (Array.isArray(this.parameters)) {
            $dara.Model.validateArray(this.parameters);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates = DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates;
class DescribeApplicationParametersResponseBodyParameterTemplates extends $dara.Model {
    static names() {
        return {
            componentParameterTemplates: 'ComponentParameterTemplates',
        };
    }
    static types() {
        return {
            componentParameterTemplates: { 'type': 'array', 'itemType': DescribeApplicationParametersResponseBodyParameterTemplatesComponentParameterTemplates },
        };
    }
    validate() {
        if (Array.isArray(this.componentParameterTemplates)) {
            $dara.Model.validateArray(this.componentParameterTemplates);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationParametersResponseBodyParameterTemplates = DescribeApplicationParametersResponseBodyParameterTemplates;
class DescribeApplicationParametersResponseBodyParametersComponentParametersParameters extends $dara.Model {
    static names() {
        return {
            default: 'Default',
            description: 'Description',
            name: 'Name',
            needRestart: 'NeedRestart',
            pattern: 'Pattern',
            readOnly: 'ReadOnly',
            status: 'Status',
            type: 'Type',
            value: 'Value',
        };
    }
    static types() {
        return {
            default: 'string',
            description: 'string',
            name: 'string',
            needRestart: 'boolean',
            pattern: 'string',
            readOnly: 'boolean',
            status: 'string',
            type: 'string',
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
exports.DescribeApplicationParametersResponseBodyParametersComponentParametersParameters = DescribeApplicationParametersResponseBodyParametersComponentParametersParameters;
class DescribeApplicationParametersResponseBodyParametersComponentParameters extends $dara.Model {
    static names() {
        return {
            componentId: 'ComponentId',
            componentType: 'ComponentType',
            parameters: 'Parameters',
        };
    }
    static types() {
        return {
            componentId: 'string',
            componentType: 'string',
            parameters: { 'type': 'array', 'itemType': DescribeApplicationParametersResponseBodyParametersComponentParametersParameters },
        };
    }
    validate() {
        if (Array.isArray(this.parameters)) {
            $dara.Model.validateArray(this.parameters);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationParametersResponseBodyParametersComponentParameters = DescribeApplicationParametersResponseBodyParametersComponentParameters;
class DescribeApplicationParametersResponseBodyParameters extends $dara.Model {
    static names() {
        return {
            componentParameters: 'ComponentParameters',
        };
    }
    static types() {
        return {
            componentParameters: { 'type': 'array', 'itemType': DescribeApplicationParametersResponseBodyParametersComponentParameters },
        };
    }
    validate() {
        if (Array.isArray(this.componentParameters)) {
            $dara.Model.validateArray(this.componentParameters);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationParametersResponseBodyParameters = DescribeApplicationParametersResponseBodyParameters;
class DescribeApplicationParametersResponseBody extends $dara.Model {
    static names() {
        return {
            parameterTemplates: 'ParameterTemplates',
            parameters: 'Parameters',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            parameterTemplates: DescribeApplicationParametersResponseBodyParameterTemplates,
            parameters: DescribeApplicationParametersResponseBodyParameters,
            requestId: 'string',
        };
    }
    validate() {
        if (this.parameterTemplates && typeof this.parameterTemplates.validate === 'function') {
            this.parameterTemplates.validate();
        }
        if (this.parameters && typeof this.parameters.validate === 'function') {
            this.parameters.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationParametersResponseBody = DescribeApplicationParametersResponseBody;
//# sourceMappingURL=DescribeApplicationParametersResponseBody.js.map