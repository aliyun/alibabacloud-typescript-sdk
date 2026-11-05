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
exports.DescribeDBInstanceSSLResponseBody = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceSSLResponseBody extends $dara.Model {
    static names() {
        return {
            ACL: 'ACL',
            CAType: 'CAType',
            clientCACert: 'ClientCACert',
            clientCACertExpireTime: 'ClientCACertExpireTime',
            clientCertRevocationList: 'ClientCertRevocationList',
            connectionString: 'ConnectionString',
            forceEncryption: 'ForceEncryption',
            lastModifyStatus: 'LastModifyStatus',
            modifyStatusReason: 'ModifyStatusReason',
            replicationACL: 'ReplicationACL',
            requestId: 'RequestId',
            requireUpdate: 'RequireUpdate',
            requireUpdateItem: 'RequireUpdateItem',
            requireUpdateReason: 'RequireUpdateReason',
            SSLCreateTime: 'SSLCreateTime',
            SSLEnabled: 'SSLEnabled',
            SSLExpireTime: 'SSLExpireTime',
            serverCAUrl: 'ServerCAUrl',
            serverCert: 'ServerCert',
            serverKey: 'ServerKey',
            tlsVersion: 'TlsVersion',
        };
    }
    static types() {
        return {
            ACL: 'string',
            CAType: 'string',
            clientCACert: 'string',
            clientCACertExpireTime: 'string',
            clientCertRevocationList: 'string',
            connectionString: 'string',
            forceEncryption: 'string',
            lastModifyStatus: 'string',
            modifyStatusReason: 'string',
            replicationACL: 'string',
            requestId: 'string',
            requireUpdate: 'string',
            requireUpdateItem: 'string',
            requireUpdateReason: 'string',
            SSLCreateTime: 'string',
            SSLEnabled: 'string',
            SSLExpireTime: 'string',
            serverCAUrl: 'string',
            serverCert: 'string',
            serverKey: 'string',
            tlsVersion: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceSSLResponseBody = DescribeDBInstanceSSLResponseBody;
//# sourceMappingURL=DescribeDbinstanceSslresponseBody.js.map