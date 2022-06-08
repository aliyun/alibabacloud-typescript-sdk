// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AsymmetricDecryptResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AsymmetricEncryptResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AsymmetricSignResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: AsymmetricVerifyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelKeyDeletionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CertificatePrivateKeyDecryptResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CertificatePrivateKeySignResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CertificatePublicKeyEncryptResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CertificatePublicKeyVerifyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAliasResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCertificateResponseBody;
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

export class CreateKeyRequest extends $tea.Model {
  description?: string;
  enableAutomaticRotation?: boolean;
  keySpec?: string;
  keyUsage?: string;
  origin?: string;
  protectionLevel?: string;
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      keySpec: 'KeySpec',
      keyUsage: 'KeyUsage',
      origin: 'Origin',
      protectionLevel: 'ProtectionLevel',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enableAutomaticRotation: 'boolean',
      keySpec: 'string',
      keyUsage: 'string',
      origin: 'string',
      protectionLevel: 'string',
      rotationInterval: 'string',
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateKeyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateKeyVersionResponseBody;
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

export class CreateSecretRequest extends $tea.Model {
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
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSecretResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DecryptResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAliasResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCertificateResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteKeyMaterialResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteSecretResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeAccountKmsStatusResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeCertificateResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeKeyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeKeyVersionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeRegionsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeSecretResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: DisableKeyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EnableKeyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: EncryptResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportDataKeyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateAndExportDataKeyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateDataKeyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateDataKeyWithoutPlaintextResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCertificateResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetParametersForImportResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPublicKeyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRandomPasswordResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSecretValueResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportKeyMaterialResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAliasesResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAliasesByKeyIdResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListKeyVersionsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListKeysResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceTagsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecretVersionIdsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSecretsResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenKmsServiceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: PutSecretValueResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ReEncryptResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RestoreSecretResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: RotateSecretResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: ScheduleKeyDeletionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: SetDeletionProtectionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourceResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAliasResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCertificateStatusResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateKeyDescriptionResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRotationPolicyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSecretResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSecretRotationPolicyResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateSecretVersionStageResponseBody;
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
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadCertificateResponseBody;
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

  constructor(config: $OpenApi.Config) {
    super(config);
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
    return $tea.cast<AsymmetricDecryptResponse>(await this.callApi(params, req, runtime), new AsymmetricDecryptResponse({}));
  }

