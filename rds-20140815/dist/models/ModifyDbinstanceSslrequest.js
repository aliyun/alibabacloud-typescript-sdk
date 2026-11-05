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
exports.ModifyDBInstanceSSLRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyDBInstanceSSLRequest extends $dara.Model {
    static names() {
        return {
            ACL: 'ACL',
            CAType: 'CAType',
            certificate: 'Certificate',
            clientCACert: 'ClientCACert',
            clientCAEnabled: 'ClientCAEnabled',
            clientCertRevocationList: 'ClientCertRevocationList',
            clientCrlEnabled: 'ClientCrlEnabled',
            connectionString: 'ConnectionString',
            DBInstanceId: 'DBInstanceId',
            forceEncryption: 'ForceEncryption',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            passWord: 'PassWord',
            replicationACL: 'ReplicationACL',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            SSLEnabled: 'SSLEnabled',
            serverCert: 'ServerCert',
            serverKey: 'ServerKey',
            tlsVersion: 'TlsVersion',
        };
    }
    static types() {
        return {
            ACL: 'string',
            CAType: 'string',
            certificate: 'string',
            clientCACert: 'string',
            clientCAEnabled: 'number',
            clientCertRevocationList: 'string',
            clientCrlEnabled: 'number',
            connectionString: 'string',
            DBInstanceId: 'string',
            forceEncryption: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            passWord: 'string',
            replicationACL: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            SSLEnabled: 'number',
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
exports.ModifyDBInstanceSSLRequest = ModifyDBInstanceSSLRequest;
//# sourceMappingURL=ModifyDbinstanceSslrequest.js.map