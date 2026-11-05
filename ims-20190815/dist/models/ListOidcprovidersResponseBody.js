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
exports.ListOIDCProvidersResponseBody = exports.ListOIDCProvidersResponseBodyOIDCProviders = exports.ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider extends $dara.Model {
    static names() {
        return {
            arn: 'Arn',
            clientIds: 'ClientIds',
            createDate: 'CreateDate',
            description: 'Description',
            fingerprints: 'Fingerprints',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            issuanceLimitTime: 'IssuanceLimitTime',
            issuerUrl: 'IssuerUrl',
            OIDCProviderName: 'OIDCProviderName',
            updateDate: 'UpdateDate',
        };
    }
    static types() {
        return {
            arn: 'string',
            clientIds: 'string',
            createDate: 'string',
            description: 'string',
            fingerprints: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            issuanceLimitTime: 'number',
            issuerUrl: 'string',
            OIDCProviderName: 'string',
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
exports.ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider = ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider;
class ListOIDCProvidersResponseBodyOIDCProviders extends $dara.Model {
    static names() {
        return {
            OIDCProvider: 'OIDCProvider',
        };
    }
    static types() {
        return {
            OIDCProvider: { 'type': 'array', 'itemType': ListOIDCProvidersResponseBodyOIDCProvidersOIDCProvider },
        };
    }
    validate() {
        if (Array.isArray(this.OIDCProvider)) {
            $dara.Model.validateArray(this.OIDCProvider);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListOIDCProvidersResponseBodyOIDCProviders = ListOIDCProvidersResponseBodyOIDCProviders;
class ListOIDCProvidersResponseBody extends $dara.Model {
    static names() {
        return {
            isTruncated: 'IsTruncated',
            marker: 'Marker',
            OIDCProviders: 'OIDCProviders',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            isTruncated: 'boolean',
            marker: 'string',
            OIDCProviders: ListOIDCProvidersResponseBodyOIDCProviders,
            requestId: 'string',
        };
    }
    validate() {
        if (this.OIDCProviders && typeof this.OIDCProviders.validate === 'function') {
            this.OIDCProviders.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListOIDCProvidersResponseBody = ListOIDCProvidersResponseBody;
//# sourceMappingURL=ListOidcprovidersResponseBody.js.map