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
exports.GetIdentityProviderSCIMResponseBody = exports.GetIdentityProviderSCIMResponseBodyData = exports.GetIdentityProviderSCIMResponseBodyDataConfiguration = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
    static names() {
        return {
            baseUrl: 'baseUrl',
            status: 'status',
        };
    }
    static types() {
        return {
            baseUrl: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetIdentityProviderSCIMResponseBodyDataConfiguration = GetIdentityProviderSCIMResponseBodyDataConfiguration;
class GetIdentityProviderSCIMResponseBodyData extends $dara.Model {
    static names() {
        return {
            configuration: 'configuration',
            operationStatus: 'operationStatus',
            status: 'status',
            syncEnabled: 'syncEnabled',
        };
    }
    static types() {
        return {
            configuration: GetIdentityProviderSCIMResponseBodyDataConfiguration,
            operationStatus: 'string',
            status: 'string',
            syncEnabled: 'boolean',
        };
    }
    validate() {
        if (this.configuration && typeof this.configuration.validate === 'function') {
            this.configuration.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetIdentityProviderSCIMResponseBodyData = GetIdentityProviderSCIMResponseBodyData;
class GetIdentityProviderSCIMResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            data: 'data',
            httpStatusCode: 'httpStatusCode',
            message: 'message',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: GetIdentityProviderSCIMResponseBodyData,
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
exports.GetIdentityProviderSCIMResponseBody = GetIdentityProviderSCIMResponseBody;
//# sourceMappingURL=GetIdentityProviderScimresponseBody.js.map