  async asymmetricDecrypt(request: AsymmetricDecryptRequest): Promise<AsymmetricDecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricDecryptWithOptions(request, runtime);
  }

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
    return $tea.cast<AsymmetricEncryptResponse>(await this.callApi(params, req, runtime), new AsymmetricEncryptResponse({}));
  }

  async asymmetricEncrypt(request: AsymmetricEncryptRequest): Promise<AsymmetricEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricEncryptWithOptions(request, runtime);
  }

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
    return $tea.cast<AsymmetricSignResponse>(await this.callApi(params, req, runtime), new AsymmetricSignResponse({}));
  }

  async asymmetricSign(request: AsymmetricSignRequest): Promise<AsymmetricSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricSignWithOptions(request, runtime);
  }

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
    return $tea.cast<AsymmetricVerifyResponse>(await this.callApi(params, req, runtime), new AsymmetricVerifyResponse({}));
  }

  async asymmetricVerify(request: AsymmetricVerifyRequest): Promise<AsymmetricVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricVerifyWithOptions(request, runtime);
  }

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
    return $tea.cast<CancelKeyDeletionResponse>(await this.callApi(params, req, runtime), new CancelKeyDeletionResponse({}));
  }

  async cancelKeyDeletion(request: CancelKeyDeletionRequest): Promise<CancelKeyDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelKeyDeletionWithOptions(request, runtime);
  }

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
    return $tea.cast<CertificatePrivateKeyDecryptResponse>(await this.callApi(params, req, runtime), new CertificatePrivateKeyDecryptResponse({}));
  }

  async certificatePrivateKeyDecrypt(request: CertificatePrivateKeyDecryptRequest): Promise<CertificatePrivateKeyDecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePrivateKeyDecryptWithOptions(request, runtime);
  }

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
    return $tea.cast<CertificatePrivateKeySignResponse>(await this.callApi(params, req, runtime), new CertificatePrivateKeySignResponse({}));
  }

  async certificatePrivateKeySign(request: CertificatePrivateKeySignRequest): Promise<CertificatePrivateKeySignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePrivateKeySignWithOptions(request, runtime);
  }

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
    return $tea.cast<CertificatePublicKeyEncryptResponse>(await this.callApi(params, req, runtime), new CertificatePublicKeyEncryptResponse({}));
  }

  async certificatePublicKeyEncrypt(request: CertificatePublicKeyEncryptRequest): Promise<CertificatePublicKeyEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePublicKeyEncryptWithOptions(request, runtime);
  }

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
    return $tea.cast<CertificatePublicKeyVerifyResponse>(await this.callApi(params, req, runtime), new CertificatePublicKeyVerifyResponse({}));
  }

  async certificatePublicKeyVerify(request: CertificatePublicKeyVerifyRequest): Promise<CertificatePublicKeyVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePublicKeyVerifyWithOptions(request, runtime);
  }

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
    return $tea.cast<CreateAliasResponse>(await this.callApi(params, req, runtime), new CreateAliasResponse({}));
  }

  async createAlias(request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAliasWithOptions(request, runtime);
  }

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
    return $tea.cast<CreateCertificateResponse>(await this.callApi(params, req, runtime), new CreateCertificateResponse({}));
  }

  async createCertificate(request: CreateCertificateRequest): Promise<CreateCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithOptions(request, runtime);
  }

  async createKeyWithOptions(request: CreateKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyResponse> {
    Util.validateModel(request);
    let query = { };
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
    return $tea.cast<CreateKeyResponse>(await this.callApi(params, req, runtime), new CreateKeyResponse({}));
  }

  async createKey(request: CreateKeyRequest): Promise<CreateKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyWithOptions(request, runtime);
  }

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
    return $tea.cast<CreateKeyVersionResponse>(await this.callApi(params, req, runtime), new CreateKeyVersionResponse({}));
  }

  async createKeyVersion(request: CreateKeyVersionRequest): Promise<CreateKeyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyVersionWithOptions(request, runtime);
  }

  async createSecretWithOptions(tmpReq: CreateSecretRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecretResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSecretShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extendedConfig)) {
      request.extendedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendedConfig, "ExtendedConfig", "json");
    }

    let query = { };
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
    return $tea.cast<CreateSecretResponse>(await this.callApi(params, req, runtime), new CreateSecretResponse({}));
  }

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
    return $tea.cast<DecryptResponse>(await this.callApi(params, req, runtime), new DecryptResponse({}));
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
    return $tea.cast<DeleteAliasResponse>(await this.callApi(params, req, runtime), new DeleteAliasResponse({}));
  }

  async deleteAlias(request: DeleteAliasRequest): Promise<DeleteAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAliasWithOptions(request, runtime);
  }

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
    return $tea.cast<DeleteCertificateResponse>(await this.callApi(params, req, runtime), new DeleteCertificateResponse({}));
  }

  async deleteCertificate(request: DeleteCertificateRequest): Promise<DeleteCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCertificateWithOptions(request, runtime);
  }

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
    return $tea.cast<DeleteKeyMaterialResponse>(await this.callApi(params, req, runtime), new DeleteKeyMaterialResponse({}));
  }

  async deleteKeyMaterial(request: DeleteKeyMaterialRequest): Promise<DeleteKeyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyMaterialWithOptions(request, runtime);
  }

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
    return $tea.cast<DeleteSecretResponse>(await this.callApi(params, req, runtime), new DeleteSecretResponse({}));
  }

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
    return $tea.cast<DescribeAccountKmsStatusResponse>(await this.callApi(params, req, runtime), new DescribeAccountKmsStatusResponse({}));
  }

  async describeAccountKmsStatus(): Promise<DescribeAccountKmsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountKmsStatusWithOptions(runtime);
  }

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
    return $tea.cast<DescribeCertificateResponse>(await this.callApi(params, req, runtime), new DescribeCertificateResponse({}));
  }

  async describeCertificate(request: DescribeCertificateRequest): Promise<DescribeCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateWithOptions(request, runtime);
  }

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
    return $tea.cast<DescribeKeyResponse>(await this.callApi(params, req, runtime), new DescribeKeyResponse({}));
  }

  async describeKey(request: DescribeKeyRequest): Promise<DescribeKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyWithOptions(request, runtime);
  }

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
    return $tea.cast<DescribeKeyVersionResponse>(await this.callApi(params, req, runtime), new DescribeKeyVersionResponse({}));
  }

  async describeKeyVersion(request: DescribeKeyVersionRequest): Promise<DescribeKeyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyVersionWithOptions(request, runtime);
  }

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
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

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
    return $tea.cast<DescribeSecretResponse>(await this.callApi(params, req, runtime), new DescribeSecretResponse({}));
  }

  async describeSecret(request: DescribeSecretRequest): Promise<DescribeSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecretWithOptions(request, runtime);
  }

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
    return $tea.cast<DisableKeyResponse>(await this.callApi(params, req, runtime), new DisableKeyResponse({}));
  }

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
    return $tea.cast<EnableKeyResponse>(await this.callApi(params, req, runtime), new EnableKeyResponse({}));
  }

  async enableKey(request: EnableKeyRequest): Promise<EnableKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableKeyWithOptions(request, runtime);
  }

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
    return $tea.cast<EncryptResponse>(await this.callApi(params, req, runtime), new EncryptResponse({}));
  }

  async encrypt(request: EncryptRequest): Promise<EncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

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
    return $tea.cast<ExportDataKeyResponse>(await this.callApi(params, req, runtime), new ExportDataKeyResponse({}));
  }

  async exportDataKey(request: ExportDataKeyRequest): Promise<ExportDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDataKeyWithOptions(request, runtime);
  }

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
    return $tea.cast<GenerateAndExportDataKeyResponse>(await this.callApi(params, req, runtime), new GenerateAndExportDataKeyResponse({}));
  }

  async generateAndExportDataKey(request: GenerateAndExportDataKeyRequest): Promise<GenerateAndExportDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAndExportDataKeyWithOptions(request, runtime);
  }

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
    return $tea.cast<GenerateDataKeyResponse>(await this.callApi(params, req, runtime), new GenerateDataKeyResponse({}));
  }

  async generateDataKey(request: GenerateDataKeyRequest): Promise<GenerateDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDataKeyWithOptions(request, runtime);
  }

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
    return $tea.cast<GenerateDataKeyWithoutPlaintextResponse>(await this.callApi(params, req, runtime), new GenerateDataKeyWithoutPlaintextResponse({}));
  }

  async generateDataKeyWithoutPlaintext(request: GenerateDataKeyWithoutPlaintextRequest): Promise<GenerateDataKeyWithoutPlaintextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDataKeyWithoutPlaintextWithOptions(request, runtime);
  }

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
    return $tea.cast<GetCertificateResponse>(await this.callApi(params, req, runtime), new GetCertificateResponse({}));
  }

  async getCertificate(request: GetCertificateRequest): Promise<GetCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertificateWithOptions(request, runtime);
  }

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
    return $tea.cast<GetParametersForImportResponse>(await this.callApi(params, req, runtime), new GetParametersForImportResponse({}));
  }

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
    return $tea.cast<GetPublicKeyResponse>(await this.callApi(params, req, runtime), new GetPublicKeyResponse({}));
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
    return $tea.cast<GetRandomPasswordResponse>(await this.callApi(params, req, runtime), new GetRandomPasswordResponse({}));
  }

  async getRandomPassword(request: GetRandomPasswordRequest): Promise<GetRandomPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRandomPasswordWithOptions(request, runtime);
  }

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
    return $tea.cast<GetSecretValueResponse>(await this.callApi(params, req, runtime), new GetSecretValueResponse({}));
  }

  async getSecretValue(request: GetSecretValueRequest): Promise<GetSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretValueWithOptions(request, runtime);
  }

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
    return $tea.cast<ImportKeyMaterialResponse>(await this.callApi(params, req, runtime), new ImportKeyMaterialResponse({}));
  }

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
    return $tea.cast<ListAliasesResponse>(await this.callApi(params, req, runtime), new ListAliasesResponse({}));
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
    return $tea.cast<ListAliasesByKeyIdResponse>(await this.callApi(params, req, runtime), new ListAliasesByKeyIdResponse({}));
  }

  async listAliasesByKeyId(request: ListAliasesByKeyIdRequest): Promise<ListAliasesByKeyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAliasesByKeyIdWithOptions(request, runtime);
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
    return $tea.cast<ListKeyVersionsResponse>(await this.callApi(params, req, runtime), new ListKeyVersionsResponse({}));
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
    return $tea.cast<ListKeysResponse>(await this.callApi(params, req, runtime), new ListKeysResponse({}));
  }

  async listKeys(request: ListKeysRequest): Promise<ListKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeysWithOptions(request, runtime);
  }

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
    return $tea.cast<ListResourceTagsResponse>(await this.callApi(params, req, runtime), new ListResourceTagsResponse({}));
  }

  async listResourceTags(request: ListResourceTagsRequest): Promise<ListResourceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTagsWithOptions(request, runtime);
  }

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
    return $tea.cast<ListSecretVersionIdsResponse>(await this.callApi(params, req, runtime), new ListSecretVersionIdsResponse({}));
  }

  async listSecretVersionIds(request: ListSecretVersionIdsRequest): Promise<ListSecretVersionIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretVersionIdsWithOptions(request, runtime);
  }

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
    return $tea.cast<ListSecretsResponse>(await this.callApi(params, req, runtime), new ListSecretsResponse({}));
  }

  async listSecrets(request: ListSecretsRequest): Promise<ListSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretsWithOptions(request, runtime);
  }

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
    return $tea.cast<OpenKmsServiceResponse>(await this.callApi(params, req, runtime), new OpenKmsServiceResponse({}));
  }

  async openKmsService(): Promise<OpenKmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openKmsServiceWithOptions(runtime);
  }

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
    return $tea.cast<PutSecretValueResponse>(await this.callApi(params, req, runtime), new PutSecretValueResponse({}));
  }

  async putSecretValue(request: PutSecretValueRequest): Promise<PutSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putSecretValueWithOptions(request, runtime);
  }

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
    return $tea.cast<ReEncryptResponse>(await this.callApi(params, req, runtime), new ReEncryptResponse({}));
  }

  async reEncrypt(request: ReEncryptRequest): Promise<ReEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reEncryptWithOptions(request, runtime);
  }

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
    return $tea.cast<RestoreSecretResponse>(await this.callApi(params, req, runtime), new RestoreSecretResponse({}));
  }

  async restoreSecret(request: RestoreSecretRequest): Promise<RestoreSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreSecretWithOptions(request, runtime);
  }

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
    return $tea.cast<RotateSecretResponse>(await this.callApi(params, req, runtime), new RotateSecretResponse({}));
  }

  async rotateSecret(request: RotateSecretRequest): Promise<RotateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rotateSecretWithOptions(request, runtime);
  }

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
    return $tea.cast<ScheduleKeyDeletionResponse>(await this.callApi(params, req, runtime), new ScheduleKeyDeletionResponse({}));
  }

  async scheduleKeyDeletion(request: ScheduleKeyDeletionRequest): Promise<ScheduleKeyDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scheduleKeyDeletionWithOptions(request, runtime);
  }

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
    return $tea.cast<SetDeletionProtectionResponse>(await this.callApi(params, req, runtime), new SetDeletionProtectionResponse({}));
  }

  async setDeletionProtection(request: SetDeletionProtectionRequest): Promise<SetDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

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
    return $tea.cast<TagResourceResponse>(await this.callApi(params, req, runtime), new TagResourceResponse({}));
  }

  async tagResource(request: TagResourceRequest): Promise<TagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourceWithOptions(request, runtime);
  }

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
    return $tea.cast<UntagResourceResponse>(await this.callApi(params, req, runtime), new UntagResourceResponse({}));
  }

  async untagResource(request: UntagResourceRequest): Promise<UntagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourceWithOptions(request, runtime);
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
    return $tea.cast<UpdateAliasResponse>(await this.callApi(params, req, runtime), new UpdateAliasResponse({}));
  }

  async updateAlias(request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAliasWithOptions(request, runtime);
  }

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
    return $tea.cast<UpdateCertificateStatusResponse>(await this.callApi(params, req, runtime), new UpdateCertificateStatusResponse({}));
  }

  async updateCertificateStatus(request: UpdateCertificateStatusRequest): Promise<UpdateCertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCertificateStatusWithOptions(request, runtime);
  }

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
    return $tea.cast<UpdateKeyDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateKeyDescriptionResponse({}));
  }

  async updateKeyDescription(request: UpdateKeyDescriptionRequest): Promise<UpdateKeyDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKeyDescriptionWithOptions(request, runtime);
  }

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
    return $tea.cast<UpdateRotationPolicyResponse>(await this.callApi(params, req, runtime), new UpdateRotationPolicyResponse({}));
  }

  async updateRotationPolicy(request: UpdateRotationPolicyRequest): Promise<UpdateRotationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRotationPolicyWithOptions(request, runtime);
  }

  async updateSecretWithOptions(request: UpdateSecretRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset($tea.toMap(request.extendedConfig))) {
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
    return $tea.cast<UpdateSecretResponse>(await this.callApi(params, req, runtime), new UpdateSecretResponse({}));
  }

  async updateSecret(request: UpdateSecretRequest): Promise<UpdateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretWithOptions(request, runtime);
  }

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
    return $tea.cast<UpdateSecretRotationPolicyResponse>(await this.callApi(params, req, runtime), new UpdateSecretRotationPolicyResponse({}));
  }

  async updateSecretRotationPolicy(request: UpdateSecretRotationPolicyRequest): Promise<UpdateSecretRotationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretRotationPolicyWithOptions(request, runtime);
  }

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
    return $tea.cast<UpdateSecretVersionStageResponse>(await this.callApi(params, req, runtime), new UpdateSecretVersionStageResponse({}));
  }

  async updateSecretVersionStage(request: UpdateSecretVersionStageRequest): Promise<UpdateSecretVersionStageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretVersionStageWithOptions(request, runtime);
  }

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
    return $tea.cast<UploadCertificateResponse>(await this.callApi(params, req, runtime), new UploadCertificateResponse({}));
  }

  async uploadCertificate(request: UploadCertificateRequest): Promise<UploadCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCertificateWithOptions(request, runtime);
  }

}
