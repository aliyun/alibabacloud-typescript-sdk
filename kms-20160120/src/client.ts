// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import SPI from '@alicloud/gateway-spi';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AsymmetricDecryptRequest extends $tea.Model {
  algorithm?: string;
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricDecryptResponseBody extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  plaintext?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricDecryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsymmetricDecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AsymmetricDecryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptRequest extends $tea.Model {
  algorithm?: string;
  keyId?: string;
  keyVersionId?: string;
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptResponseBody extends $tea.Model {
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsymmetricEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AsymmetricEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignRequest extends $tea.Model {
  algorithm?: string;
  digest?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      digest: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignResponseBody extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  requestId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsymmetricSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AsymmetricSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyRequest extends $tea.Model {
  algorithm?: string;
  digest?: string;
  keyId?: string;
  keyVersionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      digest: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyResponseBody extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  requestId?: string;
  value?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
      value: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsymmetricVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AsymmetricVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelKeyDeletionRequest extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelKeyDeletionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelKeyDeletionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelKeyDeletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelKeyDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptRequest extends $tea.Model {
  algorithm?: string;
  certificateId?: string;
  ciphertextBlob?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      ciphertextBlob: 'CiphertextBlob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      ciphertextBlob: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptResponseBody extends $tea.Model {
  certificateId?: string;
  plaintext?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertificatePrivateKeyDecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CertificatePrivateKeyDecryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignRequest extends $tea.Model {
  algorithm?: string;
  certificateId?: string;
  message?: string;
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      message: 'Message',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      message: 'string',
      messageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignResponseBody extends $tea.Model {
  certificateId?: string;
  requestId?: string;
  signatureValue?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
      signatureValue: 'SignatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      requestId: 'string',
      signatureValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertificatePrivateKeySignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CertificatePrivateKeySignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptRequest extends $tea.Model {
  algorithm?: string;
  certificateId?: string;
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptResponseBody extends $tea.Model {
  certificateId?: string;
  ciphertextBlob?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      ciphertextBlob: 'CiphertextBlob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      ciphertextBlob: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertificatePublicKeyEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CertificatePublicKeyEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyVerifyRequest extends $tea.Model {
  algorithm?: string;
  certificateId?: string;
  message?: string;
  messageType?: string;
  signatureValue?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      message: 'Message',
      messageType: 'MessageType',
      signatureValue: 'SignatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      message: 'string',
      messageType: 'string',
      signatureValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyVerifyResponseBody extends $tea.Model {
  certificateId?: string;
  requestId?: string;
  signatureValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
      signatureValid: 'SignatureValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      requestId: 'string',
      signatureValid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertificatePublicKeyVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CertificatePublicKeyVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectKmsInstanceRequest extends $tea.Model {
  KMProvider?: string;
  kmsInstanceId?: string;
  vSwitchIds?: string;
  vpcId?: string;
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      KMProvider: 'KMProvider',
      kmsInstanceId: 'KmsInstanceId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KMProvider: 'string',
      kmsInstanceId: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
      zoneIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectKmsInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectKmsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConnectKmsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConnectKmsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasRequest extends $tea.Model {
  aliasName?: string;
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationAccessPointRequest extends $tea.Model {
  authenticationMethod?: string;
  description?: string;
  name?: string;
  policies?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationMethod: 'AuthenticationMethod',
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationMethod: 'string',
      description: 'string',
      name: 'string',
      policies: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationAccessPointResponseBody extends $tea.Model {
  arn?: string;
  authenticationMethod?: string;
  description?: string;
  name?: string;
  policies?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      authenticationMethod: 'AuthenticationMethod',
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      authenticationMethod: 'string',
      description: 'string',
      name: 'string',
      policies: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationAccessPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequest extends $tea.Model {
  exportablePrivateKey?: boolean;
  keySpec?: string;
  subject?: string;
  subjectAlternativeNames?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      exportablePrivateKey: 'ExportablePrivateKey',
      keySpec: 'KeySpec',
      subject: 'Subject',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportablePrivateKey: 'boolean',
      keySpec: 'string',
      subject: 'string',
      subjectAlternativeNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateShrinkRequest extends $tea.Model {
  exportablePrivateKey?: boolean;
  keySpec?: string;
  subject?: string;
  subjectAlternativeNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      exportablePrivateKey: 'ExportablePrivateKey',
      keySpec: 'KeySpec',
      subject: 'Subject',
      subjectAlternativeNamesShrink: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportablePrivateKey: 'boolean',
      keySpec: 'string',
      subject: 'string',
      subjectAlternativeNamesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponseBody extends $tea.Model {
  arn?: string;
  certificateId?: string;
  csr?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      certificateId: 'CertificateId',
      csr: 'Csr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      certificateId: 'string',
      csr: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientKeyRequest extends $tea.Model {
  aapName?: string;
  notAfter?: string;
  notBefore?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
      notAfter: 'string',
      notBefore: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientKeyResponseBody extends $tea.Model {
  clientKeyId?: string;
  keyAlgorithm?: string;
  notAfter?: string;
  notBefore?: string;
  privateKeyData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeyId: 'ClientKeyId',
      keyAlgorithm: 'KeyAlgorithm',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      privateKeyData: 'PrivateKeyData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeyId: 'string',
      keyAlgorithm: 'string',
      notAfter: 'string',
      notBefore: 'string',
      privateKeyData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClientKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyRequest extends $tea.Model {
  DKMSInstanceId?: string;
  description?: string;
  enableAutomaticRotation?: boolean;
  keySpec?: string;
  keyUsage?: string;
  origin?: string;
  protectionLevel?: string;
  rotationInterval?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      keySpec: 'KeySpec',
      keyUsage: 'KeyUsage',
      origin: 'Origin',
      protectionLevel: 'ProtectionLevel',
      rotationInterval: 'RotationInterval',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DKMSInstanceId: 'string',
      description: 'string',
      enableAutomaticRotation: 'boolean',
      keySpec: 'string',
      keyUsage: 'string',
      origin: 'string',
      protectionLevel: 'string',
      rotationInterval: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponseBody extends $tea.Model {
  keyMetadata?: CreateKeyResponseBodyKeyMetadata;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyMetadata: 'KeyMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyMetadata: CreateKeyResponseBodyKeyMetadata,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionRequest extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponseBody extends $tea.Model {
  keyVersion?: CreateKeyVersionResponseBodyKeyVersion;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyVersion: 'KeyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersion: CreateKeyVersionResponseBodyKeyVersion,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateKeyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRuleRequest extends $tea.Model {
  description?: string;
  name?: string;
  sourcePrivateIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sourcePrivateIp: 'SourcePrivateIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sourcePrivateIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRuleResponseBody extends $tea.Model {
  arn?: string;
  description?: string;
  name?: string;
  requestId?: string;
  sourcePrivateIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      description: 'Description',
      name: 'Name',
      requestId: 'RequestId',
      sourcePrivateIp: 'SourcePrivateIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      description: 'string',
      name: 'string',
      requestId: 'string',
      sourcePrivateIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  accessControlRules?: string;
  description?: string;
  kmsInstance?: string;
  name?: string;
  permissions?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      description: 'Description',
      kmsInstance: 'KmsInstance',
      name: 'Name',
      permissions: 'Permissions',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      description: 'string',
      kmsInstance: 'string',
      name: 'string',
      permissions: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $tea.Model {
  accessControlRules?: string;
  arn?: string;
  description?: string;
  kmsInstance?: string;
  name?: string;
  permissions?: string;
  requestId?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      arn: 'Arn',
      description: 'Description',
      kmsInstance: 'KmsInstance',
      name: 'Name',
      permissions: 'Permissions',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      arn: 'string',
      description: 'string',
      kmsInstance: 'string',
      name: 'string',
      permissions: 'string',
      requestId: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretRequest extends $tea.Model {
  DKMSInstanceId?: string;
  description?: string;
  enableAutomaticRotation?: boolean;
  encryptionKeyId?: string;
  extendedConfig?: { [key: string]: any };
  rotationInterval?: string;
  secretData?: string;
  secretDataType?: string;
  secretName?: string;
  secretType?: string;
  tags?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      encryptionKeyId: 'EncryptionKeyId',
      extendedConfig: 'ExtendedConfig',
      rotationInterval: 'RotationInterval',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DKMSInstanceId: 'string',
      description: 'string',
      enableAutomaticRotation: 'boolean',
      encryptionKeyId: 'string',
      extendedConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      rotationInterval: 'string',
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretShrinkRequest extends $tea.Model {
  DKMSInstanceId?: string;
  description?: string;
  enableAutomaticRotation?: boolean;
  encryptionKeyId?: string;
  extendedConfigShrink?: string;
  rotationInterval?: string;
  secretData?: string;
  secretDataType?: string;
  secretName?: string;
  secretType?: string;
  tags?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      encryptionKeyId: 'EncryptionKeyId',
      extendedConfigShrink: 'ExtendedConfig',
      rotationInterval: 'RotationInterval',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DKMSInstanceId: 'string',
      description: 'string',
      enableAutomaticRotation: 'boolean',
      encryptionKeyId: 'string',
      extendedConfigShrink: 'string',
      rotationInterval: 'string',
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponseBody extends $tea.Model {
  arn?: string;
  automaticRotation?: string;
  DKMSInstanceId?: string;
  extendedConfig?: string;
  nextRotationDate?: string;
  requestId?: string;
  rotationInterval?: string;
  secretName?: string;
  secretType?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      DKMSInstanceId: 'DKMSInstanceId',
      extendedConfig: 'ExtendedConfig',
      nextRotationDate: 'NextRotationDate',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
      secretType: 'SecretType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      DKMSInstanceId: 'string',
      extendedConfig: 'string',
      nextRotationDate: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretName: 'string',
      secretType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptRequest extends $tea.Model {
  ciphertextBlob?: string;
  encryptionContext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      encryptionContext: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptShrinkRequest extends $tea.Model {
  ciphertextBlob?: string;
  encryptionContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      encryptionContextShrink: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      encryptionContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptResponseBody extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  plaintext?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DecryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasRequest extends $tea.Model {
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationAccessPointRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationAccessPointResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationAccessPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateRequest extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientKeyRequest extends $tea.Model {
  clientKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeyId: 'ClientKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientKeyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClientKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClientKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyMaterialRequest extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyMaterialResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyMaterialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeyMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteKeyMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretRequest extends $tea.Model {
  forceDeleteWithoutRecovery?: string;
  recoveryWindowInDays?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      forceDeleteWithoutRecovery: 'ForceDeleteWithoutRecovery',
      recoveryWindowInDays: 'RecoveryWindowInDays',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDeleteWithoutRecovery: 'string',
      recoveryWindowInDays: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponseBody extends $tea.Model {
  plannedDeleteTime?: string;
  requestId?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      plannedDeleteTime: 'PlannedDeleteTime',
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plannedDeleteTime: 'string',
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountKmsStatusResponseBody extends $tea.Model {
  accountStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountKmsStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountKmsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountKmsStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAccessPointRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAccessPointResponseBody extends $tea.Model {
  arn?: string;
  authenticationMethod?: string;
  description?: string;
  name?: string;
  policies?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      authenticationMethod: 'AuthenticationMethod',
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      authenticationMethod: 'string',
      description: 'string',
      name: 'string',
      policies: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAccessPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateRequest extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateResponseBody extends $tea.Model {
  arn?: string;
  certificateId?: string;
  createdAt?: string;
  exportablePrivateKey?: boolean;
  issuer?: string;
  keySpec?: string;
  notAfter?: string;
  notBefore?: string;
  requestId?: string;
  serial?: string;
  signatureAlgorithm?: string;
  status?: string;
  subject?: string;
  subjectAlternativeNames?: string[];
  subjectKeyIdentifier?: string;
  subjectPublicKey?: string;
  tags?: { [key: string]: any };
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      certificateId: 'CertificateId',
      createdAt: 'CreatedAt',
      exportablePrivateKey: 'ExportablePrivateKey',
      issuer: 'Issuer',
      keySpec: 'KeySpec',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
      serial: 'Serial',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      subject: 'Subject',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      subjectKeyIdentifier: 'SubjectKeyIdentifier',
      subjectPublicKey: 'SubjectPublicKey',
      tags: 'Tags',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      certificateId: 'string',
      createdAt: 'string',
      exportablePrivateKey: 'boolean',
      issuer: 'string',
      keySpec: 'string',
      notAfter: 'string',
      notBefore: 'string',
      requestId: 'string',
      serial: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      subject: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
      subjectKeyIdentifier: 'string',
      subjectPublicKey: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyRequest extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyResponseBody extends $tea.Model {
  keyMetadata?: DescribeKeyResponseBodyKeyMetadata;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyMetadata: 'KeyMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyMetadata: DescribeKeyResponseBodyKeyMetadata,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionRequest extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionResponseBody extends $tea.Model {
  keyVersion?: DescribeKeyVersionResponseBodyKeyVersion;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyVersion: 'KeyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersion: DescribeKeyVersionResponseBodyKeyVersion,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKeyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeKeyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleResponseBody extends $tea.Model {
  arn?: string;
  description?: string;
  requestId?: string;
  sourcePrivateIp?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      description: 'Description',
      requestId: 'RequestId',
      sourcePrivateIp: 'SourcePrivateIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      description: 'string',
      requestId: 'string',
      sourcePrivateIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyResponseBody extends $tea.Model {
  accessControlRules?: string;
  arn?: string;
  description?: string;
  kmsInstance?: string;
  name?: string;
  permissions?: string[];
  requestId?: string;
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      arn: 'Arn',
      description: 'Description',
      kmsInstance: 'KmsInstance',
      name: 'Name',
      permissions: 'Permissions',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      arn: 'string',
      description: 'string',
      kmsInstance: 'string',
      name: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretRequest extends $tea.Model {
  fetchTags?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      fetchTags: 'FetchTags',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchTags: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBody extends $tea.Model {
  arn?: string;
  automaticRotation?: string;
  createTime?: string;
  DKMSInstanceId?: string;
  description?: string;
  encryptionKeyId?: string;
  extendedConfig?: string;
  lastRotationDate?: string;
  nextRotationDate?: string;
  plannedDeleteTime?: string;
  requestId?: string;
  rotationInterval?: string;
  secretName?: string;
  secretType?: string;
  tags?: DescribeSecretResponseBodyTags;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      createTime: 'CreateTime',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      encryptionKeyId: 'EncryptionKeyId',
      extendedConfig: 'ExtendedConfig',
      lastRotationDate: 'LastRotationDate',
      nextRotationDate: 'NextRotationDate',
      plannedDeleteTime: 'PlannedDeleteTime',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      createTime: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      encryptionKeyId: 'string',
      extendedConfig: 'string',
      lastRotationDate: 'string',
      nextRotationDate: 'string',
      plannedDeleteTime: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: DescribeSecretResponseBodyTags,
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKeyRequest extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKeyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableKeyRequest extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableKeyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptRequest extends $tea.Model {
  encryptionContext?: { [key: string]: any };
  keyId?: string;
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptShrinkRequest extends $tea.Model {
  encryptionContextShrink?: string;
  keyId?: string;
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionContextShrink: 'string',
      keyId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponseBody extends $tea.Model {
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyRequest extends $tea.Model {
  ciphertextBlob?: string;
  encryptionContext?: { [key: string]: any };
  publicKeyBlob?: string;
  wrappingAlgorithm?: string;
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      encryptionContext: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyShrinkRequest extends $tea.Model {
  ciphertextBlob?: string;
  encryptionContextShrink?: string;
  publicKeyBlob?: string;
  wrappingAlgorithm?: string;
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      encryptionContextShrink: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      encryptionContextShrink: 'string',
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyResponseBody extends $tea.Model {
  exportedDataKey?: string;
  keyId?: string;
  keyVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportedDataKey: 'ExportedDataKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportedDataKey: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyRequest extends $tea.Model {
  encryptionContext?: { [key: string]: any };
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  publicKeyBlob?: string;
  wrappingAlgorithm?: string;
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyShrinkRequest extends $tea.Model {
  encryptionContextShrink?: string;
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  publicKeyBlob?: string;
  wrappingAlgorithm?: string;
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyResponseBody extends $tea.Model {
  ciphertextBlob?: string;
  exportedDataKey?: string;
  keyId?: string;
  keyVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      exportedDataKey: 'ExportedDataKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      exportedDataKey: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateAndExportDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateAndExportDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyRequest extends $tea.Model {
  encryptionContext?: { [key: string]: any };
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyShrinkRequest extends $tea.Model {
  encryptionContextShrink?: string;
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyResponseBody extends $tea.Model {
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  plaintext?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextRequest extends $tea.Model {
  encryptionContext?: { [key: string]: any };
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextShrinkRequest extends $tea.Model {
  encryptionContextShrink?: string;
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextResponseBody extends $tea.Model {
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateDataKeyWithoutPlaintextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateDataKeyWithoutPlaintextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateRequest extends $tea.Model {
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateResponseBody extends $tea.Model {
  certificate?: string;
  certificateChain?: string;
  certificateId?: string;
  csr?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      certificateId: 'CertificateId',
      csr: 'Csr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      certificateId: 'string',
      csr: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientKeyRequest extends $tea.Model {
  clientKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeyId: 'ClientKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientKeyResponseBody extends $tea.Model {
  aapName?: string;
  clientKeyId?: string;
  createTime?: string;
  keyAlgorithm?: string;
  keyOrigin?: string;
  notAfter?: string;
  notBefore?: string;
  publicKeyData?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
      clientKeyId: 'ClientKeyId',
      createTime: 'CreateTime',
      keyAlgorithm: 'KeyAlgorithm',
      keyOrigin: 'KeyOrigin',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      publicKeyData: 'PublicKeyData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
      clientKeyId: 'string',
      createTime: 'string',
      keyAlgorithm: 'string',
      keyOrigin: 'string',
      notAfter: 'string',
      notBefore: 'string',
      publicKeyData: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClientKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClientKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceRequest extends $tea.Model {
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBody extends $tea.Model {
  kmsInstance?: GetKmsInstanceResponseBodyKmsInstance;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstance: 'KmsInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstance: GetKmsInstanceResponseBodyKmsInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKmsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetKmsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersForImportRequest extends $tea.Model {
  keyId?: string;
  wrappingAlgorithm?: string;
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersForImportResponseBody extends $tea.Model {
  importToken?: string;
  keyId?: string;
  publicKey?: string;
  requestId?: string;
  tokenExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      importToken: 'ImportToken',
      keyId: 'KeyId',
      publicKey: 'PublicKey',
      requestId: 'RequestId',
      tokenExpireTime: 'TokenExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importToken: 'string',
      keyId: 'string',
      publicKey: 'string',
      requestId: 'string',
      tokenExpireTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersForImportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetParametersForImportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetParametersForImportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicKeyRequest extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicKeyResponseBody extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  publicKey?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      publicKey: 'PublicKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      publicKey: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPublicKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRandomPasswordRequest extends $tea.Model {
  excludeCharacters?: string;
  excludeLowercase?: string;
  excludeNumbers?: string;
  excludePunctuation?: string;
  excludeUppercase?: string;
  passwordLength?: string;
  requireEachIncludedType?: string;
  static names(): { [key: string]: string } {
    return {
      excludeCharacters: 'ExcludeCharacters',
      excludeLowercase: 'ExcludeLowercase',
      excludeNumbers: 'ExcludeNumbers',
      excludePunctuation: 'ExcludePunctuation',
      excludeUppercase: 'ExcludeUppercase',
      passwordLength: 'PasswordLength',
      requireEachIncludedType: 'RequireEachIncludedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeCharacters: 'string',
      excludeLowercase: 'string',
      excludeNumbers: 'string',
      excludePunctuation: 'string',
      excludeUppercase: 'string',
      passwordLength: 'string',
      requireEachIncludedType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRandomPasswordResponseBody extends $tea.Model {
  randomPassword?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      randomPassword: 'RandomPassword',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      randomPassword: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRandomPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRandomPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRandomPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueRequest extends $tea.Model {
  fetchExtendedConfig?: boolean;
  secretName?: string;
  versionId?: string;
  versionStage?: string;
  static names(): { [key: string]: string } {
    return {
      fetchExtendedConfig: 'FetchExtendedConfig',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchExtendedConfig: 'boolean',
      secretName: 'string',
      versionId: 'string',
      versionStage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponseBody extends $tea.Model {
  automaticRotation?: string;
  createTime?: string;
  extendedConfig?: string;
  lastRotationDate?: string;
  nextRotationDate?: string;
  requestId?: string;
  rotationInterval?: string;
  secretData?: string;
  secretDataType?: string;
  secretName?: string;
  secretType?: string;
  versionId?: string;
  versionStages?: GetSecretValueResponseBodyVersionStages;
  static names(): { [key: string]: string } {
    return {
      automaticRotation: 'AutomaticRotation',
      createTime: 'CreateTime',
      extendedConfig: 'ExtendedConfig',
      lastRotationDate: 'LastRotationDate',
      nextRotationDate: 'NextRotationDate',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      secretType: 'SecretType',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticRotation: 'string',
      createTime: 'string',
      extendedConfig: 'string',
      lastRotationDate: 'string',
      nextRotationDate: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      secretType: 'string',
      versionId: 'string',
      versionStages: GetSecretValueResponseBodyVersionStages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecretValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSecretValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyMaterialRequest extends $tea.Model {
  encryptedKeyMaterial?: string;
  importToken?: string;
  keyId?: string;
  keyMaterialExpireUnix?: number;
  static names(): { [key: string]: string } {
    return {
      encryptedKeyMaterial: 'EncryptedKeyMaterial',
      importToken: 'ImportToken',
      keyId: 'KeyId',
      keyMaterialExpireUnix: 'KeyMaterialExpireUnix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedKeyMaterial: 'string',
      importToken: 'string',
      keyId: 'string',
      keyMaterialExpireUnix: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyMaterialResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyMaterialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportKeyMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportKeyMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBody extends $tea.Model {
  aliases?: ListAliasesResponseBodyAliases;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: ListAliasesResponseBodyAliases,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAliasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAliasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdRequest extends $tea.Model {
  keyId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponseBody extends $tea.Model {
  aliases?: ListAliasesByKeyIdResponseBodyAliases;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: ListAliasesByKeyIdResponseBodyAliases,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAliasesByKeyIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAliasesByKeyIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponseBody extends $tea.Model {
  applicationAccessPoints?: ListApplicationAccessPointsResponseBodyApplicationAccessPoints;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationAccessPoints: 'ApplicationAccessPoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessPoints: ListApplicationAccessPointsResponseBodyApplicationAccessPoints,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationAccessPointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationAccessPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientKeysRequest extends $tea.Model {
  aapName?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientKeysResponseBody extends $tea.Model {
  clientKeys?: ListClientKeysResponseBodyClientKeys[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeys: 'ClientKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeys: { 'type': 'array', 'itemType': ListClientKeysResponseBodyClientKeys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClientKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClientKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsRequest extends $tea.Model {
  keyId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponseBody extends $tea.Model {
  keyVersions?: ListKeyVersionsResponseBodyKeyVersions;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keyVersions: 'KeyVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersions: ListKeyVersionsResponseBodyKeyVersions,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeyVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKeyVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysRequest extends $tea.Model {
  filters?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponseBody extends $tea.Model {
  keys?: ListKeysResponseBodyKeys;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: ListKeysResponseBodyKeys,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponseBody extends $tea.Model {
  kmsInstances?: ListKmsInstancesResponseBodyKmsInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      kmsInstances: 'KmsInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstances: ListKmsInstancesResponseBodyKmsInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKmsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKmsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponseBody extends $tea.Model {
  networkRules?: ListNetworkRulesResponseBodyNetworkRules;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: ListNetworkRulesResponseBodyNetworkRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetworkRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  policies?: ListPoliciesResponseBodyPolicies;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsRequest extends $tea.Model {
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBody extends $tea.Model {
  requestId?: string;
  tags?: ListResourceTagsResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: ListResourceTagsResponseBodyTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsRequest extends $tea.Model {
  includeDeprecated?: string;
  pageNumber?: number;
  pageSize?: number;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      includeDeprecated: 'IncludeDeprecated',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeDeprecated: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  secretName?: string;
  totalCount?: number;
  versionIds?: ListSecretVersionIdsResponseBodyVersionIds;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secretName: 'SecretName',
      totalCount: 'TotalCount',
      versionIds: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secretName: 'string',
      totalCount: 'number',
      versionIds: ListSecretVersionIdsResponseBodyVersionIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecretVersionIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecretVersionIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsRequest extends $tea.Model {
  fetchTags?: string;
  filters?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fetchTags: 'FetchTags',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchTags: 'string',
      filters: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  secretList?: ListSecretsResponseBodySecretList;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secretList: 'SecretList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secretList: ListSecretsResponseBodySecretList,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecretsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecretsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenKmsServiceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenKmsServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenKmsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenKmsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueRequest extends $tea.Model {
  secretData?: string;
  secretDataType?: string;
  secretName?: string;
  versionId?: string;
  versionStages?: string;
  static names(): { [key: string]: string } {
    return {
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      versionId: 'string',
      versionStages: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponseBody extends $tea.Model {
  requestId?: string;
  secretName?: string;
  versionId?: string;
  versionStages?: PutSecretValueResponseBodyVersionStages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
      versionId: 'string',
      versionStages: PutSecretValueResponseBodyVersionStages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutSecretValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutSecretValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptRequest extends $tea.Model {
  ciphertextBlob?: string;
  destinationEncryptionContext?: { [key: string]: any };
  destinationKeyId?: string;
  sourceEncryptionAlgorithm?: string;
  sourceEncryptionContext?: { [key: string]: any };
  sourceKeyId?: string;
  sourceKeyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      destinationEncryptionContext: 'DestinationEncryptionContext',
      destinationKeyId: 'DestinationKeyId',
      sourceEncryptionAlgorithm: 'SourceEncryptionAlgorithm',
      sourceEncryptionContext: 'SourceEncryptionContext',
      sourceKeyId: 'SourceKeyId',
      sourceKeyVersionId: 'SourceKeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      destinationEncryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      destinationKeyId: 'string',
      sourceEncryptionAlgorithm: 'string',
      sourceEncryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceKeyId: 'string',
      sourceKeyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptShrinkRequest extends $tea.Model {
  ciphertextBlob?: string;
  destinationEncryptionContextShrink?: string;
  destinationKeyId?: string;
  sourceEncryptionAlgorithm?: string;
  sourceEncryptionContextShrink?: string;
  sourceKeyId?: string;
  sourceKeyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      destinationEncryptionContextShrink: 'DestinationEncryptionContext',
      destinationKeyId: 'DestinationKeyId',
      sourceEncryptionAlgorithm: 'SourceEncryptionAlgorithm',
      sourceEncryptionContextShrink: 'SourceEncryptionContext',
      sourceKeyId: 'SourceKeyId',
      sourceKeyVersionId: 'SourceKeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      destinationEncryptionContextShrink: 'string',
      destinationKeyId: 'string',
      sourceEncryptionAlgorithm: 'string',
      sourceEncryptionContextShrink: 'string',
      sourceKeyId: 'string',
      sourceKeyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptResponseBody extends $tea.Model {
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreSecretRequest extends $tea.Model {
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreSecretResponseBody extends $tea.Model {
  requestId?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestoreSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestoreSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateSecretRequest extends $tea.Model {
  secretName?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateSecretResponseBody extends $tea.Model {
  arn?: string;
  requestId?: string;
  secretName?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      requestId: 'RequestId',
      secretName: 'SecretName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      requestId: 'string',
      secretName: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RotateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RotateSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleKeyDeletionRequest extends $tea.Model {
  keyId?: string;
  pendingWindowInDays?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      pendingWindowInDays: 'PendingWindowInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      pendingWindowInDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleKeyDeletionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleKeyDeletionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScheduleKeyDeletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScheduleKeyDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionRequest extends $tea.Model {
  deletionProtectionDescription?: string;
  enableDeletionProtection?: boolean;
  protectedResourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtectionDescription: 'DeletionProtectionDescription',
      enableDeletionProtection: 'EnableDeletionProtection',
      protectedResourceArn: 'ProtectedResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtectionDescription: 'string',
      enableDeletionProtection: 'boolean',
      protectedResourceArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceRequest extends $tea.Model {
  certificateId?: string;
  keyId?: string;
  secretName?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      keyId: 'KeyId',
      secretName: 'SecretName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      keyId: 'string',
      secretName: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceRequest extends $tea.Model {
  certificateId?: string;
  keyId?: string;
  secretName?: string;
  tagKeys?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      keyId: 'KeyId',
      secretName: 'SecretName',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      keyId: 'string',
      secretName: 'string',
      tagKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasRequest extends $tea.Model {
  aliasName?: string;
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAccessPointRequest extends $tea.Model {
  description?: string;
  name?: string;
  policies?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      policies: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAccessPointResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAccessPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCertificateStatusRequest extends $tea.Model {
  certificateId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCertificateStatusResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCertificateStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCertificateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeyDescriptionRequest extends $tea.Model {
  description?: string;
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeyDescriptionResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeyDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateKeyDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateKeyDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKmsInstanceBindVpcRequest extends $tea.Model {
  bindVpcs?: string;
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: 'string',
      kmsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKmsInstanceBindVpcResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKmsInstanceBindVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateKmsInstanceBindVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateKmsInstanceBindVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkRuleRequest extends $tea.Model {
  description?: string;
  name?: string;
  sourcePrivateIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sourcePrivateIp: 'SourcePrivateIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sourcePrivateIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkRuleResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyRequest extends $tea.Model {
  accessControlRules?: string;
  description?: string;
  name?: string;
  permissions?: string;
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      description: 'Description',
      name: 'Name',
      permissions: 'Permissions',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      description: 'string',
      name: 'string',
      permissions: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRotationPolicyRequest extends $tea.Model {
  enableAutomaticRotation?: boolean;
  keyId?: string;
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      enableAutomaticRotation: 'EnableAutomaticRotation',
      keyId: 'KeyId',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutomaticRotation: 'boolean',
      keyId: 'string',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRotationPolicyResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRotationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRotationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRotationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRequest extends $tea.Model {
  extendedConfig?: UpdateSecretRequestExtendedConfig;
  description?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      extendedConfig: 'ExtendedConfig',
      description: 'Description',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedConfig: UpdateSecretRequestExtendedConfig,
      description: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretShrinkRequest extends $tea.Model {
  extendedConfig?: UpdateSecretShrinkRequestExtendedConfig;
  description?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      extendedConfig: 'ExtendedConfig',
      description: 'Description',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedConfig: UpdateSecretShrinkRequestExtendedConfig,
      description: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretResponseBody extends $tea.Model {
  requestId?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyRequest extends $tea.Model {
  enableAutomaticRotation?: boolean;
  rotationInterval?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAutomaticRotation: 'EnableAutomaticRotation',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutomaticRotation: 'boolean',
      rotationInterval: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyResponseBody extends $tea.Model {
  requestId?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecretRotationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSecretRotationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageRequest extends $tea.Model {
  moveToVersion?: string;
  removeFromVersion?: string;
  secretName?: string;
  versionStage?: string;
  static names(): { [key: string]: string } {
    return {
      moveToVersion: 'MoveToVersion',
      removeFromVersion: 'RemoveFromVersion',
      secretName: 'SecretName',
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moveToVersion: 'string',
      removeFromVersion: 'string',
      secretName: 'string',
      versionStage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageResponseBody extends $tea.Model {
  requestId?: string;
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecretVersionStageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSecretVersionStageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCertificateRequest extends $tea.Model {
  certificate?: string;
  certificateChain?: string;
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCertificateResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponseBodyKeyMetadata extends $tea.Model {
  arn?: string;
  automaticRotation?: string;
  creationDate?: string;
  creator?: string;
  DKMSInstanceId?: string;
  deleteDate?: string;
  description?: string;
  keyId?: string;
  keySpec?: string;
  keyState?: string;
  keyUsage?: string;
  lastRotationDate?: string;
  materialExpireTime?: string;
  nextRotationDate?: string;
  origin?: string;
  primaryKeyVersion?: string;
  protectionLevel?: string;
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      creationDate: 'CreationDate',
      creator: 'Creator',
      DKMSInstanceId: 'DKMSInstanceId',
      deleteDate: 'DeleteDate',
      description: 'Description',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      keyState: 'KeyState',
      keyUsage: 'KeyUsage',
      lastRotationDate: 'LastRotationDate',
      materialExpireTime: 'MaterialExpireTime',
      nextRotationDate: 'NextRotationDate',
      origin: 'Origin',
      primaryKeyVersion: 'PrimaryKeyVersion',
      protectionLevel: 'ProtectionLevel',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      creationDate: 'string',
      creator: 'string',
      DKMSInstanceId: 'string',
      deleteDate: 'string',
      description: 'string',
      keyId: 'string',
      keySpec: 'string',
      keyState: 'string',
      keyUsage: 'string',
      lastRotationDate: 'string',
      materialExpireTime: 'string',
      nextRotationDate: 'string',
      origin: 'string',
      primaryKeyVersion: 'string',
      protectionLevel: 'string',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponseBodyKeyVersion extends $tea.Model {
  creationDate?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyResponseBodyKeyMetadata extends $tea.Model {
  arn?: string;
  automaticRotation?: string;
  creationDate?: string;
  creator?: string;
  DKMSInstanceId?: string;
  deleteDate?: string;
  deletionProtection?: string;
  deletionProtectionDescription?: string;
  description?: string;
  keyId?: string;
  keySpec?: string;
  keyState?: string;
  keyUsage?: string;
  lastRotationDate?: string;
  materialExpireTime?: string;
  nextRotationDate?: string;
  origin?: string;
  primaryKeyVersion?: string;
  protectionLevel?: string;
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      creationDate: 'CreationDate',
      creator: 'Creator',
      DKMSInstanceId: 'DKMSInstanceId',
      deleteDate: 'DeleteDate',
      deletionProtection: 'DeletionProtection',
      deletionProtectionDescription: 'DeletionProtectionDescription',
      description: 'Description',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      keyState: 'KeyState',
      keyUsage: 'KeyUsage',
      lastRotationDate: 'LastRotationDate',
      materialExpireTime: 'MaterialExpireTime',
      nextRotationDate: 'NextRotationDate',
      origin: 'Origin',
      primaryKeyVersion: 'PrimaryKeyVersion',
      protectionLevel: 'ProtectionLevel',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      creationDate: 'string',
      creator: 'string',
      DKMSInstanceId: 'string',
      deleteDate: 'string',
      deletionProtection: 'string',
      deletionProtectionDescription: 'string',
      description: 'string',
      keyId: 'string',
      keySpec: 'string',
      keyState: 'string',
      keyUsage: 'string',
      lastRotationDate: 'string',
      materialExpireTime: 'string',
      nextRotationDate: 'string',
      origin: 'string',
      primaryKeyVersion: 'string',
      protectionLevel: 'string',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionResponseBodyKeyVersion extends $tea.Model {
  creationDate?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBodyTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBodyTags extends $tea.Model {
  tag?: DescribeSecretResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSecretResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc extends $tea.Model {
  regionId?: string;
  vSwitchId?: string;
  vpcId?: string;
  vpcOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBodyKmsInstanceBindVpcs extends $tea.Model {
  bindVpc?: GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc[];
  static names(): { [key: string]: string } {
    return {
      bindVpc: 'BindVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpc: { 'type': 'array', 'itemType': GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBodyKmsInstance extends $tea.Model {
  bindVpcs?: GetKmsInstanceResponseBodyKmsInstanceBindVpcs;
  caCertificateChainPem?: string;
  createTime?: string;
  endDate?: string;
  instanceId?: string;
  instanceName?: string;
  keyNum?: number;
  secretNum?: string;
  spec?: number;
  startDate?: string;
  status?: string;
  vpcId?: string;
  vpcNum?: number;
  vswitchIds?: string;
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      caCertificateChainPem: 'CaCertificateChainPem',
      createTime: 'CreateTime',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keyNum: 'KeyNum',
      secretNum: 'SecretNum',
      spec: 'Spec',
      startDate: 'StartDate',
      status: 'Status',
      vpcId: 'VpcId',
      vpcNum: 'VpcNum',
      vswitchIds: 'VswitchIds',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: GetKmsInstanceResponseBodyKmsInstanceBindVpcs,
      caCertificateChainPem: 'string',
      createTime: 'string',
      endDate: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keyNum: 'number',
      secretNum: 'string',
      spec: 'number',
      startDate: 'string',
      status: 'string',
      vpcId: 'string',
      vpcNum: 'number',
      vswitchIds: 'string',
      zoneIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponseBodyVersionStages extends $tea.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBodyAliasesAlias extends $tea.Model {
  aliasArn?: string;
  aliasName?: string;
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasArn: 'AliasArn',
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasArn: 'string',
      aliasName: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBodyAliases extends $tea.Model {
  alias?: ListAliasesResponseBodyAliasesAlias[];
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': ListAliasesResponseBodyAliasesAlias },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponseBodyAliasesAlias extends $tea.Model {
  aliasArn?: string;
  aliasName?: string;
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasArn: 'AliasArn',
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasArn: 'string',
      aliasName: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponseBodyAliases extends $tea.Model {
  alias?: ListAliasesByKeyIdResponseBodyAliasesAlias[];
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': ListAliasesByKeyIdResponseBodyAliasesAlias },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint extends $tea.Model {
  authenticationMethod?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationMethod: 'AuthenticationMethod',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationMethod: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponseBodyApplicationAccessPoints extends $tea.Model {
  applicationAccessPoint?: ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint[];
  static names(): { [key: string]: string } {
    return {
      applicationAccessPoint: 'ApplicationAccessPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessPoint: { 'type': 'array', 'itemType': ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientKeysResponseBodyClientKeys extends $tea.Model {
  aapName?: string;
  clientKeyId?: string;
  createTime?: string;
  keyAlgorithm?: string;
  keyOrigin?: string;
  notAfter?: string;
  notBefore?: string;
  publicKeyData?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
      clientKeyId: 'ClientKeyId',
      createTime: 'CreateTime',
      keyAlgorithm: 'KeyAlgorithm',
      keyOrigin: 'KeyOrigin',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      publicKeyData: 'PublicKeyData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
      clientKeyId: 'string',
      createTime: 'string',
      keyAlgorithm: 'string',
      keyOrigin: 'string',
      notAfter: 'string',
      notBefore: 'string',
      publicKeyData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponseBodyKeyVersionsKeyVersion extends $tea.Model {
  creationDate?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponseBodyKeyVersions extends $tea.Model {
  keyVersion?: ListKeyVersionsResponseBodyKeyVersionsKeyVersion[];
  static names(): { [key: string]: string } {
    return {
      keyVersion: 'KeyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersion: { 'type': 'array', 'itemType': ListKeyVersionsResponseBodyKeyVersionsKeyVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponseBodyKeysKey extends $tea.Model {
  keyArn?: string;
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyArn: 'KeyArn',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyArn: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponseBodyKeys extends $tea.Model {
  key?: ListKeysResponseBodyKeysKey[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': ListKeysResponseBodyKeysKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponseBodyKmsInstancesKmsInstance extends $tea.Model {
  kmsInstanceArn?: string;
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceArn: 'KmsInstanceArn',
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceArn: 'string',
      kmsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponseBodyKmsInstances extends $tea.Model {
  kmsInstance?: ListKmsInstancesResponseBodyKmsInstancesKmsInstance[];
  static names(): { [key: string]: string } {
    return {
      kmsInstance: 'KmsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstance: { 'type': 'array', 'itemType': ListKmsInstancesResponseBodyKmsInstancesKmsInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponseBodyNetworkRulesNetworkRule extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponseBodyNetworkRules extends $tea.Model {
  networkRule?: ListNetworkRulesResponseBodyNetworkRulesNetworkRule[];
  static names(): { [key: string]: string } {
    return {
      networkRule: 'NetworkRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRule: { 'type': 'array', 'itemType': ListNetworkRulesResponseBodyNetworkRulesNetworkRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPoliciesPolicy extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPolicies extends $tea.Model {
  policy?: ListPoliciesResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPoliciesPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBodyTagsTag extends $tea.Model {
  keyId?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBodyTags extends $tea.Model {
  tag?: ListResourceTagsResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListResourceTagsResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages extends $tea.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBodyVersionIdsVersionId extends $tea.Model {
  createTime?: string;
  versionId?: string;
  versionStages?: ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      versionId: 'string',
      versionStages: ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBodyVersionIds extends $tea.Model {
  versionId?: ListSecretVersionIdsResponseBodyVersionIdsVersionId[];
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: { 'type': 'array', 'itemType': ListSecretVersionIdsResponseBodyVersionIdsVersionId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretListSecretTagsTag extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretListSecretTags extends $tea.Model {
  tag?: ListSecretsResponseBodySecretListSecretTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListSecretsResponseBodySecretListSecretTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretListSecret extends $tea.Model {
  createTime?: string;
  plannedDeleteTime?: string;
  secretName?: string;
  secretType?: string;
  tags?: ListSecretsResponseBodySecretListSecretTags;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      plannedDeleteTime: 'PlannedDeleteTime',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      plannedDeleteTime: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: ListSecretsResponseBodySecretListSecretTags,
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretList extends $tea.Model {
  secret?: ListSecretsResponseBodySecretListSecret[];
  static names(): { [key: string]: string } {
    return {
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secret: { 'type': 'array', 'itemType': ListSecretsResponseBodySecretListSecret },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponseBodyVersionStages extends $tea.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRequestExtendedConfig extends $tea.Model {
  customData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretShrinkRequestExtendedConfig extends $tea.Model {
  customData?: string;
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {
  _client: SPI;

  constructor(config: $OpenApi.Config) {
    super(config);
    this._productId = "Kms";
    this._client = new GatewayClient();
    this._spi = this._client;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("kms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
    * This operation supports only asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table lists supported encryption algorithms. 
    * | KeySpec | Algorithm | Description | Maximum length in bytes |
    * | ------- | --------- | ----------- | ----------------------- |
    * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 256 |
    * | RSA_2048 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 256 |
    * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 384 |
    * | RSA_3072 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 384 |
    * | EC_SM2 | SM2PKE | SM2 public key encryption algorithm based on elliptic curves | 6144 |
    * In this example, the asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the decryption algorithm `RSAES_OAEP_SHA_1` are used to decrypt the ciphertext `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==`.
    *
    * @param request AsymmetricDecryptRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AsymmetricDecryptResponse
   */
  async asymmetricDecryptWithOptions(request: AsymmetricDecryptRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricDecryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsymmetricDecrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AsymmetricDecryptResponse>(await this.callApi(params, req, runtime), new AsymmetricDecryptResponse({}));
    } else {
      return $tea.cast<AsymmetricDecryptResponse>(await this.execute(params, req, runtime), new AsymmetricDecryptResponse({}));
    }

  }

  /**
    * This operation supports only asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table lists supported encryption algorithms. 
    * | KeySpec | Algorithm | Description | Maximum length in bytes |
    * | ------- | --------- | ----------- | ----------------------- |
    * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 256 |
    * | RSA_2048 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 256 |
    * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 384 |
    * | RSA_3072 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 384 |
    * | EC_SM2 | SM2PKE | SM2 public key encryption algorithm based on elliptic curves | 6144 |
    * In this example, the asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the decryption algorithm `RSAES_OAEP_SHA_1` are used to decrypt the ciphertext `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==`.
    *
    * @param request AsymmetricDecryptRequest
    * @return AsymmetricDecryptResponse
   */
  async asymmetricDecrypt(request: AsymmetricDecryptRequest): Promise<AsymmetricDecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricDecryptWithOptions(request, runtime);
  }

  /**
    * This operation is supported only for asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table lists the supported encryption algorithms: 
    * | KeySpec | Algorithm | Description | Maximum number of bytes that can be encrypted |
    * | ------- | --------- | ----------- | --------------------------------------------- |
    * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 190 |
    * | RSA_2048 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 214 |
    * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 318 |
    * | RSA_3072 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 342 |
    * | EC_SM2 | SM2PKE | SM2 public key encryption algorithm based on elliptic curves | 6047 |
    * You can use the asymmetric CMK whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the algorithm `RSAES_OAEP_SHA_1` to encrypt the plaintext `SGVsbG8gd29ybGQ=` based on the parameter settings provided in this topic.
    *
    * @param request AsymmetricEncryptRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AsymmetricEncryptResponse
   */
  async asymmetricEncryptWithOptions(request: AsymmetricEncryptRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricEncryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    if (!Util.isUnset(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsymmetricEncrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AsymmetricEncryptResponse>(await this.callApi(params, req, runtime), new AsymmetricEncryptResponse({}));
    } else {
      return $tea.cast<AsymmetricEncryptResponse>(await this.execute(params, req, runtime), new AsymmetricEncryptResponse({}));
    }

  }

  /**
    * This operation is supported only for asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table lists the supported encryption algorithms: 
    * | KeySpec | Algorithm | Description | Maximum number of bytes that can be encrypted |
    * | ------- | --------- | ----------- | --------------------------------------------- |
    * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 190 |
    * | RSA_2048 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 214 |
    * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 318 |
    * | RSA_3072 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 342 |
    * | EC_SM2 | SM2PKE | SM2 public key encryption algorithm based on elliptic curves | 6047 |
    * You can use the asymmetric CMK whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the algorithm `RSAES_OAEP_SHA_1` to encrypt the plaintext `SGVsbG8gd29ybGQ=` based on the parameter settings provided in this topic.
    *
    * @param request AsymmetricEncryptRequest
    * @return AsymmetricEncryptResponse
   */
  async asymmetricEncrypt(request: AsymmetricEncryptRequest): Promise<AsymmetricEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricEncryptWithOptions(request, runtime);
  }

  /**
    * Generates a signature by using an asymmetric key.
    *
    * @param request AsymmetricSignRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AsymmetricSignResponse
   */
  async asymmetricSignWithOptions(request: AsymmetricSignRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricSignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsymmetricSign",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AsymmetricSignResponse>(await this.callApi(params, req, runtime), new AsymmetricSignResponse({}));
    } else {
      return $tea.cast<AsymmetricSignResponse>(await this.execute(params, req, runtime), new AsymmetricSignResponse({}));
    }

  }

  /**
    * Generates a signature by using an asymmetric key.
    *
    * @param request AsymmetricSignRequest
    * @return AsymmetricSignResponse
   */
  async asymmetricSign(request: AsymmetricSignRequest): Promise<AsymmetricSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricSignWithOptions(request, runtime);
  }

  /**
    * This operation supports only asymmetric keys for which the **Usage** parameter is set to **SIGN/VERIFY**. The following table describes the supported signature algorithms. 
    * | KeySpec | Algorithm | Description |
    * | ------- | --------- | ----------- |
    * | RSA_2048 | RSA_PSS_SHA_256 | RSASSA-PSS using SHA-256 and MGF1 with SHA-256 |
    * | RSA_2048 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256 |
    * | RSA_3072 | RSA_PSS_SHA_256 | RSASSA-PSS using SHA-256 and MGF1 with SHA-256 |
    * | RSA_3072 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256 |
    * | EC_P256 | ECDSA_SHA_256 | ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest |
    * | EC_P256K | ECDSA_SHA_256 | ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest |
    * | EC_SM2 | SM2DSA | SM2 elliptic curve public key encryption algorithm |
    * >  When you calculate the SM2 signature based on GB/T 32918, the **Digest** parameter is used to calculate the digest value of the combination of Z(A) and M, rather than the SM3 digest value. M indicates the original message to be signed. Z(A) indicates the hash value for User A. The hash value is defined in GB/T 32918.  In this example, the asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the signature algorithm RSA_PSS_SHA_256 are used to verify the signature `M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==` of the digest `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw=`.
    *
    * @param request AsymmetricVerifyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return AsymmetricVerifyResponse
   */
  async asymmetricVerifyWithOptions(request: AsymmetricVerifyRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsymmetricVerify",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AsymmetricVerifyResponse>(await this.callApi(params, req, runtime), new AsymmetricVerifyResponse({}));
    } else {
      return $tea.cast<AsymmetricVerifyResponse>(await this.execute(params, req, runtime), new AsymmetricVerifyResponse({}));
    }

  }

  /**
    * This operation supports only asymmetric keys for which the **Usage** parameter is set to **SIGN/VERIFY**. The following table describes the supported signature algorithms. 
    * | KeySpec | Algorithm | Description |
    * | ------- | --------- | ----------- |
    * | RSA_2048 | RSA_PSS_SHA_256 | RSASSA-PSS using SHA-256 and MGF1 with SHA-256 |
    * | RSA_2048 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256 |
    * | RSA_3072 | RSA_PSS_SHA_256 | RSASSA-PSS using SHA-256 and MGF1 with SHA-256 |
    * | RSA_3072 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256 |
    * | EC_P256 | ECDSA_SHA_256 | ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest |
    * | EC_P256K | ECDSA_SHA_256 | ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest |
    * | EC_SM2 | SM2DSA | SM2 elliptic curve public key encryption algorithm |
    * >  When you calculate the SM2 signature based on GB/T 32918, the **Digest** parameter is used to calculate the digest value of the combination of Z(A) and M, rather than the SM3 digest value. M indicates the original message to be signed. Z(A) indicates the hash value for User A. The hash value is defined in GB/T 32918.  In this example, the asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the signature algorithm RSA_PSS_SHA_256 are used to verify the signature `M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==` of the digest `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw=`.
    *
    * @param request AsymmetricVerifyRequest
    * @return AsymmetricVerifyResponse
   */
  async asymmetricVerify(request: AsymmetricVerifyRequest): Promise<AsymmetricVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricVerifyWithOptions(request, runtime);
  }

  /**
    * If the deletion task of a CMK is canceled, the CMK returns to the Enabled state.
    *
    * @param request CancelKeyDeletionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CancelKeyDeletionResponse
   */
  async cancelKeyDeletionWithOptions(request: CancelKeyDeletionRequest, runtime: $Util.RuntimeOptions): Promise<CancelKeyDeletionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelKeyDeletion",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CancelKeyDeletionResponse>(await this.callApi(params, req, runtime), new CancelKeyDeletionResponse({}));
    } else {
      return $tea.cast<CancelKeyDeletionResponse>(await this.execute(params, req, runtime), new CancelKeyDeletionResponse({}));
    }

  }

  /**
    * If the deletion task of a CMK is canceled, the CMK returns to the Enabled state.
    *
    * @param request CancelKeyDeletionRequest
    * @return CancelKeyDeletionResponse
   */
  async cancelKeyDeletion(request: CancelKeyDeletionRequest): Promise<CancelKeyDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelKeyDeletionWithOptions(request, runtime);
  }

  /**
    * Limit: The encryption algorithm in the request parameters must match the key type. 
    * The following table describes the mapping between encryption algorithms and key types.
    * | Algorithm | Key Spec |
    * | --------- | -------- |
    * | RSAES_OAEP_SHA_1 | RSA_2048 |
    * | RSAES_OAEP_SHA_256 | RSA_2048 |
    * | SM2PKE | EC_SM2 |
    * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the encryption algorithm `RSAES_OAEP_SHA_256` are used to decrypt the data `ZOyIygCyaOW6Gj****MlNKiuyjfzw=`.
    *
    * @param request CertificatePrivateKeyDecryptRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CertificatePrivateKeyDecryptResponse
   */
  async certificatePrivateKeyDecryptWithOptions(request: CertificatePrivateKeyDecryptRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePrivateKeyDecryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CertificatePrivateKeyDecrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CertificatePrivateKeyDecryptResponse>(await this.callApi(params, req, runtime), new CertificatePrivateKeyDecryptResponse({}));
    } else {
      return $tea.cast<CertificatePrivateKeyDecryptResponse>(await this.execute(params, req, runtime), new CertificatePrivateKeyDecryptResponse({}));
    }

  }

  /**
    * Limit: The encryption algorithm in the request parameters must match the key type. 
    * The following table describes the mapping between encryption algorithms and key types.
    * | Algorithm | Key Spec |
    * | --------- | -------- |
    * | RSAES_OAEP_SHA_1 | RSA_2048 |
    * | RSAES_OAEP_SHA_256 | RSA_2048 |
    * | SM2PKE | EC_SM2 |
    * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the encryption algorithm `RSAES_OAEP_SHA_256` are used to decrypt the data `ZOyIygCyaOW6Gj****MlNKiuyjfzw=`.
    *
    * @param request CertificatePrivateKeyDecryptRequest
    * @return CertificatePrivateKeyDecryptResponse
   */
  async certificatePrivateKeyDecrypt(request: CertificatePrivateKeyDecryptRequest): Promise<CertificatePrivateKeyDecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePrivateKeyDecryptWithOptions(request, runtime);
  }

  /**
    * The signature algorithm in the request parameters must match the key type. The following table describes the mapping between signature algorithms and key types.  
    * | Algorithm | Key Spec |
    * | --------- | -------- |
    * | RSA_PKCS1_SHA_256 | RSA_2048 |
    * | RSA_PSS_SHA_256 | RSA_2048 |
    * | ECDSA_SHA_256 | EC_P256 |
    * | SM2DSA | EC_SM2 |
    * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the signature algorithm `ECDSA_SHA_256` are used to generate a signature for the raw data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
    *
    * @param request CertificatePrivateKeySignRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CertificatePrivateKeySignResponse
   */
  async certificatePrivateKeySignWithOptions(request: CertificatePrivateKeySignRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePrivateKeySignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CertificatePrivateKeySign",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CertificatePrivateKeySignResponse>(await this.callApi(params, req, runtime), new CertificatePrivateKeySignResponse({}));
    } else {
      return $tea.cast<CertificatePrivateKeySignResponse>(await this.execute(params, req, runtime), new CertificatePrivateKeySignResponse({}));
    }

  }

  /**
    * The signature algorithm in the request parameters must match the key type. The following table describes the mapping between signature algorithms and key types.  
    * | Algorithm | Key Spec |
    * | --------- | -------- |
    * | RSA_PKCS1_SHA_256 | RSA_2048 |
    * | RSA_PSS_SHA_256 | RSA_2048 |
    * | ECDSA_SHA_256 | EC_P256 |
    * | SM2DSA | EC_SM2 |
    * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the signature algorithm `ECDSA_SHA_256` are used to generate a signature for the raw data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
    *
    * @param request CertificatePrivateKeySignRequest
    * @return CertificatePrivateKeySignResponse
   */
  async certificatePrivateKeySign(request: CertificatePrivateKeySignRequest): Promise<CertificatePrivateKeySignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePrivateKeySignWithOptions(request, runtime);
  }

  /**
    * Limit: The encryption algorithm in the request parameters must match the key type. 
    * The following table describes the mapping between encryption algorithms and key types.
    * | Algorithm | Key Spec |
    * | --------- | -------- |
    * | RSAES_OAEP_SHA_1 | RSA_2048 |
    * | RSAES_OAEP_SHA_256 | RSA_2048 |
    * | SM2PKE | EC_SM2 |
    * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the encryption algorithm `RSAES_OAEP_SHA_256` are used to encrypt the data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
    *
    * @param request CertificatePublicKeyEncryptRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CertificatePublicKeyEncryptResponse
   */
  async certificatePublicKeyEncryptWithOptions(request: CertificatePublicKeyEncryptRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePublicKeyEncryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CertificatePublicKeyEncrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CertificatePublicKeyEncryptResponse>(await this.callApi(params, req, runtime), new CertificatePublicKeyEncryptResponse({}));
    } else {
      return $tea.cast<CertificatePublicKeyEncryptResponse>(await this.execute(params, req, runtime), new CertificatePublicKeyEncryptResponse({}));
    }

  }

  /**
    * Limit: The encryption algorithm in the request parameters must match the key type. 
    * The following table describes the mapping between encryption algorithms and key types.
    * | Algorithm | Key Spec |
    * | --------- | -------- |
    * | RSAES_OAEP_SHA_1 | RSA_2048 |
    * | RSAES_OAEP_SHA_256 | RSA_2048 |
    * | SM2PKE | EC_SM2 |
    * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the encryption algorithm `RSAES_OAEP_SHA_256` are used to encrypt the data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
    *
    * @param request CertificatePublicKeyEncryptRequest
    * @return CertificatePublicKeyEncryptResponse
   */
  async certificatePublicKeyEncrypt(request: CertificatePublicKeyEncryptRequest): Promise<CertificatePublicKeyEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePublicKeyEncryptWithOptions(request, runtime);
  }

  /**
    * The signature algorithm in the request parameters must match the key type. The following table describes the mapping between signature algorithms and key types.  
    * | Algorithm | Key Spec |
    * | --------- | -------- |
    * | RSA_PKCS1_SHA_256 | RSA_2048 |
    * | RSA_PSS_SHA_256 | RSA_2048 |
    * | ECDSA_SHA_256 | EC_P256 |
    * | SM2DSA | EC_SM2 |
    * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the signature algorithm `ECDSA_SHA_256` are used to verify the digital signature `ZOyIygCyaOW6Gj****MlNKiuyjfzw=` of the raw data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
    *
    * @param request CertificatePublicKeyVerifyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CertificatePublicKeyVerifyResponse
   */
  async certificatePublicKeyVerifyWithOptions(request: CertificatePublicKeyVerifyRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePublicKeyVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.signatureValue)) {
      query["SignatureValue"] = request.signatureValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CertificatePublicKeyVerify",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CertificatePublicKeyVerifyResponse>(await this.callApi(params, req, runtime), new CertificatePublicKeyVerifyResponse({}));
    } else {
      return $tea.cast<CertificatePublicKeyVerifyResponse>(await this.execute(params, req, runtime), new CertificatePublicKeyVerifyResponse({}));
    }

  }

  /**
    * The signature algorithm in the request parameters must match the key type. The following table describes the mapping between signature algorithms and key types.  
    * | Algorithm | Key Spec |
    * | --------- | -------- |
    * | RSA_PKCS1_SHA_256 | RSA_2048 |
    * | RSA_PSS_SHA_256 | RSA_2048 |
    * | ECDSA_SHA_256 | EC_P256 |
    * | SM2DSA | EC_SM2 |
    * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the signature algorithm `ECDSA_SHA_256` are used to verify the digital signature `ZOyIygCyaOW6Gj****MlNKiuyjfzw=` of the raw data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
    *
    * @param request CertificatePublicKeyVerifyRequest
    * @return CertificatePublicKeyVerifyResponse
   */
  async certificatePublicKeyVerify(request: CertificatePublicKeyVerifyRequest): Promise<CertificatePublicKeyVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePublicKeyVerifyWithOptions(request, runtime);
  }

  /**
    * ### [](#)Limits
    * You can enable only instances of the software key management type. You cannot enable instances of the hardware key management type.
    *
    * @param request ConnectKmsInstanceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ConnectKmsInstanceResponse
   */
  async connectKmsInstanceWithOptions(request: ConnectKmsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConnectKmsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.KMProvider)) {
      query["KMProvider"] = request.KMProvider;
    }

    if (!Util.isUnset(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneIds)) {
      query["ZoneIds"] = request.zoneIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConnectKmsInstance",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ConnectKmsInstanceResponse>(await this.callApi(params, req, runtime), new ConnectKmsInstanceResponse({}));
    } else {
      return $tea.cast<ConnectKmsInstanceResponse>(await this.execute(params, req, runtime), new ConnectKmsInstanceResponse({}));
    }

  }

  /**
    * ### [](#)Limits
    * You can enable only instances of the software key management type. You cannot enable instances of the hardware key management type.
    *
    * @param request ConnectKmsInstanceRequest
    * @return ConnectKmsInstanceResponse
   */
  async connectKmsInstance(request: ConnectKmsInstanceRequest): Promise<ConnectKmsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.connectKmsInstanceWithOptions(request, runtime);
  }

  /**
    * *   Each alias can be bound to only one CMK at a time.
    * *   The aliases of CMKs in the same region must be unique.
    * In this topic, an alias named `alias/example` is created for a CMK named `7906979c-8e06-46a2-be2d-68e3ccbc****`.
    *
    * @param request CreateAliasRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateAliasResponse
   */
  async createAliasWithOptions(request: CreateAliasRequest, runtime: $Util.RuntimeOptions): Promise<CreateAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlias",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateAliasResponse>(await this.callApi(params, req, runtime), new CreateAliasResponse({}));
    } else {
      return $tea.cast<CreateAliasResponse>(await this.execute(params, req, runtime), new CreateAliasResponse({}));
    }

  }

  /**
    * *   Each alias can be bound to only one CMK at a time.
    * *   The aliases of CMKs in the same region must be unique.
    * In this topic, an alias named `alias/example` is created for a CMK named `7906979c-8e06-46a2-be2d-68e3ccbc****`.
    *
    * @param request CreateAliasRequest
    * @return CreateAliasResponse
   */
  async createAlias(request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAliasWithOptions(request, runtime);
  }

  /**
    * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based AAP:
    * 1.Create a network access rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access KMS. For more information, see [CreateNetworkRule](~~2539407~~).
    * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind network access rules to the keys and secrets. For more information, see [CreatePolicy](~~2539454~~).
    * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. This topic describes how to create an AAP.
    * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](~~2539509~~).
    *
    * @param request CreateApplicationAccessPointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateApplicationAccessPointResponse
   */
  async createApplicationAccessPointWithOptions(request: CreateApplicationAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationMethod)) {
      query["AuthenticationMethod"] = request.authenticationMethod;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policies)) {
      query["Policies"] = request.policies;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationAccessPoint",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new CreateApplicationAccessPointResponse({}));
    } else {
      return $tea.cast<CreateApplicationAccessPointResponse>(await this.execute(params, req, runtime), new CreateApplicationAccessPointResponse({}));
    }

  }

  /**
    * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based AAP:
    * 1.Create a network access rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access KMS. For more information, see [CreateNetworkRule](~~2539407~~).
    * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind network access rules to the keys and secrets. For more information, see [CreatePolicy](~~2539454~~).
    * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. This topic describes how to create an AAP.
    * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](~~2539509~~).
    *
    * @param request CreateApplicationAccessPointRequest
    * @return CreateApplicationAccessPointResponse
   */
  async createApplicationAccessPoint(request: CreateApplicationAccessPointRequest): Promise<CreateApplicationAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationAccessPointWithOptions(request, runtime);
  }

  /**
    * To create a certificate, you must specify the type of the asymmetric key. Certificates Manager generates a private key and returns a certificate signing request (CSR). Submit the CSR in the Privacy Enhanced Mail (PEM) format to a certificate authority (CA) to obtain the formal certificate and certificate chain. Then, call the [UploadCertificate](~~212136~~) operation to import the certificate into Certificates Manager.
    * In this example, a certificate is created and the CSR is obtained.
    *
    * @param tmpReq CreateCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCertificateResponse
   */
  async createCertificateWithOptions(tmpReq: CreateCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCertificateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.subjectAlternativeNames)) {
      request.subjectAlternativeNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subjectAlternativeNames, "SubjectAlternativeNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.exportablePrivateKey)) {
      query["ExportablePrivateKey"] = request.exportablePrivateKey;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.subjectAlternativeNamesShrink)) {
      query["SubjectAlternativeNames"] = request.subjectAlternativeNamesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateCertificateResponse>(await this.callApi(params, req, runtime), new CreateCertificateResponse({}));
    } else {
      return $tea.cast<CreateCertificateResponse>(await this.execute(params, req, runtime), new CreateCertificateResponse({}));
    }

  }

  /**
    * To create a certificate, you must specify the type of the asymmetric key. Certificates Manager generates a private key and returns a certificate signing request (CSR). Submit the CSR in the Privacy Enhanced Mail (PEM) format to a certificate authority (CA) to obtain the formal certificate and certificate chain. Then, call the [UploadCertificate](~~212136~~) operation to import the certificate into Certificates Manager.
    * In this example, a certificate is created and the CSR is obtained.
    *
    * @param request CreateCertificateRequest
    * @return CreateCertificateResponse
   */
  async createCertificate(request: CreateCertificateRequest): Promise<CreateCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithOptions(request, runtime);
  }

  /**
    * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based application access point (AAP):
    * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance. For more information, see [CreateNetworkRule](~~2539407~~).
    * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets. For more information, see [CreatePolicy](~~2539454~~).
    * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](~~2539467~~).
    * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP.
    * ### Precautions
    * A client key has a validity period. After a client key expires, applications into which the client key is integrated cannot access the required KMS instance. You must replace the client key before the client key expires. We recommend that you delete the expired client key in KMS after the new client key is used.
    *
    * @param request CreateClientKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateClientKeyResponse
   */
  async createClientKeyWithOptions(request: CreateClientKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aapName)) {
      query["AapName"] = request.aapName;
    }

    if (!Util.isUnset(request.notAfter)) {
      query["NotAfter"] = request.notAfter;
    }

    if (!Util.isUnset(request.notBefore)) {
      query["NotBefore"] = request.notBefore;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateClientKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateClientKeyResponse>(await this.callApi(params, req, runtime), new CreateClientKeyResponse({}));
    } else {
      return $tea.cast<CreateClientKeyResponse>(await this.execute(params, req, runtime), new CreateClientKeyResponse({}));
    }

  }

  /**
    * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based application access point (AAP):
    * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance. For more information, see [CreateNetworkRule](~~2539407~~).
    * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets. For more information, see [CreatePolicy](~~2539454~~).
    * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](~~2539467~~).
    * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP.
    * ### Precautions
    * A client key has a validity period. After a client key expires, applications into which the client key is integrated cannot access the required KMS instance. You must replace the client key before the client key expires. We recommend that you delete the expired client key in KMS after the new client key is used.
    *
    * @param request CreateClientKeyRequest
    * @return CreateClientKeyResponse
   */
  async createClientKey(request: CreateClientKeyRequest): Promise<CreateClientKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientKeyWithOptions(request, runtime);
  }

  /**
    * KMS supports common symmetric keys and asymmetric keys. For more information, see [Key types and specifications](~~480161~~).
    *
    * @param request CreateKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateKeyResponse
   */
  async createKeyWithOptions(request: CreateKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DKMSInstanceId)) {
      query["DKMSInstanceId"] = request.DKMSInstanceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.keyUsage)) {
      query["KeyUsage"] = request.keyUsage;
    }

    if (!Util.isUnset(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.protectionLevel)) {
      query["ProtectionLevel"] = request.protectionLevel;
    }

    if (!Util.isUnset(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateKeyResponse>(await this.callApi(params, req, runtime), new CreateKeyResponse({}));
    } else {
      return $tea.cast<CreateKeyResponse>(await this.execute(params, req, runtime), new CreateKeyResponse({}));
    }

  }

  /**
    * KMS supports common symmetric keys and asymmetric keys. For more information, see [Key types and specifications](~~480161~~).
    *
    * @param request CreateKeyRequest
    * @return CreateKeyResponse
   */
  async createKey(request: CreateKeyRequest): Promise<CreateKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyWithOptions(request, runtime);
  }

  /**
    * *   You can create a version only for an asymmetric CMK that is in the Enabled state. You can call the [CreateKey](~~28947~~) operation to create an asymmetric CMK and the [DescribeKey](~~28952~~) operation to query the status of the CMK. The status is specified by the KeyState parameter.
    * *   The minimum interval for creating a version of the same CMK is seven days. You can call the [DescribeKey](~~28952~~) operation to query the time when the last version of a CMK was created. The time is specified by the LastRotationDate parameter.
    * *   If a CMK is in a private key store, you cannot create a version for the CMK.
    * *   You can create a maximum of 50 versions for a CMK in the same region.
    * You can create a version for the CMK whose ID is `0b30658a-ed1a-4922-b8f7-a673ca9c****` by using the parameter settings provided in this topic.
    *
    * @param request CreateKeyVersionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateKeyVersionResponse
   */
  async createKeyVersionWithOptions(request: CreateKeyVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKeyVersion",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateKeyVersionResponse>(await this.callApi(params, req, runtime), new CreateKeyVersionResponse({}));
    } else {
      return $tea.cast<CreateKeyVersionResponse>(await this.execute(params, req, runtime), new CreateKeyVersionResponse({}));
    }

  }

  /**
    * *   You can create a version only for an asymmetric CMK that is in the Enabled state. You can call the [CreateKey](~~28947~~) operation to create an asymmetric CMK and the [DescribeKey](~~28952~~) operation to query the status of the CMK. The status is specified by the KeyState parameter.
    * *   The minimum interval for creating a version of the same CMK is seven days. You can call the [DescribeKey](~~28952~~) operation to query the time when the last version of a CMK was created. The time is specified by the LastRotationDate parameter.
    * *   If a CMK is in a private key store, you cannot create a version for the CMK.
    * *   You can create a maximum of 50 versions for a CMK in the same region.
    * You can create a version for the CMK whose ID is `0b30658a-ed1a-4922-b8f7-a673ca9c****` by using the parameter settings provided in this topic.
    *
    * @param request CreateKeyVersionRequest
    * @return CreateKeyVersionResponse
   */
  async createKeyVersion(request: CreateKeyVersionRequest): Promise<CreateKeyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyVersionWithOptions(request, runtime);
  }

  /**
    * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a KMS instance. The following process shows how to create a client key-based application access point (AAP):
    * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance.
    * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets. For more information, see [CreatePolicy](~~2539454~~).
    * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](~~2539467~~).
    * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](~~2539509~~).
    *
    * @param request CreateNetworkRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateNetworkRuleResponse
   */
  async createNetworkRuleWithOptions(request: CreateNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourcePrivateIp)) {
      query["SourcePrivateIp"] = request.sourcePrivateIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkRule",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateNetworkRuleResponse>(await this.callApi(params, req, runtime), new CreateNetworkRuleResponse({}));
    } else {
      return $tea.cast<CreateNetworkRuleResponse>(await this.execute(params, req, runtime), new CreateNetworkRuleResponse({}));
    }

  }

  /**
    * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a KMS instance. The following process shows how to create a client key-based application access point (AAP):
    * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance.
    * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets. For more information, see [CreatePolicy](~~2539454~~).
    * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](~~2539467~~).
    * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](~~2539509~~).
    *
    * @param request CreateNetworkRuleRequest
    * @return CreateNetworkRuleResponse
   */
  async createNetworkRule(request: CreateNetworkRuleRequest): Promise<CreateNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkRuleWithOptions(request, runtime);
  }

  /**
    * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based application access point (AAP):
    * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance. For more information, see [CreateNetworkRule](~~2539407~~).
    * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets.
    * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](~~2539467~~).
    * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](~~2539509~~).
    *
    * @param request CreatePolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreatePolicyResponse
   */
  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessControlRules)) {
      query["AccessControlRules"] = request.accessControlRules;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.kmsInstance)) {
      query["KmsInstance"] = request.kmsInstance;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.permissions)) {
      query["Permissions"] = request.permissions;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
    } else {
      return $tea.cast<CreatePolicyResponse>(await this.execute(params, req, runtime), new CreatePolicyResponse({}));
    }

  }

  /**
    * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based application access point (AAP):
    * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance. For more information, see [CreateNetworkRule](~~2539407~~).
    * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets.
    * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](~~2539467~~).
    * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](~~2539509~~).
    *
    * @param request CreatePolicyRequest
    * @return CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
    * The name of the secret.
    * The value must be 1 to 64 characters in length and can contain letters, digits, underscores (\\_), forward slashes (/), plus signs (+), equal signs (=), periods (.), hyphens (-), and at signs (@). The following list describes the name requirements for different types of secrets:
    * *   If the SecretType parameter is set to Generic or Rds, the name cannot start with `acs/`.
    * *   If the SecretType parameter is set to RAMCredentials, set the SecretName parameter to `$Auto`. In this case, KMS automatically generates a secret name that starts with `acs/ram/user/`. The name includes the display name of RAM user.
    * *   If the SecretType parameter is set to ECS, the name must start with `acs/ecs/`.
    *
    * @param tmpReq CreateSecretRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateSecretResponse
   */
  async createSecretWithOptions(tmpReq: CreateSecretRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecretResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSecretShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extendedConfig)) {
      request.extendedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendedConfig, "ExtendedConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.DKMSInstanceId)) {
      query["DKMSInstanceId"] = request.DKMSInstanceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!Util.isUnset(request.encryptionKeyId)) {
      query["EncryptionKeyId"] = request.encryptionKeyId;
    }

    if (!Util.isUnset(request.extendedConfigShrink)) {
      query["ExtendedConfig"] = request.extendedConfigShrink;
    }

    if (!Util.isUnset(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!Util.isUnset(request.secretData)) {
      query["SecretData"] = request.secretData;
    }

    if (!Util.isUnset(request.secretDataType)) {
      query["SecretDataType"] = request.secretDataType;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.secretType)) {
      query["SecretType"] = request.secretType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateSecretResponse>(await this.callApi(params, req, runtime), new CreateSecretResponse({}));
    } else {
      return $tea.cast<CreateSecretResponse>(await this.execute(params, req, runtime), new CreateSecretResponse({}));
    }

  }

  /**
    * The name of the secret.
    * The value must be 1 to 64 characters in length and can contain letters, digits, underscores (\\_), forward slashes (/), plus signs (+), equal signs (=), periods (.), hyphens (-), and at signs (@). The following list describes the name requirements for different types of secrets:
    * *   If the SecretType parameter is set to Generic or Rds, the name cannot start with `acs/`.
    * *   If the SecretType parameter is set to RAMCredentials, set the SecretName parameter to `$Auto`. In this case, KMS automatically generates a secret name that starts with `acs/ram/user/`. The name includes the display name of RAM user.
    * *   If the SecretType parameter is set to ECS, the name must start with `acs/ecs/`.
    *
    * @param request CreateSecretRequest
    * @return CreateSecretResponse
   */
  async createSecret(request: CreateSecretRequest): Promise<CreateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecretWithOptions(request, runtime);
  }

  async decryptWithOptions(tmpReq: DecryptRequest, runtime: $Util.RuntimeOptions): Promise<DecryptResponse> {
    Util.validateModel(tmpReq);
    let request = new DecryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Decrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DecryptResponse>(await this.callApi(params, req, runtime), new DecryptResponse({}));
    } else {
      return $tea.cast<DecryptResponse>(await this.execute(params, req, runtime), new DecryptResponse({}));
    }

  }

  async decrypt(request: DecryptRequest): Promise<DecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  async deleteAliasWithOptions(request: DeleteAliasRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlias",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteAliasResponse>(await this.callApi(params, req, runtime), new DeleteAliasResponse({}));
    } else {
      return $tea.cast<DeleteAliasResponse>(await this.execute(params, req, runtime), new DeleteAliasResponse({}));
    }

  }

  async deleteAlias(request: DeleteAliasRequest): Promise<DeleteAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAliasWithOptions(request, runtime);
  }

  /**
    * Before you delete an AAP, make sure that the AAP is no longer in use. If you delete an AAP that is in use, applications that use the AAP cannot access Key Management Service (KMS). Exercise caution when you delete an AAP.
    *
    * @param request DeleteApplicationAccessPointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteApplicationAccessPointResponse
   */
  async deleteApplicationAccessPointWithOptions(request: DeleteApplicationAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationAccessPoint",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new DeleteApplicationAccessPointResponse({}));
    } else {
      return $tea.cast<DeleteApplicationAccessPointResponse>(await this.execute(params, req, runtime), new DeleteApplicationAccessPointResponse({}));
    }

  }

  /**
    * Before you delete an AAP, make sure that the AAP is no longer in use. If you delete an AAP that is in use, applications that use the AAP cannot access Key Management Service (KMS). Exercise caution when you delete an AAP.
    *
    * @param request DeleteApplicationAccessPointRequest
    * @return DeleteApplicationAccessPointResponse
   */
  async deleteApplicationAccessPoint(request: DeleteApplicationAccessPointRequest): Promise<DeleteApplicationAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationAccessPointWithOptions(request, runtime);
  }

  /**
    * After the certificate and its private key and certificate chain are deleted, they cannot be restored. Proceed with caution.
    * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` and its private key and certificate chain are deleted.
    *
    * @param request DeleteCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCertificateResponse
   */
  async deleteCertificateWithOptions(request: DeleteCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteCertificateResponse>(await this.callApi(params, req, runtime), new DeleteCertificateResponse({}));
    } else {
      return $tea.cast<DeleteCertificateResponse>(await this.execute(params, req, runtime), new DeleteCertificateResponse({}));
    }

  }

  /**
    * After the certificate and its private key and certificate chain are deleted, they cannot be restored. Proceed with caution.
    * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` and its private key and certificate chain are deleted.
    *
    * @param request DeleteCertificateRequest
    * @return DeleteCertificateResponse
   */
  async deleteCertificate(request: DeleteCertificateRequest): Promise<DeleteCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCertificateWithOptions(request, runtime);
  }

  /**
    * Before you delete a client key, make sure that the client key is no longer in use. If you delete a client key that is in use, applications that use the client key cannot access Key Management Service (KMS). Exercise caution when you delete a client key.
    *
    * @param request DeleteClientKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteClientKeyResponse
   */
  async deleteClientKeyWithOptions(request: DeleteClientKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClientKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientKeyId)) {
      query["ClientKeyId"] = request.clientKeyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClientKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteClientKeyResponse>(await this.callApi(params, req, runtime), new DeleteClientKeyResponse({}));
    } else {
      return $tea.cast<DeleteClientKeyResponse>(await this.execute(params, req, runtime), new DeleteClientKeyResponse({}));
    }

  }

  /**
    * Before you delete a client key, make sure that the client key is no longer in use. If you delete a client key that is in use, applications that use the client key cannot access Key Management Service (KMS). Exercise caution when you delete a client key.
    *
    * @param request DeleteClientKeyRequest
    * @return DeleteClientKeyResponse
   */
  async deleteClientKey(request: DeleteClientKeyRequest): Promise<DeleteClientKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientKeyWithOptions(request, runtime);
  }

  /**
    * This operation does not delete the CMK that is created by using the key material.
    * If the CMK is in the PendingDeletion state, the state of the CMK and the scheduled deletion time do not change after you call this operation. If the CMK is not in the PendingDeletion state, the state of the CMK changes to PendingImport after you call this operation.
    * After you delete the key material, you can upload only the same key material into the CMK.
    *
    * @param request DeleteKeyMaterialRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteKeyMaterialResponse
   */
  async deleteKeyMaterialWithOptions(request: DeleteKeyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeyMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKeyMaterial",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteKeyMaterialResponse>(await this.callApi(params, req, runtime), new DeleteKeyMaterialResponse({}));
    } else {
      return $tea.cast<DeleteKeyMaterialResponse>(await this.execute(params, req, runtime), new DeleteKeyMaterialResponse({}));
    }

  }

  /**
    * This operation does not delete the CMK that is created by using the key material.
    * If the CMK is in the PendingDeletion state, the state of the CMK and the scheduled deletion time do not change after you call this operation. If the CMK is not in the PendingDeletion state, the state of the CMK changes to PendingImport after you call this operation.
    * After you delete the key material, you can upload only the same key material into the CMK.
    *
    * @param request DeleteKeyMaterialRequest
    * @return DeleteKeyMaterialResponse
   */
  async deleteKeyMaterial(request: DeleteKeyMaterialRequest): Promise<DeleteKeyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyMaterialWithOptions(request, runtime);
  }

  /**
    * Before you delete a network access rule, make sure that the network access rule is not bound to permission policies. Otherwise, related applications cannot access Key Management Service (KMS).
    *
    * @param request DeleteNetworkRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteNetworkRuleResponse
   */
  async deleteNetworkRuleWithOptions(request: DeleteNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkRule",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteNetworkRuleResponse>(await this.callApi(params, req, runtime), new DeleteNetworkRuleResponse({}));
    } else {
      return $tea.cast<DeleteNetworkRuleResponse>(await this.execute(params, req, runtime), new DeleteNetworkRuleResponse({}));
    }

  }

  /**
    * Before you delete a network access rule, make sure that the network access rule is not bound to permission policies. Otherwise, related applications cannot access Key Management Service (KMS).
    *
    * @param request DeleteNetworkRuleRequest
    * @return DeleteNetworkRuleResponse
   */
  async deleteNetworkRule(request: DeleteNetworkRuleRequest): Promise<DeleteNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkRuleWithOptions(request, runtime);
  }

  /**
    * Before you delete a permission policy, make sure that the permission policy is not associated with application access points (AAPs). Otherwise, related applications cannot access Key Management Service (KMS).
    *
    * @param request DeletePolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
    } else {
      return $tea.cast<DeletePolicyResponse>(await this.execute(params, req, runtime), new DeletePolicyResponse({}));
    }

  }

  /**
    * Before you delete a permission policy, make sure that the permission policy is not associated with application access points (AAPs). Otherwise, related applications cannot access Key Management Service (KMS).
    *
    * @param request DeletePolicyRequest
    * @return DeletePolicyResponse
   */
  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
    * If you call this operation without specifying a recovery period, the deleted secret can be recovered within 30 days.
    * If you specify a recovery period, the deleted secret can be recovered within the recovery period. You can also forcibly delete a secret. A forcibly deleted secret cannot be recovered.
    *
    * @param request DeleteSecretRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteSecretResponse
   */
  async deleteSecretWithOptions(request: DeleteSecretRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceDeleteWithoutRecovery)) {
      query["ForceDeleteWithoutRecovery"] = request.forceDeleteWithoutRecovery;
    }

    if (!Util.isUnset(request.recoveryWindowInDays)) {
      query["RecoveryWindowInDays"] = request.recoveryWindowInDays;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteSecretResponse>(await this.callApi(params, req, runtime), new DeleteSecretResponse({}));
    } else {
      return $tea.cast<DeleteSecretResponse>(await this.execute(params, req, runtime), new DeleteSecretResponse({}));
    }

  }

  /**
    * If you call this operation without specifying a recovery period, the deleted secret can be recovered within 30 days.
    * If you specify a recovery period, the deleted secret can be recovered within the recovery period. You can also forcibly delete a secret. A forcibly deleted secret cannot be recovered.
    *
    * @param request DeleteSecretRequest
    * @return DeleteSecretResponse
   */
  async deleteSecret(request: DeleteSecretRequest): Promise<DeleteSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretWithOptions(request, runtime);
  }

  async describeAccountKmsStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAccountKmsStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAccountKmsStatus",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeAccountKmsStatusResponse>(await this.callApi(params, req, runtime), new DescribeAccountKmsStatusResponse({}));
    } else {
      return $tea.cast<DescribeAccountKmsStatusResponse>(await this.execute(params, req, runtime), new DescribeAccountKmsStatusResponse({}));
    }

  }

  async describeAccountKmsStatus(): Promise<DescribeAccountKmsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountKmsStatusWithOptions(runtime);
  }

  async describeApplicationAccessPointWithOptions(request: DescribeApplicationAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationAccessPoint",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new DescribeApplicationAccessPointResponse({}));
    } else {
      return $tea.cast<DescribeApplicationAccessPointResponse>(await this.execute(params, req, runtime), new DescribeApplicationAccessPointResponse({}));
    }

  }

  async describeApplicationAccessPoint(request: DescribeApplicationAccessPointRequest): Promise<DescribeApplicationAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationAccessPointWithOptions(request, runtime);
  }

  /**
    * In this example, the information about the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate information includes the certificate ID, creation time, certificate issuer, validity period, serial number, and signature algorithm.
    *
    * @param request DescribeCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeCertificateResponse
   */
  async describeCertificateWithOptions(request: DescribeCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeCertificateResponse>(await this.callApi(params, req, runtime), new DescribeCertificateResponse({}));
    } else {
      return $tea.cast<DescribeCertificateResponse>(await this.execute(params, req, runtime), new DescribeCertificateResponse({}));
    }

  }

  /**
    * In this example, the information about the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate information includes the certificate ID, creation time, certificate issuer, validity period, serial number, and signature algorithm.
    *
    * @param request DescribeCertificateRequest
    * @return DescribeCertificateResponse
   */
  async describeCertificate(request: DescribeCertificateRequest): Promise<DescribeCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateWithOptions(request, runtime);
  }

  /**
    * You can query the information about the CMK `05754286-3ba2-4fa6-8d41-4323aca6****` by using parameter settings provided in this topic. The information includes the creator, creation time, status, and deletion protection status of the CMK.
    *
    * @param request DescribeKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeKeyResponse
   */
  async describeKeyWithOptions(request: DescribeKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeKeyResponse>(await this.callApi(params, req, runtime), new DescribeKeyResponse({}));
    } else {
      return $tea.cast<DescribeKeyResponse>(await this.execute(params, req, runtime), new DescribeKeyResponse({}));
    }

  }

  /**
    * You can query the information about the CMK `05754286-3ba2-4fa6-8d41-4323aca6****` by using parameter settings provided in this topic. The information includes the creator, creation time, status, and deletion protection status of the CMK.
    *
    * @param request DescribeKeyRequest
    * @return DescribeKeyResponse
   */
  async describeKey(request: DescribeKeyRequest): Promise<DescribeKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyWithOptions(request, runtime);
  }

  /**
    * This topic provides an example on how to query the information about a version of the CMK `1234abcd-12ab-34cd-56ef-12345678****`. The ID of the CMK version is `2ab1a983-7072-4bbc-a582-584b5bd8****`. The response shows that the creation time of the CMK version is `2016-03-25T10:42:40Z`.
    *
    * @param request DescribeKeyVersionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeKeyVersionResponse
   */
  async describeKeyVersionWithOptions(request: DescribeKeyVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKeyVersion",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeKeyVersionResponse>(await this.callApi(params, req, runtime), new DescribeKeyVersionResponse({}));
    } else {
      return $tea.cast<DescribeKeyVersionResponse>(await this.execute(params, req, runtime), new DescribeKeyVersionResponse({}));
    }

  }

  /**
    * This topic provides an example on how to query the information about a version of the CMK `1234abcd-12ab-34cd-56ef-12345678****`. The ID of the CMK version is `2ab1a983-7072-4bbc-a582-584b5bd8****`. The response shows that the creation time of the CMK version is `2016-03-25T10:42:40Z`.
    *
    * @param request DescribeKeyVersionRequest
    * @return DescribeKeyVersionResponse
   */
  async describeKeyVersion(request: DescribeKeyVersionRequest): Promise<DescribeKeyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyVersionWithOptions(request, runtime);
  }

  async describeNetworkRuleWithOptions(request: DescribeNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworkRule",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeNetworkRuleResponse>(await this.callApi(params, req, runtime), new DescribeNetworkRuleResponse({}));
    } else {
      return $tea.cast<DescribeNetworkRuleResponse>(await this.execute(params, req, runtime), new DescribeNetworkRuleResponse({}));
    }

  }

  async describeNetworkRule(request: DescribeNetworkRuleRequest): Promise<DescribeNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkRuleWithOptions(request, runtime);
  }

  async describePolicyWithOptions(request: DescribePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribePolicyResponse>(await this.callApi(params, req, runtime), new DescribePolicyResponse({}));
    } else {
      return $tea.cast<DescribePolicyResponse>(await this.execute(params, req, runtime), new DescribePolicyResponse({}));
    }

  }

  async describePolicy(request: DescribePolicyRequest): Promise<DescribePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyWithOptions(request, runtime);
  }

  /**
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms\\&api=DescribeRegions\\&type=RPC\\&version=2016-01-20)
    *
    * @param request DescribeRegionsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $tea.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
    * ## Debugging
    * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms\\&api=DescribeRegions\\&type=RPC\\&version=2016-01-20)
    *
    * @return DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
    * This operation returns the metadata of a secret. This operation does not return the secret value.
    * In this example, the metadata of the secret named `secret001` is queried.
    *
    * @param request DescribeSecretRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DescribeSecretResponse
   */
  async describeSecretWithOptions(request: DescribeSecretRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fetchTags)) {
      query["FetchTags"] = request.fetchTags;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeSecretResponse>(await this.callApi(params, req, runtime), new DescribeSecretResponse({}));
    } else {
      return $tea.cast<DescribeSecretResponse>(await this.execute(params, req, runtime), new DescribeSecretResponse({}));
    }

  }

  /**
    * This operation returns the metadata of a secret. This operation does not return the secret value.
    * In this example, the metadata of the secret named `secret001` is queried.
    *
    * @param request DescribeSecretRequest
    * @return DescribeSecretResponse
   */
  async describeSecret(request: DescribeSecretRequest): Promise<DescribeSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecretWithOptions(request, runtime);
  }

  /**
    * If a customer master key (CMK) is disabled, the ciphertext encrypted by using this CMK cannot be decrypted until you re-enable it. You can call the [EnableKey](~~35150~~) operation to enable the CMK.
    * In this example, the CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****` is disabled.
    *
    * @param request DisableKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return DisableKeyResponse
   */
  async disableKeyWithOptions(request: DisableKeyRequest, runtime: $Util.RuntimeOptions): Promise<DisableKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DisableKeyResponse>(await this.callApi(params, req, runtime), new DisableKeyResponse({}));
    } else {
      return $tea.cast<DisableKeyResponse>(await this.execute(params, req, runtime), new DisableKeyResponse({}));
    }

  }

  /**
    * If a customer master key (CMK) is disabled, the ciphertext encrypted by using this CMK cannot be decrypted until you re-enable it. You can call the [EnableKey](~~35150~~) operation to enable the CMK.
    * In this example, the CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****` is disabled.
    *
    * @param request DisableKeyRequest
    * @return DisableKeyResponse
   */
  async disableKey(request: DisableKeyRequest): Promise<DisableKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableKeyWithOptions(request, runtime);
  }

  async enableKeyWithOptions(request: EnableKeyRequest, runtime: $Util.RuntimeOptions): Promise<EnableKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<EnableKeyResponse>(await this.callApi(params, req, runtime), new EnableKeyResponse({}));
    } else {
      return $tea.cast<EnableKeyResponse>(await this.execute(params, req, runtime), new EnableKeyResponse({}));
    }

  }

  async enableKey(request: EnableKeyRequest): Promise<EnableKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableKeyWithOptions(request, runtime);
  }

  /**
    * *   KMS uses the primary version of a specified CMK to encrypt data.
    * *   Only data of 6 KB or less can be encrypted. For example, you can call this operation to encrypt RSA keys, database access passwords, or other sensitive information.
    * *   When you migrate encrypted data across regions, you can call this operation in the destination region to encrypt the plaintext of the data key that is used to encrypt the migrated data in the source region. This way, the ciphertext of the data key is generated in the destination region. You can also call the [Decrypt](~~28950~~) operation to decrypt the data key.
    *
    * @param tmpReq EncryptRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return EncryptResponse
   */
  async encryptWithOptions(tmpReq: EncryptRequest, runtime: $Util.RuntimeOptions): Promise<EncryptResponse> {
    Util.validateModel(tmpReq);
    let request = new EncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Encrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<EncryptResponse>(await this.callApi(params, req, runtime), new EncryptResponse({}));
    } else {
      return $tea.cast<EncryptResponse>(await this.execute(params, req, runtime), new EncryptResponse({}));
    }

  }

  /**
    * *   KMS uses the primary version of a specified CMK to encrypt data.
    * *   Only data of 6 KB or less can be encrypted. For example, you can call this operation to encrypt RSA keys, database access passwords, or other sensitive information.
    * *   When you migrate encrypted data across regions, you can call this operation in the destination region to encrypt the plaintext of the data key that is used to encrypt the migrated data in the source region. This way, the ciphertext of the data key is generated in the destination region. You can also call the [Decrypt](~~28950~~) operation to decrypt the data key.
    *
    * @param request EncryptRequest
    * @return EncryptResponse
   */
  async encrypt(request: EncryptRequest): Promise<EncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  /**
    * You can call the [GenerateDataKeyWithoutPlaintext](~~134043~~) operation to generate a data key, which is encrypted by a CMK. If you want to distribute the data key to other regions or cryptographic modules, you can call the ExportDataKey operation to use a public key to encrypt the data key.
    * Then, you can import the ciphertext of the data key to the cryptographic module where the private key is stored. This way, the data key is securely distributed from KMS to the cryptographic module. After the data key is imported to the cryptographic module, you can use it to encrypt or decrypt data.
    *
    * @param tmpReq ExportDataKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ExportDataKeyResponse
   */
  async exportDataKeyWithOptions(tmpReq: ExportDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<ExportDataKeyResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.publicKeyBlob)) {
      query["PublicKeyBlob"] = request.publicKeyBlob;
    }

    if (!Util.isUnset(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!Util.isUnset(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportDataKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ExportDataKeyResponse>(await this.callApi(params, req, runtime), new ExportDataKeyResponse({}));
    } else {
      return $tea.cast<ExportDataKeyResponse>(await this.execute(params, req, runtime), new ExportDataKeyResponse({}));
    }

  }

  /**
    * You can call the [GenerateDataKeyWithoutPlaintext](~~134043~~) operation to generate a data key, which is encrypted by a CMK. If you want to distribute the data key to other regions or cryptographic modules, you can call the ExportDataKey operation to use a public key to encrypt the data key.
    * Then, you can import the ciphertext of the data key to the cryptographic module where the private key is stored. This way, the data key is securely distributed from KMS to the cryptographic module. After the data key is imported to the cryptographic module, you can use it to encrypt or decrypt data.
    *
    * @param request ExportDataKeyRequest
    * @return ExportDataKeyResponse
   */
  async exportDataKey(request: ExportDataKeyRequest): Promise<ExportDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDataKeyWithOptions(request, runtime);
  }

  /**
    * We recommend that you perform the following steps to import your data key to a cryptographic module:
    * *   Call the GenerateAndExportDataKey operation to generate a data key and obtain both the ciphertext of the data key encrypted by using the CMK and that encrypted by using the public key.
    * *   Store the ciphertext of the data key encrypted by using the CMK in KMS Secrets Manager or in a storage service such as ApsaraDB. This ciphertext is used for backup and restoration.
    * *   Import the ciphertext of the data key encrypted by using the public key to the cryptographic module where the private key is stored. Then, you can use the data key to encrypt or decrypt data.
    * >  The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the data keys randomly generated by calling this operation. You must take note of the data keys and the returned ciphertext.
    *
    * @param tmpReq GenerateAndExportDataKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GenerateAndExportDataKeyResponse
   */
  async generateAndExportDataKeyWithOptions(tmpReq: GenerateAndExportDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAndExportDataKeyResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateAndExportDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    if (!Util.isUnset(request.publicKeyBlob)) {
      query["PublicKeyBlob"] = request.publicKeyBlob;
    }

    if (!Util.isUnset(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!Util.isUnset(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateAndExportDataKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GenerateAndExportDataKeyResponse>(await this.callApi(params, req, runtime), new GenerateAndExportDataKeyResponse({}));
    } else {
      return $tea.cast<GenerateAndExportDataKeyResponse>(await this.execute(params, req, runtime), new GenerateAndExportDataKeyResponse({}));
    }

  }

  /**
    * We recommend that you perform the following steps to import your data key to a cryptographic module:
    * *   Call the GenerateAndExportDataKey operation to generate a data key and obtain both the ciphertext of the data key encrypted by using the CMK and that encrypted by using the public key.
    * *   Store the ciphertext of the data key encrypted by using the CMK in KMS Secrets Manager or in a storage service such as ApsaraDB. This ciphertext is used for backup and restoration.
    * *   Import the ciphertext of the data key encrypted by using the public key to the cryptographic module where the private key is stored. Then, you can use the data key to encrypt or decrypt data.
    * >  The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the data keys randomly generated by calling this operation. You must take note of the data keys and the returned ciphertext.
    *
    * @param request GenerateAndExportDataKeyRequest
    * @return GenerateAndExportDataKeyResponse
   */
  async generateAndExportDataKey(request: GenerateAndExportDataKeyRequest): Promise<GenerateAndExportDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAndExportDataKeyWithOptions(request, runtime);
  }

  /**
    * This operation creates a random data key, encrypts the data key by using the specified customer master key (CMK), and returns the plaintext and ciphertext of the data key. You can use the plaintext of the data key to locally encrypt your data without using KMS and store the encrypted data together with the ciphertext of the data key. You can obtain the plaintext of the data key from the Plaintext parameter in the response and the ciphertext of the data key from the CiphertextBlob parameter in the response.
    * The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the generated data key. Therefore, you need to store the ciphertext of the data key in persistent storage.
    * We recommend that you locally encrypt data by performing the following steps:
    * 1\\. Call the GenerateDataKey operation.
    * 2\\. Use the plaintext of the data key that you obtain to locally encrypt data without using KMS. Then, delete the plaintext of the data key from the memory.
    * 3\\. Store the encrypted data together with the ciphertext of the data key that you obtain.
    * We recommend that you locally decrypt data by performing the following steps:
    * *   Call the [Decrypt](~~28950~~) operation to decrypt the locally stored ciphertext of the data key. The plaintext of data key is then returned.
    * *   Use the plaintext of the data key to locally decrypt data and then delete the plaintext of the data key from the memory.
    * In this example, a random data key is generated for the CMK whose ID is `7906979c-8e06-46a2-be2d-68e3ccbc****`.
    *
    * @param tmpReq GenerateDataKeyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GenerateDataKeyResponse
   */
  async generateDataKeyWithOptions(tmpReq: GenerateDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDataKeyResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDataKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GenerateDataKeyResponse>(await this.callApi(params, req, runtime), new GenerateDataKeyResponse({}));
    } else {
      return $tea.cast<GenerateDataKeyResponse>(await this.execute(params, req, runtime), new GenerateDataKeyResponse({}));
    }

  }

  /**
    * This operation creates a random data key, encrypts the data key by using the specified customer master key (CMK), and returns the plaintext and ciphertext of the data key. You can use the plaintext of the data key to locally encrypt your data without using KMS and store the encrypted data together with the ciphertext of the data key. You can obtain the plaintext of the data key from the Plaintext parameter in the response and the ciphertext of the data key from the CiphertextBlob parameter in the response.
    * The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the generated data key. Therefore, you need to store the ciphertext of the data key in persistent storage.
    * We recommend that you locally encrypt data by performing the following steps:
    * 1\\. Call the GenerateDataKey operation.
    * 2\\. Use the plaintext of the data key that you obtain to locally encrypt data without using KMS. Then, delete the plaintext of the data key from the memory.
    * 3\\. Store the encrypted data together with the ciphertext of the data key that you obtain.
    * We recommend that you locally decrypt data by performing the following steps:
    * *   Call the [Decrypt](~~28950~~) operation to decrypt the locally stored ciphertext of the data key. The plaintext of data key is then returned.
    * *   Use the plaintext of the data key to locally decrypt data and then delete the plaintext of the data key from the memory.
    * In this example, a random data key is generated for the CMK whose ID is `7906979c-8e06-46a2-be2d-68e3ccbc****`.
    *
    * @param request GenerateDataKeyRequest
    * @return GenerateDataKeyResponse
   */
  async generateDataKey(request: GenerateDataKeyRequest): Promise<GenerateDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDataKeyWithOptions(request, runtime);
  }

  /**
    * This operation creates a random data key, encrypts the data key by using a specific symmetric CMK, and returns the ciphertext of the data key. This operation serves the same purpose as the [GenerateDataKey](~~28948~~) operation. The only difference is that this operation does not return the plaintext of the data key.
    * The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the generated data key.
    * > * This operation applies to the scenario when you do not need to use the data key to immediately encrypt data. Before you can use the data key to encrypt data, you must call the [Decrypt](~~28950~~) operation to decrypt the ciphertext of the data key.
    * > * This operation is also suitable for a distributed system with different trust levels. For example, a system stores data in different partitions based on a preset trust policy. A module creates different partitions and generates different data keys for each partition in advance. This module is not involved in data production and consumption after it completes initialization of the control plane. This module is the key provider. When producing and consuming data, modules on the control plane obtain the ciphertext of the data key for a partition first. After decrypting the ciphertext of the data key, modules on the control plane use the plaintext of the data key to encrypt or decrypt data and then clear the plaintext of the data key from the memory. In such a system, the key provider does not need to obtain the plaintext of the data key. It only needs to have the permissions to call the GenerateDataKeyWithoutPlaintext operation. The data producers or consumers do not need to generate new data keys. They only need to have the permissions to call the Decrypt operation.
    *
    * @param tmpReq GenerateDataKeyWithoutPlaintextRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GenerateDataKeyWithoutPlaintextResponse
   */
  async generateDataKeyWithoutPlaintextWithOptions(tmpReq: GenerateDataKeyWithoutPlaintextRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDataKeyWithoutPlaintextResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateDataKeyWithoutPlaintextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDataKeyWithoutPlaintext",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GenerateDataKeyWithoutPlaintextResponse>(await this.callApi(params, req, runtime), new GenerateDataKeyWithoutPlaintextResponse({}));
    } else {
      return $tea.cast<GenerateDataKeyWithoutPlaintextResponse>(await this.execute(params, req, runtime), new GenerateDataKeyWithoutPlaintextResponse({}));
    }

  }

  /**
    * This operation creates a random data key, encrypts the data key by using a specific symmetric CMK, and returns the ciphertext of the data key. This operation serves the same purpose as the [GenerateDataKey](~~28948~~) operation. The only difference is that this operation does not return the plaintext of the data key.
    * The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the generated data key.
    * > * This operation applies to the scenario when you do not need to use the data key to immediately encrypt data. Before you can use the data key to encrypt data, you must call the [Decrypt](~~28950~~) operation to decrypt the ciphertext of the data key.
    * > * This operation is also suitable for a distributed system with different trust levels. For example, a system stores data in different partitions based on a preset trust policy. A module creates different partitions and generates different data keys for each partition in advance. This module is not involved in data production and consumption after it completes initialization of the control plane. This module is the key provider. When producing and consuming data, modules on the control plane obtain the ciphertext of the data key for a partition first. After decrypting the ciphertext of the data key, modules on the control plane use the plaintext of the data key to encrypt or decrypt data and then clear the plaintext of the data key from the memory. In such a system, the key provider does not need to obtain the plaintext of the data key. It only needs to have the permissions to call the GenerateDataKeyWithoutPlaintext operation. The data producers or consumers do not need to generate new data keys. They only need to have the permissions to call the Decrypt operation.
    *
    * @param request GenerateDataKeyWithoutPlaintextRequest
    * @return GenerateDataKeyWithoutPlaintextResponse
   */
  async generateDataKeyWithoutPlaintext(request: GenerateDataKeyWithoutPlaintextRequest): Promise<GenerateDataKeyWithoutPlaintextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDataKeyWithoutPlaintextWithOptions(request, runtime);
  }

  /**
    * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate, certificate chain, certificate ID, and certificate signing request (CSR) are returned.
    *
    * @param request GetCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetCertificateResponse
   */
  async getCertificateWithOptions(request: GetCertificateRequest, runtime: $Util.RuntimeOptions): Promise<GetCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetCertificateResponse>(await this.callApi(params, req, runtime), new GetCertificateResponse({}));
    } else {
      return $tea.cast<GetCertificateResponse>(await this.execute(params, req, runtime), new GetCertificateResponse({}));
    }

  }

  /**
    * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate, certificate chain, certificate ID, and certificate signing request (CSR) are returned.
    *
    * @param request GetCertificateRequest
    * @return GetCertificateResponse
   */
  async getCertificate(request: GetCertificateRequest): Promise<GetCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertificateWithOptions(request, runtime);
  }

  async getClientKeyWithOptions(request: GetClientKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetClientKeyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetClientKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetClientKeyResponse>(await this.callApi(params, req, runtime), new GetClientKeyResponse({}));
    } else {
      return $tea.cast<GetClientKeyResponse>(await this.execute(params, req, runtime), new GetClientKeyResponse({}));
    }

  }

  async getClientKey(request: GetClientKeyRequest): Promise<GetClientKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClientKeyWithOptions(request, runtime);
  }

  async getKmsInstanceWithOptions(request: GetKmsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetKmsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetKmsInstance",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetKmsInstanceResponse>(await this.callApi(params, req, runtime), new GetKmsInstanceResponse({}));
    } else {
      return $tea.cast<GetKmsInstanceResponse>(await this.execute(params, req, runtime), new GetKmsInstanceResponse({}));
    }

  }

  async getKmsInstance(request: GetKmsInstanceRequest): Promise<GetKmsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKmsInstanceWithOptions(request, runtime);
  }

  /**
    * The returned parameters can be used to call the [ImportKeyMaterial](https://www.alibabacloud.com/help/en/key-management-service/latest/importkeymaterial) operation.
    * - You can import key material only for CMKs whose Origin parameter is set to EXTERNAL.
    * - The public key and token that are returned by the GetParametersForImport operation must be used together. The public key and token can be used to import key material only for the CMK that is specified when you call the operation.
    * - The public key and token that are returned vary each time you call the GetParametersForImport operation.
    * - You must specify the type of the public key and the encryption algorithm that are used to encrypt key material. The following table lists the types of public keys and the encryption algorithms allowed for each type.   
    * | Public key type | Encryption algorithm | Description |
    * | --------------- | -------------------- | ----------- |
    * | RSA_2048 | RSAES_PKCS1_V1_5 
    * RSAES_OAEP_SHA_1 
    * RSAES_OAEP_SHA_256 | CMKs of all regions and all protection levels are supported. 
    * Dedicated Key Management Service (KMS) does not support RSAES_OAEP_SHA_1. |
    * | EC_SM2 | SM2PKE | CMKs whose ProtectionLevel is set to HSM are supported. The SM2 algorithm is developed and approved by the State Cryptography Administration of China. The SM2 algorithm can be used only to import key material for a CMK whose ProtectionLevel is set to HSM. You can use the SM2 algorithm only when you enable the Managed HSM feature for KMS in the Chinese mainland. For more information, see [Overview of Managed HSM](https://www.alibabacloud.com/help/en/key-management-service/latest/managed-hsm-overview). |
    * For more information, see [Import key material](https://www.alibabacloud.com/help/en/key-management-service/latest/import-key-material). This topic provides an example on how to query the parameters that are used to import key material for a CMK. The ID of the CMK is `1234abcd-12ab-34cd-56ef-12345678****`, the encryption algorithm is `RSAES_PKCS1_V1_5`, and the public key is of the `RSA_2048` type. The parameters that are returned include the ID of the CMK, the public key that is used to encrypt the key material, the token that is used to import the key material, and the time when the token expires.
    *
    * @param request GetParametersForImportRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetParametersForImportResponse
   */
  async getParametersForImportWithOptions(request: GetParametersForImportRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersForImportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!Util.isUnset(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetParametersForImport",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetParametersForImportResponse>(await this.callApi(params, req, runtime), new GetParametersForImportResponse({}));
    } else {
      return $tea.cast<GetParametersForImportResponse>(await this.execute(params, req, runtime), new GetParametersForImportResponse({}));
    }

  }

  /**
    * The returned parameters can be used to call the [ImportKeyMaterial](https://www.alibabacloud.com/help/en/key-management-service/latest/importkeymaterial) operation.
    * - You can import key material only for CMKs whose Origin parameter is set to EXTERNAL.
    * - The public key and token that are returned by the GetParametersForImport operation must be used together. The public key and token can be used to import key material only for the CMK that is specified when you call the operation.
    * - The public key and token that are returned vary each time you call the GetParametersForImport operation.
    * - You must specify the type of the public key and the encryption algorithm that are used to encrypt key material. The following table lists the types of public keys and the encryption algorithms allowed for each type.   
    * | Public key type | Encryption algorithm | Description |
    * | --------------- | -------------------- | ----------- |
    * | RSA_2048 | RSAES_PKCS1_V1_5 
    * RSAES_OAEP_SHA_1 
    * RSAES_OAEP_SHA_256 | CMKs of all regions and all protection levels are supported. 
    * Dedicated Key Management Service (KMS) does not support RSAES_OAEP_SHA_1. |
    * | EC_SM2 | SM2PKE | CMKs whose ProtectionLevel is set to HSM are supported. The SM2 algorithm is developed and approved by the State Cryptography Administration of China. The SM2 algorithm can be used only to import key material for a CMK whose ProtectionLevel is set to HSM. You can use the SM2 algorithm only when you enable the Managed HSM feature for KMS in the Chinese mainland. For more information, see [Overview of Managed HSM](https://www.alibabacloud.com/help/en/key-management-service/latest/managed-hsm-overview). |
    * For more information, see [Import key material](https://www.alibabacloud.com/help/en/key-management-service/latest/import-key-material). This topic provides an example on how to query the parameters that are used to import key material for a CMK. The ID of the CMK is `1234abcd-12ab-34cd-56ef-12345678****`, the encryption algorithm is `RSAES_PKCS1_V1_5`, and the public key is of the `RSA_2048` type. The parameters that are returned include the ID of the CMK, the public key that is used to encrypt the key material, the token that is used to import the key material, and the time when the token expires.
    *
    * @param request GetParametersForImportRequest
    * @return GetParametersForImportResponse
   */
  async getParametersForImport(request: GetParametersForImportRequest): Promise<GetParametersForImportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersForImportWithOptions(request, runtime);
  }

  async getPublicKeyWithOptions(request: GetPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublicKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetPublicKeyResponse>(await this.callApi(params, req, runtime), new GetPublicKeyResponse({}));
    } else {
      return $tea.cast<GetPublicKeyResponse>(await this.execute(params, req, runtime), new GetPublicKeyResponse({}));
    }

  }

  async getPublicKey(request: GetPublicKeyRequest): Promise<GetPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicKeyWithOptions(request, runtime);
  }

  async getRandomPasswordWithOptions(request: GetRandomPasswordRequest, runtime: $Util.RuntimeOptions): Promise<GetRandomPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.excludeCharacters)) {
      query["ExcludeCharacters"] = request.excludeCharacters;
    }

    if (!Util.isUnset(request.excludeLowercase)) {
      query["ExcludeLowercase"] = request.excludeLowercase;
    }

    if (!Util.isUnset(request.excludeNumbers)) {
      query["ExcludeNumbers"] = request.excludeNumbers;
    }

    if (!Util.isUnset(request.excludePunctuation)) {
      query["ExcludePunctuation"] = request.excludePunctuation;
    }

    if (!Util.isUnset(request.excludeUppercase)) {
      query["ExcludeUppercase"] = request.excludeUppercase;
    }

    if (!Util.isUnset(request.passwordLength)) {
      query["PasswordLength"] = request.passwordLength;
    }

    if (!Util.isUnset(request.requireEachIncludedType)) {
      query["RequireEachIncludedType"] = request.requireEachIncludedType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRandomPassword",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetRandomPasswordResponse>(await this.callApi(params, req, runtime), new GetRandomPasswordResponse({}));
    } else {
      return $tea.cast<GetRandomPasswordResponse>(await this.execute(params, req, runtime), new GetRandomPasswordResponse({}));
    }

  }

  async getRandomPassword(request: GetRandomPasswordRequest): Promise<GetRandomPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRandomPasswordWithOptions(request, runtime);
  }

  /**
    * If you do not specify a version number or stage label, Secrets Manager returns the secret value of the version marked with ACSCurrent.
    * If a customer master key (CMK) is specified to encrypt the secret value, you must also have the `kms:Decrypt` permission on the CMK to call the GetSecretValue operation.
    * In this example, the value of the secret named `secret001` is obtained. The secret value is returned in the `SecretData` parameter. The secret value is `testdata1`.
    *
    * @param request GetSecretValueRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSecretValueResponse
   */
  async getSecretValueWithOptions(request: GetSecretValueRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fetchExtendedConfig)) {
      query["FetchExtendedConfig"] = request.fetchExtendedConfig;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    if (!Util.isUnset(request.versionStage)) {
      query["VersionStage"] = request.versionStage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretValue",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetSecretValueResponse>(await this.callApi(params, req, runtime), new GetSecretValueResponse({}));
    } else {
      return $tea.cast<GetSecretValueResponse>(await this.execute(params, req, runtime), new GetSecretValueResponse({}));
    }

  }

  /**
    * If you do not specify a version number or stage label, Secrets Manager returns the secret value of the version marked with ACSCurrent.
    * If a customer master key (CMK) is specified to encrypt the secret value, you must also have the `kms:Decrypt` permission on the CMK to call the GetSecretValue operation.
    * In this example, the value of the secret named `secret001` is obtained. The secret value is returned in the `SecretData` parameter. The secret value is `testdata1`.
    *
    * @param request GetSecretValueRequest
    * @return GetSecretValueResponse
   */
  async getSecretValue(request: GetSecretValueRequest): Promise<GetSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretValueWithOptions(request, runtime);
  }

  /**
    * Call [CreateKey](~~28947~~) when creating a CMK, you can select its key material source as external. **Origin** set to **EXTERNAL**. This API is used to import the key material into the CMK.
    * *   To view the CMK **Origin**, see [DescribeKey](~~28952~~).
    * *   Before importing key material, you need to call the [GetParametersForImport](~~68621~~) obtain the parameters required to import the key material, including the public key and import token.
    * > *   The key type of the pair is **Aliyun\\_AES\\_256** the key material must be 256 bits. The key type must be **Aliyun\\_SM4** the CMK and key material must be 128 bits.
    * > *   You can set the expiration time for the key material, or you can set it to never expire.
    * > *   You can reimport the key material and reset the expiration time for the specified CMK at any time, but the same key material must be imported.
    * > *   After the imported key material expires or is deleted, the specified CMK is unavailable until the same key material are imported again.
    * > *   A Key material can be imported to multiple cmks, but any Data or Data Key encrypted by one CMK cannot be decrypted by another CMK.
    *
    * @param request ImportKeyMaterialRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ImportKeyMaterialResponse
   */
  async importKeyMaterialWithOptions(request: ImportKeyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeyMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.encryptedKeyMaterial)) {
      query["EncryptedKeyMaterial"] = request.encryptedKeyMaterial;
    }

    if (!Util.isUnset(request.importToken)) {
      query["ImportToken"] = request.importToken;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyMaterialExpireUnix)) {
      query["KeyMaterialExpireUnix"] = request.keyMaterialExpireUnix;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportKeyMaterial",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ImportKeyMaterialResponse>(await this.callApi(params, req, runtime), new ImportKeyMaterialResponse({}));
    } else {
      return $tea.cast<ImportKeyMaterialResponse>(await this.execute(params, req, runtime), new ImportKeyMaterialResponse({}));
    }

  }

  /**
    * Call [CreateKey](~~28947~~) when creating a CMK, you can select its key material source as external. **Origin** set to **EXTERNAL**. This API is used to import the key material into the CMK.
    * *   To view the CMK **Origin**, see [DescribeKey](~~28952~~).
    * *   Before importing key material, you need to call the [GetParametersForImport](~~68621~~) obtain the parameters required to import the key material, including the public key and import token.
    * > *   The key type of the pair is **Aliyun\\_AES\\_256** the key material must be 256 bits. The key type must be **Aliyun\\_SM4** the CMK and key material must be 128 bits.
    * > *   You can set the expiration time for the key material, or you can set it to never expire.
    * > *   You can reimport the key material and reset the expiration time for the specified CMK at any time, but the same key material must be imported.
    * > *   After the imported key material expires or is deleted, the specified CMK is unavailable until the same key material are imported again.
    * > *   A Key material can be imported to multiple cmks, but any Data or Data Key encrypted by one CMK cannot be decrypted by another CMK.
    *
    * @param request ImportKeyMaterialRequest
    * @return ImportKeyMaterialResponse
   */
  async importKeyMaterial(request: ImportKeyMaterialRequest): Promise<ImportKeyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyMaterialWithOptions(request, runtime);
  }

  async listAliasesWithOptions(request: ListAliasesRequest, runtime: $Util.RuntimeOptions): Promise<ListAliasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAliases",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListAliasesResponse>(await this.callApi(params, req, runtime), new ListAliasesResponse({}));
    } else {
      return $tea.cast<ListAliasesResponse>(await this.execute(params, req, runtime), new ListAliasesResponse({}));
    }

  }

  async listAliases(request: ListAliasesRequest): Promise<ListAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAliasesWithOptions(request, runtime);
  }

  async listAliasesByKeyIdWithOptions(request: ListAliasesByKeyIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAliasesByKeyIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAliasesByKeyId",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListAliasesByKeyIdResponse>(await this.callApi(params, req, runtime), new ListAliasesByKeyIdResponse({}));
    } else {
      return $tea.cast<ListAliasesByKeyIdResponse>(await this.execute(params, req, runtime), new ListAliasesByKeyIdResponse({}));
    }

  }

  async listAliasesByKeyId(request: ListAliasesByKeyIdRequest): Promise<ListAliasesByKeyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAliasesByKeyIdWithOptions(request, runtime);
  }

  async listApplicationAccessPointsWithOptions(request: ListApplicationAccessPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationAccessPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationAccessPoints",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListApplicationAccessPointsResponse>(await this.callApi(params, req, runtime), new ListApplicationAccessPointsResponse({}));
    } else {
      return $tea.cast<ListApplicationAccessPointsResponse>(await this.execute(params, req, runtime), new ListApplicationAccessPointsResponse({}));
    }

  }

  async listApplicationAccessPoints(request: ListApplicationAccessPointsRequest): Promise<ListApplicationAccessPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationAccessPointsWithOptions(request, runtime);
  }

  async listClientKeysWithOptions(request: ListClientKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListClientKeysResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClientKeys",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListClientKeysResponse>(await this.callApi(params, req, runtime), new ListClientKeysResponse({}));
    } else {
      return $tea.cast<ListClientKeysResponse>(await this.execute(params, req, runtime), new ListClientKeysResponse({}));
    }

  }

  async listClientKeys(request: ListClientKeysRequest): Promise<ListClientKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientKeysWithOptions(request, runtime);
  }

  async listKeyVersionsWithOptions(request: ListKeyVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListKeyVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListKeyVersions",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListKeyVersionsResponse>(await this.callApi(params, req, runtime), new ListKeyVersionsResponse({}));
    } else {
      return $tea.cast<ListKeyVersionsResponse>(await this.execute(params, req, runtime), new ListKeyVersionsResponse({}));
    }

  }

  async listKeyVersions(request: ListKeyVersionsRequest): Promise<ListKeyVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeyVersionsWithOptions(request, runtime);
  }

  async listKeysWithOptions(request: ListKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListKeys",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListKeysResponse>(await this.callApi(params, req, runtime), new ListKeysResponse({}));
    } else {
      return $tea.cast<ListKeysResponse>(await this.execute(params, req, runtime), new ListKeysResponse({}));
    }

  }

  async listKeys(request: ListKeysRequest): Promise<ListKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeysWithOptions(request, runtime);
  }

  async listKmsInstancesWithOptions(request: ListKmsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListKmsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListKmsInstances",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListKmsInstancesResponse>(await this.callApi(params, req, runtime), new ListKmsInstancesResponse({}));
    } else {
      return $tea.cast<ListKmsInstancesResponse>(await this.execute(params, req, runtime), new ListKmsInstancesResponse({}));
    }

  }

  async listKmsInstances(request: ListKmsInstancesRequest): Promise<ListKmsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKmsInstancesWithOptions(request, runtime);
  }

  async listNetworkRulesWithOptions(request: ListNetworkRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListNetworkRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNetworkRules",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListNetworkRulesResponse>(await this.callApi(params, req, runtime), new ListNetworkRulesResponse({}));
    } else {
      return $tea.cast<ListNetworkRulesResponse>(await this.execute(params, req, runtime), new ListNetworkRulesResponse({}));
    }

  }

  async listNetworkRules(request: ListNetworkRulesRequest): Promise<ListNetworkRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkRulesWithOptions(request, runtime);
  }

  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicies",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListPoliciesResponse>(await this.callApi(params, req, runtime), new ListPoliciesResponse({}));
    } else {
      return $tea.cast<ListPoliciesResponse>(await this.execute(params, req, runtime), new ListPoliciesResponse({}));
    }

  }

  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
    * Request format: KeyId="string"
    *
    * @param request ListResourceTagsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListResourceTagsResponse
   */
  async listResourceTagsWithOptions(request: ListResourceTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTags",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListResourceTagsResponse>(await this.callApi(params, req, runtime), new ListResourceTagsResponse({}));
    } else {
      return $tea.cast<ListResourceTagsResponse>(await this.execute(params, req, runtime), new ListResourceTagsResponse({}));
    }

  }

  /**
    * Request format: KeyId="string"
    *
    * @param request ListResourceTagsRequest
    * @return ListResourceTagsResponse
   */
  async listResourceTags(request: ListResourceTagsRequest): Promise<ListResourceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTagsWithOptions(request, runtime);
  }

  /**
    * The secret value is not included in the returned version information. By default, deprecated secret versions are not returned.
    *
    * @param request ListSecretVersionIdsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSecretVersionIdsResponse
   */
  async listSecretVersionIdsWithOptions(request: ListSecretVersionIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretVersionIdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeDeprecated)) {
      query["IncludeDeprecated"] = request.includeDeprecated;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecretVersionIds",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListSecretVersionIdsResponse>(await this.callApi(params, req, runtime), new ListSecretVersionIdsResponse({}));
    } else {
      return $tea.cast<ListSecretVersionIdsResponse>(await this.execute(params, req, runtime), new ListSecretVersionIdsResponse({}));
    }

  }

  /**
    * The secret value is not included in the returned version information. By default, deprecated secret versions are not returned.
    *
    * @param request ListSecretVersionIdsRequest
    * @return ListSecretVersionIdsResponse
   */
  async listSecretVersionIds(request: ListSecretVersionIdsRequest): Promise<ListSecretVersionIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretVersionIdsWithOptions(request, runtime);
  }

  /**
    * Specifies whether to return the resource tags of the secret. Valid values:
    * *   true: returns the resource tags.
    * *   false: does not return the resource tags. This is the default value.
    *
    * @param request ListSecretsRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSecretsResponse
   */
  async listSecretsWithOptions(request: ListSecretsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fetchTags)) {
      query["FetchTags"] = request.fetchTags;
    }

    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecrets",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListSecretsResponse>(await this.callApi(params, req, runtime), new ListSecretsResponse({}));
    } else {
      return $tea.cast<ListSecretsResponse>(await this.execute(params, req, runtime), new ListSecretsResponse({}));
    }

  }

  /**
    * Specifies whether to return the resource tags of the secret. Valid values:
    * *   true: returns the resource tags.
    * *   false: does not return the resource tags. This is the default value.
    *
    * @param request ListSecretsRequest
    * @return ListSecretsResponse
   */
  async listSecrets(request: ListSecretsRequest): Promise<ListSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretsWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $tea.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
    * When you call this operation, note that:
    * - KMS is a paid service. For more information about the billing method, see [Billing description](https://www.alibabacloud.com/help/en/key-management-service/latest/billing-billing).
    * - An Alibaba Cloud account can activate KMS only once.
    * - Make sure that your Alibaba Cloud account has passed real-name authentication.
    *
    * @param request OpenKmsServiceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return OpenKmsServiceResponse
   */
  async openKmsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenKmsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenKmsService",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<OpenKmsServiceResponse>(await this.callApi(params, req, runtime), new OpenKmsServiceResponse({}));
    } else {
      return $tea.cast<OpenKmsServiceResponse>(await this.execute(params, req, runtime), new OpenKmsServiceResponse({}));
    }

  }

  /**
    * When you call this operation, note that:
    * - KMS is a paid service. For more information about the billing method, see [Billing description](https://www.alibabacloud.com/help/en/key-management-service/latest/billing-billing).
    * - An Alibaba Cloud account can activate KMS only once.
    * - Make sure that your Alibaba Cloud account has passed real-name authentication.
    *
    * @return OpenKmsServiceResponse
   */
  async openKmsService(): Promise<OpenKmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openKmsServiceWithOptions(runtime);
  }

  /**
    * This operation is used to store the secret values of new versions. It cannot be used to modify the secret value of an existing version.
    * By default, the newly stored secret value is marked with ACSCurrent, and the mark for the previous version of the secret value is changed from ACSCurrent to ACSPrevious. If you specify the VersionStage parameter, the newly stored secret value is marked with the stage label that you specify.
    * You must specify a version number when you call the operation. Secrets Manager performs operations based on the following rules:
    * *   If the specified version number does not exist in the secret, Secrets Manager creates the version and stores the secret value.
    * *   If the specified version number already exists in the secret and the secret value of the existing version is the same as the secret value that you specify, Secrets Manager ignores the request and returns a success message. The request is idempotent.
    * *   If the specified version number already exists in the secret but the secret value of the existing version is different from the secret value that you specify, Secrets Manager rejects the request and returns a failure message.
    * Limits: This operation is available only for standard secrets.
    * In this example, the secret value of a new version is stored into the `secret001` secret. The `VersionId` parameter is set to `00000000000000000000000000000000203` as the new version, and the `SecretData` parameter is set to `importantdata`.
    *
    * @param request PutSecretValueRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutSecretValueResponse
   */
  async putSecretValueWithOptions(request: PutSecretValueRequest, runtime: $Util.RuntimeOptions): Promise<PutSecretValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretData)) {
      query["SecretData"] = request.secretData;
    }

    if (!Util.isUnset(request.secretDataType)) {
      query["SecretDataType"] = request.secretDataType;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    if (!Util.isUnset(request.versionStages)) {
      query["VersionStages"] = request.versionStages;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutSecretValue",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<PutSecretValueResponse>(await this.callApi(params, req, runtime), new PutSecretValueResponse({}));
    } else {
      return $tea.cast<PutSecretValueResponse>(await this.execute(params, req, runtime), new PutSecretValueResponse({}));
    }

  }

  /**
    * This operation is used to store the secret values of new versions. It cannot be used to modify the secret value of an existing version.
    * By default, the newly stored secret value is marked with ACSCurrent, and the mark for the previous version of the secret value is changed from ACSCurrent to ACSPrevious. If you specify the VersionStage parameter, the newly stored secret value is marked with the stage label that you specify.
    * You must specify a version number when you call the operation. Secrets Manager performs operations based on the following rules:
    * *   If the specified version number does not exist in the secret, Secrets Manager creates the version and stores the secret value.
    * *   If the specified version number already exists in the secret and the secret value of the existing version is the same as the secret value that you specify, Secrets Manager ignores the request and returns a success message. The request is idempotent.
    * *   If the specified version number already exists in the secret but the secret value of the existing version is different from the secret value that you specify, Secrets Manager rejects the request and returns a failure message.
    * Limits: This operation is available only for standard secrets.
    * In this example, the secret value of a new version is stored into the `secret001` secret. The `VersionId` parameter is set to `00000000000000000000000000000000203` as the new version, and the `SecretData` parameter is set to `importantdata`.
    *
    * @param request PutSecretValueRequest
    * @return PutSecretValueResponse
   */
  async putSecretValue(request: PutSecretValueRequest): Promise<PutSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putSecretValueWithOptions(request, runtime);
  }

  /**
    * You can call this operation in the following scenarios:
    * *   After the CMK that was used to encrypt your data is rotated, you can call this operation to use the latest CMK version to re-encrypt the data. For more information about automatic key rotation, see [Configure automatic key rotation](~~134270~~).
    * *   The CMK that was used to encrypt your data remains unchanged, but EncryptionContext is changed. In this scenario, you can call this operation to re-encrypt the data.
    * *   You can call this operation to use a CMK in KMS to re-encrypt data or a data key that was previously encrypted by a different CMK.
    * To use the ReEncrypt operation, you must have two permissions:
    * *   kms:ReEncryptFrom on the source CMK
    * *   kms:ReEncryptTo on the destination CMK
    * *   For simplicity, you can specify kms:ReEncrypt\\* to allow both of the preceding permissions.
    *
    * @param tmpReq ReEncryptRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ReEncryptResponse
   */
  async reEncryptWithOptions(tmpReq: ReEncryptRequest, runtime: $Util.RuntimeOptions): Promise<ReEncryptResponse> {
    Util.validateModel(tmpReq);
    let request = new ReEncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destinationEncryptionContext)) {
      request.destinationEncryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationEncryptionContext, "DestinationEncryptionContext", "json");
    }

    if (!Util.isUnset(tmpReq.sourceEncryptionContext)) {
      request.sourceEncryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceEncryptionContext, "SourceEncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.destinationEncryptionContextShrink)) {
      query["DestinationEncryptionContext"] = request.destinationEncryptionContextShrink;
    }

    if (!Util.isUnset(request.destinationKeyId)) {
      query["DestinationKeyId"] = request.destinationKeyId;
    }

    if (!Util.isUnset(request.sourceEncryptionAlgorithm)) {
      query["SourceEncryptionAlgorithm"] = request.sourceEncryptionAlgorithm;
    }

    if (!Util.isUnset(request.sourceEncryptionContextShrink)) {
      query["SourceEncryptionContext"] = request.sourceEncryptionContextShrink;
    }

    if (!Util.isUnset(request.sourceKeyId)) {
      query["SourceKeyId"] = request.sourceKeyId;
    }

    if (!Util.isUnset(request.sourceKeyVersionId)) {
      query["SourceKeyVersionId"] = request.sourceKeyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReEncrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ReEncryptResponse>(await this.callApi(params, req, runtime), new ReEncryptResponse({}));
    } else {
      return $tea.cast<ReEncryptResponse>(await this.execute(params, req, runtime), new ReEncryptResponse({}));
    }

  }

  /**
    * You can call this operation in the following scenarios:
    * *   After the CMK that was used to encrypt your data is rotated, you can call this operation to use the latest CMK version to re-encrypt the data. For more information about automatic key rotation, see [Configure automatic key rotation](~~134270~~).
    * *   The CMK that was used to encrypt your data remains unchanged, but EncryptionContext is changed. In this scenario, you can call this operation to re-encrypt the data.
    * *   You can call this operation to use a CMK in KMS to re-encrypt data or a data key that was previously encrypted by a different CMK.
    * To use the ReEncrypt operation, you must have two permissions:
    * *   kms:ReEncryptFrom on the source CMK
    * *   kms:ReEncryptTo on the destination CMK
    * *   For simplicity, you can specify kms:ReEncrypt\\* to allow both of the preceding permissions.
    *
    * @param request ReEncryptRequest
    * @return ReEncryptResponse
   */
  async reEncrypt(request: ReEncryptRequest): Promise<ReEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reEncryptWithOptions(request, runtime);
  }

  /**
    * You can only use this operation to restore a deleted secret that is within its recovery period. If you set **ForceDeleteWithoutRecovery** to **true** when you delete the secret, you cannot restore it.
    *
    * @param request RestoreSecretRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RestoreSecretResponse
   */
  async restoreSecretWithOptions(request: RestoreSecretRequest, runtime: $Util.RuntimeOptions): Promise<RestoreSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestoreSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<RestoreSecretResponse>(await this.callApi(params, req, runtime), new RestoreSecretResponse({}));
    } else {
      return $tea.cast<RestoreSecretResponse>(await this.execute(params, req, runtime), new RestoreSecretResponse({}));
    }

  }

  /**
    * You can only use this operation to restore a deleted secret that is within its recovery period. If you set **ForceDeleteWithoutRecovery** to **true** when you delete the secret, you cannot restore it.
    *
    * @param request RestoreSecretRequest
    * @return RestoreSecretResponse
   */
  async restoreSecret(request: RestoreSecretRequest): Promise<RestoreSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreSecretWithOptions(request, runtime);
  }

  /**
    * Limits:
    * • A secret of each Alibaba Cloud account can be rotated for a maximum of 50 times per hour.
    * • The RotateSecret operation is unavailable for standard secrets.
    * In this example, the `RdsSecret/Mysql5.4/MyCred` secret is manually rotated, and the version number of the secret is set to `000000123` after the secret is rotated.
    *
    * @param request RotateSecretRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return RotateSecretResponse
   */
  async rotateSecretWithOptions(request: RotateSecretRequest, runtime: $Util.RuntimeOptions): Promise<RotateSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RotateSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<RotateSecretResponse>(await this.callApi(params, req, runtime), new RotateSecretResponse({}));
    } else {
      return $tea.cast<RotateSecretResponse>(await this.execute(params, req, runtime), new RotateSecretResponse({}));
    }

  }

  /**
    * Limits:
    * • A secret of each Alibaba Cloud account can be rotated for a maximum of 50 times per hour.
    * • The RotateSecret operation is unavailable for standard secrets.
    * In this example, the `RdsSecret/Mysql5.4/MyCred` secret is manually rotated, and the version number of the secret is set to `000000123` after the secret is rotated.
    *
    * @param request RotateSecretRequest
    * @return RotateSecretResponse
   */
  async rotateSecret(request: RotateSecretRequest): Promise<RotateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rotateSecretWithOptions(request, runtime);
  }

  /**
    * During the scheduled period, the CMK is in the PendingDeletion state and cannot be used to encrypt data, decrypt data, or generate data keys.
    * After a CMK is deleted, it cannot be recovered. Data that is encrypted and data keys that are generated by using the CMK cannot be decrypted. To prevent accidental deletion of CMKs, Key Management Service (KMS) allows you to only schedule key deletion tasks. You cannot directly delete CMKs. If you want to delete a CMK, call the [DisableKey](~~35151~~) operation to disable the CMK.
    * When you call this operation, you must specify a scheduled period between 7 days to 366 days. The scheduled period starts from the time when you submit the request. You can call the [CancelKeyDeletion](~~44197~~) operation to cancel the key deletion task before the scheduled period ends.
    *
    * @param request ScheduleKeyDeletionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return ScheduleKeyDeletionResponse
   */
  async scheduleKeyDeletionWithOptions(request: ScheduleKeyDeletionRequest, runtime: $Util.RuntimeOptions): Promise<ScheduleKeyDeletionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.pendingWindowInDays)) {
      query["PendingWindowInDays"] = request.pendingWindowInDays;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScheduleKeyDeletion",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ScheduleKeyDeletionResponse>(await this.callApi(params, req, runtime), new ScheduleKeyDeletionResponse({}));
    } else {
      return $tea.cast<ScheduleKeyDeletionResponse>(await this.execute(params, req, runtime), new ScheduleKeyDeletionResponse({}));
    }

  }

  /**
    * During the scheduled period, the CMK is in the PendingDeletion state and cannot be used to encrypt data, decrypt data, or generate data keys.
    * After a CMK is deleted, it cannot be recovered. Data that is encrypted and data keys that are generated by using the CMK cannot be decrypted. To prevent accidental deletion of CMKs, Key Management Service (KMS) allows you to only schedule key deletion tasks. You cannot directly delete CMKs. If you want to delete a CMK, call the [DisableKey](~~35151~~) operation to disable the CMK.
    * When you call this operation, you must specify a scheduled period between 7 days to 366 days. The scheduled period starts from the time when you submit the request. You can call the [CancelKeyDeletion](~~44197~~) operation to cancel the key deletion task before the scheduled period ends.
    *
    * @param request ScheduleKeyDeletionRequest
    * @return ScheduleKeyDeletionResponse
   */
  async scheduleKeyDeletion(request: ScheduleKeyDeletionRequest): Promise<ScheduleKeyDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scheduleKeyDeletionWithOptions(request, runtime);
  }

  /**
    * *   After you enable deletion protection for a CMK, you cannot delete the CMK. If you want to delete the CMK, you must first disable deletion protection for the CMK.
    * *   Before you can call the SetDeletionProtection operation, make sure that the required CMK is not in the Pending Deletion state. You can call the [DescribeKey](~~28952~~) operation to query the CMK status, which is specified by the KeyState parameter.
    * You can enable deletion protection for the CMK whose Alibaba Cloud Resource Name (ARN) is `acs:kms:cn-hangzhou:123213123****:key/0225f411-b21d-46d1-be5b-93931c82****` by using parameter settings provided in this topic. The CMK ARN is specified by the ProtectedResourceArn parameter.
    *
    * @param request SetDeletionProtectionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return SetDeletionProtectionResponse
   */
  async setDeletionProtectionWithOptions(request: SetDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetDeletionProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletionProtectionDescription)) {
      query["DeletionProtectionDescription"] = request.deletionProtectionDescription;
    }

    if (!Util.isUnset(request.enableDeletionProtection)) {
      query["EnableDeletionProtection"] = request.enableDeletionProtection;
    }

    if (!Util.isUnset(request.protectedResourceArn)) {
      query["ProtectedResourceArn"] = request.protectedResourceArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDeletionProtection",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<SetDeletionProtectionResponse>(await this.callApi(params, req, runtime), new SetDeletionProtectionResponse({}));
    } else {
      return $tea.cast<SetDeletionProtectionResponse>(await this.execute(params, req, runtime), new SetDeletionProtectionResponse({}));
    }

  }

  /**
    * *   After you enable deletion protection for a CMK, you cannot delete the CMK. If you want to delete the CMK, you must first disable deletion protection for the CMK.
    * *   Before you can call the SetDeletionProtection operation, make sure that the required CMK is not in the Pending Deletion state. You can call the [DescribeKey](~~28952~~) operation to query the CMK status, which is specified by the KeyState parameter.
    * You can enable deletion protection for the CMK whose Alibaba Cloud Resource Name (ARN) is `acs:kms:cn-hangzhou:123213123****:key/0225f411-b21d-46d1-be5b-93931c82****` by using parameter settings provided in this topic. The CMK ARN is specified by the ProtectedResourceArn parameter.
    *
    * @param request SetDeletionProtectionRequest
    * @return SetDeletionProtectionResponse
   */
  async setDeletionProtection(request: SetDeletionProtectionRequest): Promise<SetDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

  /**
    * You can add up to 10 tags to a CMK, secret, or certificate.
    * In this example, the tags `[{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]` are added to the CMK whose ID is `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
    *
    * @param request TagResourceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourceResponse
   */
  async tagResourceWithOptions(request: TagResourceRequest, runtime: $Util.RuntimeOptions): Promise<TagResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResource",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<TagResourceResponse>(await this.callApi(params, req, runtime), new TagResourceResponse({}));
    } else {
      return $tea.cast<TagResourceResponse>(await this.execute(params, req, runtime), new TagResourceResponse({}));
    }

  }

  /**
    * You can add up to 10 tags to a CMK, secret, or certificate.
    * In this example, the tags `[{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]` are added to the CMK whose ID is `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
    *
    * @param request TagResourceRequest
    * @return TagResourceResponse
   */
  async tagResource(request: TagResourceRequest): Promise<TagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourceWithOptions(request, runtime);
  }

  /**
    * You can add multiple tags to multiple keys or multiple secrets at a time.
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $tea.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
    * You can add multiple tags to multiple keys or multiple secrets at a time.
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
    * One or more tag keys. Separate multiple tag keys with commas (,).
    * You need to specify only the tag keys, not the tag values.
    * Each tag key must be 1 to 128 bytes in length.
    *
    * @param request UntagResourceRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagResourceResponse
   */
  async untagResourceWithOptions(request: UntagResourceRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResource",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UntagResourceResponse>(await this.callApi(params, req, runtime), new UntagResourceResponse({}));
    } else {
      return $tea.cast<UntagResourceResponse>(await this.execute(params, req, runtime), new UntagResourceResponse({}));
    }

  }

  /**
    * One or more tag keys. Separate multiple tag keys with commas (,).
    * You need to specify only the tag keys, not the tag values.
    * Each tag key must be 1 to 128 bytes in length.
    *
    * @param request UntagResourceRequest
    * @return UntagResourceResponse
   */
  async untagResource(request: UntagResourceRequest): Promise<UntagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourceWithOptions(request, runtime);
  }

  /**
    * You can remove multiple tags from multiple keys or multiple secrets at a time. You cannot remove tags that start with aliyun or acs:.
    * If you enter multiple tag keys in the request parameters and only some of the tag keys are associated with resources, the operation can be called and the tags whose keys are associated with resources are removed from the resources.
    *
    * @param request UntagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $tea.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
    * You can remove multiple tags from multiple keys or multiple secrets at a time. You cannot remove tags that start with aliyun or acs:.
    * If you enter multiple tag keys in the request parameters and only some of the tag keys are associated with resources, the operation can be called and the tags whose keys are associated with resources are removed from the resources.
    *
    * @param request UntagResourcesRequest
    * @return UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async updateAliasWithOptions(request: UpdateAliasRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlias",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateAliasResponse>(await this.callApi(params, req, runtime), new UpdateAliasResponse({}));
    } else {
      return $tea.cast<UpdateAliasResponse>(await this.execute(params, req, runtime), new UpdateAliasResponse({}));
    }

  }

  async updateAlias(request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAliasWithOptions(request, runtime);
  }

  /**
    * The update takes effect immediately after an AAP information is updated. Exercise caution when you perform this operation. You can update the description of an AAP and the permission policies that are associated with the AAP. You cannot update the name of the AAP.
    *
    * @param request UpdateApplicationAccessPointRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateApplicationAccessPointResponse
   */
  async updateApplicationAccessPointWithOptions(request: UpdateApplicationAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policies)) {
      query["Policies"] = request.policies;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationAccessPoint",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new UpdateApplicationAccessPointResponse({}));
    } else {
      return $tea.cast<UpdateApplicationAccessPointResponse>(await this.execute(params, req, runtime), new UpdateApplicationAccessPointResponse({}));
    }

  }

  /**
    * The update takes effect immediately after an AAP information is updated. Exercise caution when you perform this operation. You can update the description of an AAP and the permission policies that are associated with the AAP. You cannot update the name of the AAP.
    *
    * @param request UpdateApplicationAccessPointRequest
    * @return UpdateApplicationAccessPointResponse
   */
  async updateApplicationAccessPoint(request: UpdateApplicationAccessPointRequest): Promise<UpdateApplicationAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationAccessPointWithOptions(request, runtime);
  }

  /**
    * In this example, the status of the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is updated to INACTIVE.
    *
    * @param request UpdateCertificateStatusRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateCertificateStatusResponse
   */
  async updateCertificateStatusWithOptions(request: UpdateCertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCertificateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCertificateStatus",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateCertificateStatusResponse>(await this.callApi(params, req, runtime), new UpdateCertificateStatusResponse({}));
    } else {
      return $tea.cast<UpdateCertificateStatusResponse>(await this.execute(params, req, runtime), new UpdateCertificateStatusResponse({}));
    }

  }

  /**
    * In this example, the status of the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is updated to INACTIVE.
    *
    * @param request UpdateCertificateStatusRequest
    * @return UpdateCertificateStatusResponse
   */
  async updateCertificateStatus(request: UpdateCertificateStatusRequest): Promise<UpdateCertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCertificateStatusWithOptions(request, runtime);
  }

  /**
    * This operation replaces the description of a customer master key (CMK) with the description that you specify. The original description of the CMK is specified by the Description parameter when you call the [DescribeKey](~~28952~~) operation. You can call this operation to add, modify, or delete the description of a CMK.
    *
    * @param request UpdateKeyDescriptionRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateKeyDescriptionResponse
   */
  async updateKeyDescriptionWithOptions(request: UpdateKeyDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKeyDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateKeyDescription",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateKeyDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateKeyDescriptionResponse({}));
    } else {
      return $tea.cast<UpdateKeyDescriptionResponse>(await this.execute(params, req, runtime), new UpdateKeyDescriptionResponse({}));
    }

  }

  /**
    * This operation replaces the description of a customer master key (CMK) with the description that you specify. The original description of the CMK is specified by the Description parameter when you call the [DescribeKey](~~28952~~) operation. You can call this operation to add, modify, or delete the description of a CMK.
    *
    * @param request UpdateKeyDescriptionRequest
    * @return UpdateKeyDescriptionResponse
   */
  async updateKeyDescription(request: UpdateKeyDescriptionRequest): Promise<UpdateKeyDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKeyDescriptionWithOptions(request, runtime);
  }

  /**
    * If your own applications are deployed in multiple VPCs in the same region, you can associate the VPCs except the VPC in which the KMS instance resides with the KMS instance. This topic describes how to configure the VPCs.
    * The VPCs can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. After the configuration is complete, the applications in these VPCs can access the KMS instance.
    * > If the VPCs belong to different Alibaba Cloud accounts, you must first configure resource sharing to share the vSwitches of other Alibaba Cloud accounts with the Alibaba Cloud account to which the KMS instance belongs. For more information, see [Access a KMS instance from multiple VPCs in the same region](~~2393236~~).
    *
    * @param request UpdateKmsInstanceBindVpcRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateKmsInstanceBindVpcResponse
   */
  async updateKmsInstanceBindVpcWithOptions(request: UpdateKmsInstanceBindVpcRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKmsInstanceBindVpcResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateKmsInstanceBindVpc",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateKmsInstanceBindVpcResponse>(await this.callApi(params, req, runtime), new UpdateKmsInstanceBindVpcResponse({}));
    } else {
      return $tea.cast<UpdateKmsInstanceBindVpcResponse>(await this.execute(params, req, runtime), new UpdateKmsInstanceBindVpcResponse({}));
    }

  }

  /**
    * If your own applications are deployed in multiple VPCs in the same region, you can associate the VPCs except the VPC in which the KMS instance resides with the KMS instance. This topic describes how to configure the VPCs.
    * The VPCs can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. After the configuration is complete, the applications in these VPCs can access the KMS instance.
    * > If the VPCs belong to different Alibaba Cloud accounts, you must first configure resource sharing to share the vSwitches of other Alibaba Cloud accounts with the Alibaba Cloud account to which the KMS instance belongs. For more information, see [Access a KMS instance from multiple VPCs in the same region](~~2393236~~).
    *
    * @param request UpdateKmsInstanceBindVpcRequest
    * @return UpdateKmsInstanceBindVpcResponse
   */
  async updateKmsInstanceBindVpc(request: UpdateKmsInstanceBindVpcRequest): Promise<UpdateKmsInstanceBindVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKmsInstanceBindVpcWithOptions(request, runtime);
  }

  /**
    * - You can update only private IP addresses and description of an access control rule. You cannot update the name and network type of an access control rule.
    * - Updating an access control rule affects all permission policies that are bound to the access control rule. Exercise caution when you perform this operation.
    *
    * @param request UpdateNetworkRuleRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateNetworkRuleResponse
   */
  async updateNetworkRuleWithOptions(request: UpdateNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourcePrivateIp)) {
      query["SourcePrivateIp"] = request.sourcePrivateIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNetworkRule",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateNetworkRuleResponse>(await this.callApi(params, req, runtime), new UpdateNetworkRuleResponse({}));
    } else {
      return $tea.cast<UpdateNetworkRuleResponse>(await this.execute(params, req, runtime), new UpdateNetworkRuleResponse({}));
    }

  }

  /**
    * - You can update only private IP addresses and description of an access control rule. You cannot update the name and network type of an access control rule.
    * - Updating an access control rule affects all permission policies that are bound to the access control rule. Exercise caution when you perform this operation.
    *
    * @param request UpdateNetworkRuleRequest
    * @return UpdateNetworkRuleResponse
   */
  async updateNetworkRule(request: UpdateNetworkRuleRequest): Promise<UpdateNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNetworkRuleWithOptions(request, runtime);
  }

  /**
    * - You can update the role-based access control (RBAC) permissions, accessible resources, access control rules, and description of a permission policy. You cannot update the name or scope of a permission policy.
    * - Updating a permission policy affects all application access points (AAPs) that are bound to the permission policy. Exercise caution when you perform this operation.
    *
    * @param request UpdatePolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdatePolicyResponse
   */
  async updatePolicyWithOptions(request: UpdatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessControlRules)) {
      query["AccessControlRules"] = request.accessControlRules;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.permissions)) {
      query["Permissions"] = request.permissions;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdatePolicyResponse>(await this.callApi(params, req, runtime), new UpdatePolicyResponse({}));
    } else {
      return $tea.cast<UpdatePolicyResponse>(await this.execute(params, req, runtime), new UpdatePolicyResponse({}));
    }

  }

  /**
    * - You can update the role-based access control (RBAC) permissions, accessible resources, access control rules, and description of a permission policy. You cannot update the name or scope of a permission policy.
    * - Updating a permission policy affects all application access points (AAPs) that are bound to the permission policy. Exercise caution when you perform this operation.
    *
    * @param request UpdatePolicyRequest
    * @return UpdatePolicyResponse
   */
  async updatePolicy(request: UpdatePolicyRequest): Promise<UpdatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePolicyWithOptions(request, runtime);
  }

  /**
    * When automatic key rotation is enabled, KMS automatically creates a key version after the preset rotation period arrives. In addition, KMS sets the new key version as the primary key version.
    * An automatic key rotation policy cannot be configured for the following keys:
    * *   Asymmetric key
    * *   Service-managed key
    * *   Bring your own key (BYOK) that is imported into KMS
    * *   Key that is not in the **Enabled** state
    * In this example, automatic key rotation is enabled for a CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****`. The automatic rotation period is 30 days.
    *
    * @param request UpdateRotationPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateRotationPolicyResponse
   */
  async updateRotationPolicyWithOptions(request: UpdateRotationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRotationPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRotationPolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateRotationPolicyResponse>(await this.callApi(params, req, runtime), new UpdateRotationPolicyResponse({}));
    } else {
      return $tea.cast<UpdateRotationPolicyResponse>(await this.execute(params, req, runtime), new UpdateRotationPolicyResponse({}));
    }

  }

  /**
    * When automatic key rotation is enabled, KMS automatically creates a key version after the preset rotation period arrives. In addition, KMS sets the new key version as the primary key version.
    * An automatic key rotation policy cannot be configured for the following keys:
    * *   Asymmetric key
    * *   Service-managed key
    * *   Bring your own key (BYOK) that is imported into KMS
    * *   Key that is not in the **Enabled** state
    * In this example, automatic key rotation is enabled for a CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****`. The automatic rotation period is 30 days.
    *
    * @param request UpdateRotationPolicyRequest
    * @return UpdateRotationPolicyResponse
   */
  async updateRotationPolicy(request: UpdateRotationPolicyRequest): Promise<UpdateRotationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRotationPolicyWithOptions(request, runtime);
  }

  /**
    * In this example, the metadata of the `secret001` secret is updated. The `Description` parameter is set to `datainfo`.
    *
    * @param request UpdateSecretRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateSecretResponse
   */
  async updateSecretWithOptions(request: UpdateSecretRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.extendedConfig)) {
      query["ExtendedConfig"] = request.extendedConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateSecretResponse>(await this.callApi(params, req, runtime), new UpdateSecretResponse({}));
    } else {
      return $tea.cast<UpdateSecretResponse>(await this.execute(params, req, runtime), new UpdateSecretResponse({}));
    }

  }

  /**
    * In this example, the metadata of the `secret001` secret is updated. The `Description` parameter is set to `datainfo`.
    *
    * @param request UpdateSecretRequest
    * @return UpdateSecretResponse
   */
  async updateSecret(request: UpdateSecretRequest): Promise<UpdateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretWithOptions(request, runtime);
  }

  /**
    * After automatic rotation is enabled, Secrets Manager schedules the first automatic rotation by adding the preset rotation interval to the timestamp of the last rotation.
    * Limits: The UpdateSecretRotationPolicy operation cannot be used to update the rotation policy of generic secrets.
    * In this example, the rotation policy of the `RdsSecret/Mysql5.4/MyCred` secret is updated. The following settings are modified:
    * *   The `EnableAutomaticRotation` parameter is set to `true`, which indicates that automatic rotation is enabled.
    * *   The `RotationInterval` parameter is set to `30d`, which indicates that the interval for automatic rotation is 30 days.
    *
    * @param request UpdateSecretRotationPolicyRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateSecretRotationPolicyResponse
   */
  async updateSecretRotationPolicyWithOptions(request: UpdateSecretRotationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretRotationPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!Util.isUnset(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecretRotationPolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateSecretRotationPolicyResponse>(await this.callApi(params, req, runtime), new UpdateSecretRotationPolicyResponse({}));
    } else {
      return $tea.cast<UpdateSecretRotationPolicyResponse>(await this.execute(params, req, runtime), new UpdateSecretRotationPolicyResponse({}));
    }

  }

  /**
    * After automatic rotation is enabled, Secrets Manager schedules the first automatic rotation by adding the preset rotation interval to the timestamp of the last rotation.
    * Limits: The UpdateSecretRotationPolicy operation cannot be used to update the rotation policy of generic secrets.
    * In this example, the rotation policy of the `RdsSecret/Mysql5.4/MyCred` secret is updated. The following settings are modified:
    * *   The `EnableAutomaticRotation` parameter is set to `true`, which indicates that automatic rotation is enabled.
    * *   The `RotationInterval` parameter is set to `30d`, which indicates that the interval for automatic rotation is 30 days.
    *
    * @param request UpdateSecretRotationPolicyRequest
    * @return UpdateSecretRotationPolicyResponse
   */
  async updateSecretRotationPolicy(request: UpdateSecretRotationPolicyRequest): Promise<UpdateSecretRotationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretRotationPolicyWithOptions(request, runtime);
  }

  /**
    * Updates the stage label that marks a secret version.
    *
    * @param request UpdateSecretVersionStageRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateSecretVersionStageResponse
   */
  async updateSecretVersionStageWithOptions(request: UpdateSecretVersionStageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretVersionStageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moveToVersion)) {
      query["MoveToVersion"] = request.moveToVersion;
    }

    if (!Util.isUnset(request.removeFromVersion)) {
      query["RemoveFromVersion"] = request.removeFromVersion;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.versionStage)) {
      query["VersionStage"] = request.versionStage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecretVersionStage",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateSecretVersionStageResponse>(await this.callApi(params, req, runtime), new UpdateSecretVersionStageResponse({}));
    } else {
      return $tea.cast<UpdateSecretVersionStageResponse>(await this.execute(params, req, runtime), new UpdateSecretVersionStageResponse({}));
    }

  }

  /**
    * Updates the stage label that marks a secret version.
    *
    * @param request UpdateSecretVersionStageRequest
    * @return UpdateSecretVersionStageResponse
   */
  async updateSecretVersionStage(request: UpdateSecretVersionStageRequest): Promise<UpdateSecretVersionStageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretVersionStageWithOptions(request, runtime);
  }

  /**
    * In this example, a certificate issued by a CA is imported into Certificates Manager. The ID of the certificate in Certificates Manager is `12345678-1234-1234-1234-12345678****`.
    *
    * @param request UploadCertificateRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return UploadCertificateResponse
   */
  async uploadCertificateWithOptions(request: UploadCertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!Util.isUnset(request.certificateChain)) {
      query["CertificateChain"] = request.certificateChain;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UploadCertificateResponse>(await this.callApi(params, req, runtime), new UploadCertificateResponse({}));
    } else {
      return $tea.cast<UploadCertificateResponse>(await this.execute(params, req, runtime), new UploadCertificateResponse({}));
    }

  }

  /**
    * In this example, a certificate issued by a CA is imported into Certificates Manager. The ID of the certificate in Certificates Manager is `12345678-1234-1234-1234-12345678****`.
    *
    * @param request UploadCertificateRequest
    * @return UploadCertificateResponse
   */
  async uploadCertificate(request: UploadCertificateRequest): Promise<UploadCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCertificateWithOptions(request, runtime);
  }

}
