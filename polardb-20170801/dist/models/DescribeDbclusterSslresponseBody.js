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
exports.DescribeDBClusterSSLResponseBody = exports.DescribeDBClusterSSLResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterSSLResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBEndpointId: 'DBEndpointId',
            SSLAutoRotate: 'SSLAutoRotate',
            SSLConnectionString: 'SSLConnectionString',
            SSLEnabled: 'SSLEnabled',
            SSLExpireTime: 'SSLExpireTime',
        };
    }
    static types() {
        return {
            DBEndpointId: 'string',
            SSLAutoRotate: 'string',
            SSLConnectionString: 'string',
            SSLEnabled: 'string',
            SSLExpireTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterSSLResponseBodyItems = DescribeDBClusterSSLResponseBodyItems;
class DescribeDBClusterSSLResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
            SSLAutoRotate: 'SSLAutoRotate',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeDBClusterSSLResponseBodyItems },
            requestId: 'string',
            SSLAutoRotate: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterSSLResponseBody = DescribeDBClusterSSLResponseBody;
//# sourceMappingURL=DescribeDbclusterSslresponseBody.js.map