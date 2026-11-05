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
exports.ListSAMLProvidersResponseBody = exports.ListSAMLProvidersResponseBodySAMLProviders = exports.ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider extends $dara.Model {
    static names() {
        return {
            arn: 'Arn',
            createDate: 'CreateDate',
            description: 'Description',
            SAMLProviderName: 'SAMLProviderName',
            updateDate: 'UpdateDate',
        };
    }
    static types() {
        return {
            arn: 'string',
            createDate: 'string',
            description: 'string',
            SAMLProviderName: 'string',
            updateDate: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider = ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider;
class ListSAMLProvidersResponseBodySAMLProviders extends $dara.Model {
    static names() {
        return {
            SAMLProvider: 'SAMLProvider',
        };
    }
    static types() {
        return {
            SAMLProvider: { 'type': 'array', 'itemType': ListSAMLProvidersResponseBodySAMLProvidersSAMLProvider },
        };
    }
    validate() {
        if (Array.isArray(this.SAMLProvider)) {
            $dara.Model.validateArray(this.SAMLProvider);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSAMLProvidersResponseBodySAMLProviders = ListSAMLProvidersResponseBodySAMLProviders;
class ListSAMLProvidersResponseBody extends $dara.Model {
    static names() {
        return {
            isTruncated: 'IsTruncated',
            marker: 'Marker',
            requestId: 'RequestId',
            SAMLProviders: 'SAMLProviders',
        };
    }
    static types() {
        return {
            isTruncated: 'boolean',
            marker: 'string',
            requestId: 'string',
            SAMLProviders: ListSAMLProvidersResponseBodySAMLProviders,
        };
    }
    validate() {
        if (this.SAMLProviders && typeof this.SAMLProviders.validate === 'function') {
            this.SAMLProviders.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSAMLProvidersResponseBody = ListSAMLProvidersResponseBody;
//# sourceMappingURL=ListSamlprovidersResponseBody.js.map