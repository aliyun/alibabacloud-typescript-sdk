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
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  algorithm?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      algorithm: 'Algorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      algorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricDecryptResponseBody extends $tea.Model {
  requestId?: string;
  plaintext?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      plaintext: 'Plaintext',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      plaintext: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricDecryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AsymmetricDecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AsymmetricDecryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptRequest extends $tea.Model {
  plaintext?: string;
  keyId?: string;
  keyVersionId?: string;
  algorithm?: string;
  static names(): { [key: string]: string } {
    return {
      plaintext: 'Plaintext',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      algorithm: 'Algorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plaintext: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      algorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptResponseBody extends $tea.Model {
  requestId?: string;
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AsymmetricEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AsymmetricEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignRequest extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  algorithm?: string;
  digest?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      algorithm: 'Algorithm',
      digest: 'Digest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      algorithm: 'string',
      digest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignResponseBody extends $tea.Model {
  requestId?: string;
  value?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      value: 'Value',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      value: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AsymmetricSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AsymmetricSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyRequest extends $tea.Model {
  keyId?: string;
  keyVersionId?: string;
  algorithm?: string;
  digest?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      algorithm: 'Algorithm',
      digest: 'Digest',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      algorithm: 'string',
      digest: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyResponseBody extends $tea.Model {
  requestId?: string;
  value?: boolean;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      value: 'Value',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      value: 'boolean',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AsymmetricVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: CancelKeyDeletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelKeyDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptRequest extends $tea.Model {
  certificateId?: string;
  algorithm?: string;
  ciphertextBlob?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      algorithm: 'Algorithm',
      ciphertextBlob: 'CiphertextBlob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      algorithm: 'string',
      ciphertextBlob: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptResponseBody extends $tea.Model {
  requestId?: string;
  certificateId?: string;
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateId: 'CertificateId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CertificatePrivateKeyDecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CertificatePrivateKeyDecryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignRequest extends $tea.Model {
  certificateId?: string;
  algorithm?: string;
  messageType?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      algorithm: 'Algorithm',
      messageType: 'MessageType',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      algorithm: 'string',
      messageType: 'string',
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignResponseBody extends $tea.Model {
  signatureValue?: string;
  requestId?: string;
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      signatureValue: 'SignatureValue',
      requestId: 'RequestId',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureValue: 'string',
      requestId: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CertificatePrivateKeySignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CertificatePrivateKeySignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptRequest extends $tea.Model {
  certificateId?: string;
  algorithm?: string;
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      algorithm: 'Algorithm',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      algorithm: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptResponseBody extends $tea.Model {
  requestId?: string;
  ciphertextBlob?: string;
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ciphertextBlob: 'CiphertextBlob',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ciphertextBlob: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CertificatePublicKeyEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CertificatePublicKeyEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyVerifyRequest extends $tea.Model {
  certificateId?: string;
  algorithm?: string;
  message?: string;
  messageType?: string;
  signatureValue?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      algorithm: 'Algorithm',
      message: 'Message',
      messageType: 'MessageType',
      signatureValue: 'SignatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      algorithm: 'string',
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
  requestId?: string;
  certificateId?: string;
  signatureValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateId: 'CertificateId',
      signatureValid: 'SignatureValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateId: 'string',
      signatureValid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyVerifyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CertificatePublicKeyVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CertificatePublicKeyVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasRequest extends $tea.Model {
  keyId?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      aliasName: 'string',
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
  body: CreateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequest extends $tea.Model {
  subject?: string;
  subjectAlternativeNames?: { [key: string]: any };
  keySpec?: string;
  protectionLevel?: string;
  static names(): { [key: string]: string } {
    return {
      subject: 'Subject',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      keySpec: 'KeySpec',
      protectionLevel: 'ProtectionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subject: 'string',
      subjectAlternativeNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keySpec: 'string',
      protectionLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateShrinkRequest extends $tea.Model {
  subject?: string;
  subjectAlternativeNamesShrink?: string;
  keySpec?: string;
  protectionLevel?: string;
  static names(): { [key: string]: string } {
    return {
      subject: 'Subject',
      subjectAlternativeNamesShrink: 'SubjectAlternativeNames',
      keySpec: 'KeySpec',
      protectionLevel: 'ProtectionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subject: 'string',
      subjectAlternativeNamesShrink: 'string',
      keySpec: 'string',
      protectionLevel: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponseBody extends $tea.Model {
  csr?: string;
  requestId?: string;
  certificateId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      requestId: 'RequestId',
      certificateId: 'CertificateId',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      requestId: 'string',
      certificateId: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyRequest extends $tea.Model {
  description?: string;
  keyUsage?: string;
  origin?: string;
  protectionLevel?: string;
  enableAutomaticRotation?: boolean;
  rotationInterval?: string;
  keySpec?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      keyUsage: 'KeyUsage',
      origin: 'Origin',
      protectionLevel: 'ProtectionLevel',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      rotationInterval: 'RotationInterval',
      keySpec: 'KeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      keyUsage: 'string',
      origin: 'string',
      protectionLevel: 'string',
      enableAutomaticRotation: 'boolean',
      rotationInterval: 'string',
      keySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponseBody extends $tea.Model {
  requestId?: string;
  keyMetadata?: CreateKeyResponseBodyKeyMetadata;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      keyMetadata: 'KeyMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      keyMetadata: CreateKeyResponseBodyKeyMetadata,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  keyVersion?: CreateKeyVersionResponseBodyKeyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      keyVersion: 'KeyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      keyVersion: CreateKeyVersionResponseBodyKeyVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateKeyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateKeyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretRequest extends $tea.Model {
  secretName?: string;
  versionId?: string;
  encryptionKeyId?: string;
  secretData?: string;
  secretDataType?: string;
  description?: string;
  tags?: string;
  secretType?: string;
  extendedConfig?: { [key: string]: any };
  enableAutomaticRotation?: boolean;
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionId: 'VersionId',
      encryptionKeyId: 'EncryptionKeyId',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      description: 'Description',
      tags: 'Tags',
      secretType: 'SecretType',
      extendedConfig: 'ExtendedConfig',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      versionId: 'string',
      encryptionKeyId: 'string',
      secretData: 'string',
      secretDataType: 'string',
      description: 'string',
      tags: 'string',
      secretType: 'string',
      extendedConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      enableAutomaticRotation: 'boolean',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretShrinkRequest extends $tea.Model {
  secretName?: string;
  versionId?: string;
  encryptionKeyId?: string;
  secretData?: string;
  secretDataType?: string;
  description?: string;
  tags?: string;
  secretType?: string;
  extendedConfigShrink?: string;
  enableAutomaticRotation?: boolean;
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionId: 'VersionId',
      encryptionKeyId: 'EncryptionKeyId',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      description: 'Description',
      tags: 'Tags',
      secretType: 'SecretType',
      extendedConfigShrink: 'ExtendedConfig',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      versionId: 'string',
      encryptionKeyId: 'string',
      secretData: 'string',
      secretDataType: 'string',
      description: 'string',
      tags: 'string',
      secretType: 'string',
      extendedConfigShrink: 'string',
      enableAutomaticRotation: 'boolean',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponseBody extends $tea.Model {
  secretName?: string;
  versionId?: string;
  nextRotationDate?: string;
  requestId?: string;
  secretType?: string;
  rotationInterval?: string;
  extendedConfig?: string;
  arn?: string;
  automaticRotation?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionId: 'VersionId',
      nextRotationDate: 'NextRotationDate',
      requestId: 'RequestId',
      secretType: 'SecretType',
      rotationInterval: 'RotationInterval',
      extendedConfig: 'ExtendedConfig',
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      versionId: 'string',
      nextRotationDate: 'string',
      requestId: 'string',
      secretType: 'string',
      rotationInterval: 'string',
      extendedConfig: 'string',
      arn: 'string',
      automaticRotation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  plaintext?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      plaintext: 'Plaintext',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      plaintext: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DeleteKeyMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteKeyMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretRequest extends $tea.Model {
  secretName?: string;
  forceDeleteWithoutRecovery?: string;
  recoveryWindowInDays?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      forceDeleteWithoutRecovery: 'ForceDeleteWithoutRecovery',
      recoveryWindowInDays: 'RecoveryWindowInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      forceDeleteWithoutRecovery: 'string',
      recoveryWindowInDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponseBody extends $tea.Model {
  secretName?: string;
  requestId?: string;
  plannedDeleteTime?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      requestId: 'RequestId',
      plannedDeleteTime: 'PlannedDeleteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      requestId: 'string',
      plannedDeleteTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: DescribeAccountKmsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  status?: string;
  protectionLevel?: string;
  requestId?: string;
  issuer?: string;
  certificateId?: string;
  createdAt?: string;
  keySpec?: string;
  subjectAlternativeNames?: string[];
  signatureAlgorithm?: string;
  subjectKeyIdentifier?: string;
  notAfter?: string;
  updatedAt?: string;
  subject?: string;
  serial?: string;
  subjectPublicKey?: string;
  arn?: string;
  notBefore?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      protectionLevel: 'ProtectionLevel',
      requestId: 'RequestId',
      issuer: 'Issuer',
      certificateId: 'CertificateId',
      createdAt: 'CreatedAt',
      keySpec: 'KeySpec',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      signatureAlgorithm: 'SignatureAlgorithm',
      subjectKeyIdentifier: 'SubjectKeyIdentifier',
      notAfter: 'NotAfter',
      updatedAt: 'UpdatedAt',
      subject: 'Subject',
      serial: 'Serial',
      subjectPublicKey: 'SubjectPublicKey',
      arn: 'Arn',
      notBefore: 'NotBefore',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      protectionLevel: 'string',
      requestId: 'string',
      issuer: 'string',
      certificateId: 'string',
      createdAt: 'string',
      keySpec: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
      signatureAlgorithm: 'string',
      subjectKeyIdentifier: 'string',
      notAfter: 'string',
      updatedAt: 'string',
      subject: 'string',
      serial: 'string',
      subjectPublicKey: 'string',
      arn: 'string',
      notBefore: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  keyMetadata?: DescribeKeyResponseBodyKeyMetadata;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      keyMetadata: 'KeyMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      keyMetadata: DescribeKeyResponseBodyKeyMetadata,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  keyVersion?: DescribeKeyVersionResponseBodyKeyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      keyVersion: 'KeyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      keyVersion: DescribeKeyVersionResponseBodyKeyVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeKeyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeKeyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  regions?: DescribeRegionsResponseBodyRegions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      regions: DescribeRegionsResponseBodyRegions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretRequest extends $tea.Model {
  secretName?: string;
  fetchTags?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      fetchTags: 'FetchTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      fetchTags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBody extends $tea.Model {
  description?: string;
  rotationInterval?: string;
  lastRotationDate?: string;
  requestId?: string;
  secretType?: string;
  createTime?: string;
  automaticRotation?: string;
  secretName?: string;
  nextRotationDate?: string;
  updateTime?: string;
  extendedConfig?: string;
  plannedDeleteTime?: string;
  arn?: string;
  tags?: DescribeSecretResponseBodyTags;
  encryptionKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      rotationInterval: 'RotationInterval',
      lastRotationDate: 'LastRotationDate',
      requestId: 'RequestId',
      secretType: 'SecretType',
      createTime: 'CreateTime',
      automaticRotation: 'AutomaticRotation',
      secretName: 'SecretName',
      nextRotationDate: 'NextRotationDate',
      updateTime: 'UpdateTime',
      extendedConfig: 'ExtendedConfig',
      plannedDeleteTime: 'PlannedDeleteTime',
      arn: 'Arn',
      tags: 'Tags',
      encryptionKeyId: 'EncryptionKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      rotationInterval: 'string',
      lastRotationDate: 'string',
      requestId: 'string',
      secretType: 'string',
      createTime: 'string',
      automaticRotation: 'string',
      secretName: 'string',
      nextRotationDate: 'string',
      updateTime: 'string',
      extendedConfig: 'string',
      plannedDeleteTime: 'string',
      arn: 'string',
      tags: DescribeSecretResponseBodyTags,
      encryptionKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponseBody extends $tea.Model {
  protectionLevels?: DescribeServiceResponseBodyProtectionLevels;
  requestId?: string;
  keySpecs?: DescribeServiceResponseBodyKeySpecs;
  static names(): { [key: string]: string } {
    return {
      protectionLevels: 'ProtectionLevels',
      requestId: 'RequestId',
      keySpecs: 'KeySpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectionLevels: DescribeServiceResponseBodyProtectionLevels,
      requestId: 'string',
      keySpecs: DescribeServiceResponseBodyKeySpecs,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServiceResponseBody,
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
  body: DisableKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: EnableKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EnableKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptRequest extends $tea.Model {
  keyId?: string;
  plaintext?: string;
  encryptionContext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      plaintext: 'Plaintext',
      encryptionContext: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      plaintext: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptShrinkRequest extends $tea.Model {
  keyId?: string;
  plaintext?: string;
  encryptionContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      plaintext: 'Plaintext',
      encryptionContextShrink: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      plaintext: 'string',
      encryptionContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponseBody extends $tea.Model {
  requestId?: string;
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCertificateRequest extends $tea.Model {
  certificateId?: string;
  passphrase?: string;
  exportFormat?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      passphrase: 'Passphrase',
      exportFormat: 'ExportFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      passphrase: 'string',
      exportFormat: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCertificateResponseBody extends $tea.Model {
  privateKey?: string;
  requestId?: string;
  certificateId?: string;
  certificateChain?: string;
  PKCS12Blob?: string;
  certificate?: string;
  static names(): { [key: string]: string } {
    return {
      privateKey: 'PrivateKey',
      requestId: 'RequestId',
      certificateId: 'CertificateId',
      certificateChain: 'CertificateChain',
      PKCS12Blob: 'PKCS12Blob',
      certificate: 'Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateKey: 'string',
      requestId: 'string',
      certificateId: 'string',
      certificateChain: 'string',
      PKCS12Blob: 'string',
      certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportCertificateResponseBody,
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
  wrappingKeySpec?: string;
  wrappingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      encryptionContext: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingKeySpec: 'WrappingKeySpec',
      wrappingAlgorithm: 'WrappingAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      publicKeyBlob: 'string',
      wrappingKeySpec: 'string',
      wrappingAlgorithm: 'string',
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
  wrappingKeySpec?: string;
  wrappingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      encryptionContextShrink: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingKeySpec: 'WrappingKeySpec',
      wrappingAlgorithm: 'WrappingAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      encryptionContextShrink: 'string',
      publicKeyBlob: 'string',
      wrappingKeySpec: 'string',
      wrappingAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyResponseBody extends $tea.Model {
  requestId?: string;
  exportedDataKey?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      exportedDataKey: 'ExportedDataKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      exportedDataKey: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExportDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExportDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyRequest extends $tea.Model {
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  encryptionContext?: { [key: string]: any };
  publicKeyBlob?: string;
  wrappingKeySpec?: string;
  wrappingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      encryptionContext: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingKeySpec: 'WrappingKeySpec',
      wrappingAlgorithm: 'WrappingAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      publicKeyBlob: 'string',
      wrappingKeySpec: 'string',
      wrappingAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyShrinkRequest extends $tea.Model {
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  encryptionContextShrink?: string;
  publicKeyBlob?: string;
  wrappingKeySpec?: string;
  wrappingAlgorithm?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      encryptionContextShrink: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingKeySpec: 'WrappingKeySpec',
      wrappingAlgorithm: 'WrappingAlgorithm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      encryptionContextShrink: 'string',
      publicKeyBlob: 'string',
      wrappingKeySpec: 'string',
      wrappingAlgorithm: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyResponseBody extends $tea.Model {
  requestId?: string;
  ciphertextBlob?: string;
  exportedDataKey?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ciphertextBlob: 'CiphertextBlob',
      exportedDataKey: 'ExportedDataKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ciphertextBlob: 'string',
      exportedDataKey: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateAndExportDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateAndExportDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyRequest extends $tea.Model {
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  encryptionContext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      encryptionContext: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyShrinkRequest extends $tea.Model {
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  encryptionContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      encryptionContextShrink: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      encryptionContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyResponseBody extends $tea.Model {
  requestId?: string;
  ciphertextBlob?: string;
  plaintext?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ciphertextBlob: 'CiphertextBlob',
      plaintext: 'Plaintext',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ciphertextBlob: 'string',
      plaintext: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GenerateDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextRequest extends $tea.Model {
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  encryptionContext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      encryptionContext: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextShrinkRequest extends $tea.Model {
  keyId?: string;
  keySpec?: string;
  numberOfBytes?: number;
  encryptionContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      encryptionContextShrink: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      encryptionContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextResponseBody extends $tea.Model {
  requestId?: string;
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GenerateDataKeyWithoutPlaintextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  csr?: string;
  requestId?: string;
  certificateId?: string;
  certificateChain?: string;
  certificate?: string;
  static names(): { [key: string]: string } {
    return {
      csr: 'Csr',
      requestId: 'RequestId',
      certificateId: 'CertificateId',
      certificateChain: 'CertificateChain',
      certificate: 'Certificate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      csr: 'string',
      requestId: 'string',
      certificateId: 'string',
      certificateChain: 'string',
      certificate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  publicKey?: string;
  keyId?: string;
  tokenExpireTime?: string;
  importToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      publicKey: 'PublicKey',
      keyId: 'KeyId',
      tokenExpireTime: 'TokenExpireTime',
      importToken: 'ImportToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      publicKey: 'string',
      keyId: 'string',
      tokenExpireTime: 'string',
      importToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersForImportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetParametersForImportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  requestId?: string;
  publicKey?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      publicKey: 'PublicKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      publicKey: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPublicKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPublicKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRandomPasswordRequest extends $tea.Model {
  passwordLength?: string;
  excludeCharacters?: string;
  excludeLowercase?: string;
  excludeUppercase?: string;
  excludeNumbers?: string;
  excludePunctuation?: string;
  requireEachIncludedType?: string;
  static names(): { [key: string]: string } {
    return {
      passwordLength: 'PasswordLength',
      excludeCharacters: 'ExcludeCharacters',
      excludeLowercase: 'ExcludeLowercase',
      excludeUppercase: 'ExcludeUppercase',
      excludeNumbers: 'ExcludeNumbers',
      excludePunctuation: 'ExcludePunctuation',
      requireEachIncludedType: 'RequireEachIncludedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passwordLength: 'string',
      excludeCharacters: 'string',
      excludeLowercase: 'string',
      excludeUppercase: 'string',
      excludeNumbers: 'string',
      excludePunctuation: 'string',
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
  body: GetRandomPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRandomPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueRequest extends $tea.Model {
  secretName?: string;
  versionStage?: string;
  versionId?: string;
  fetchExtendedConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionStage: 'VersionStage',
      versionId: 'VersionId',
      fetchExtendedConfig: 'FetchExtendedConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      versionStage: 'string',
      versionId: 'string',
      fetchExtendedConfig: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponseBody extends $tea.Model {
  versionId?: string;
  rotationInterval?: string;
  lastRotationDate?: string;
  requestId?: string;
  secretType?: string;
  createTime?: string;
  secretDataType?: string;
  versionStages?: GetSecretValueResponseBodyVersionStages;
  automaticRotation?: string;
  secretName?: string;
  nextRotationDate?: string;
  extendedConfig?: string;
  secretData?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      rotationInterval: 'RotationInterval',
      lastRotationDate: 'LastRotationDate',
      requestId: 'RequestId',
      secretType: 'SecretType',
      createTime: 'CreateTime',
      secretDataType: 'SecretDataType',
      versionStages: 'VersionStages',
      automaticRotation: 'AutomaticRotation',
      secretName: 'SecretName',
      nextRotationDate: 'NextRotationDate',
      extendedConfig: 'ExtendedConfig',
      secretData: 'SecretData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      rotationInterval: 'string',
      lastRotationDate: 'string',
      requestId: 'string',
      secretType: 'string',
      createTime: 'string',
      secretDataType: 'string',
      versionStages: GetSecretValueResponseBodyVersionStages,
      automaticRotation: 'string',
      secretName: 'string',
      nextRotationDate: 'string',
      extendedConfig: 'string',
      secretData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSecretValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSecretValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCertificateRequest extends $tea.Model {
  PKCS12Blob?: string;
  passphrase?: string;
  static names(): { [key: string]: string } {
    return {
      PKCS12Blob: 'PKCS12Blob',
      passphrase: 'Passphrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      PKCS12Blob: 'string',
      passphrase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCertificateResponseBody extends $tea.Model {
  requestId?: string;
  certificateId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateId: 'CertificateId',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateId: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportEncryptionCertificateRequest extends $tea.Model {
  certificateId?: string;
  encryptedSymmetricKey?: string;
  encryptedPrivateKey?: string;
  symmetricAlgorithm?: string;
  asymmetricAlgorithm?: string;
  certificate?: string;
  certificateChain?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      encryptedSymmetricKey: 'EncryptedSymmetricKey',
      encryptedPrivateKey: 'EncryptedPrivateKey',
      symmetricAlgorithm: 'SymmetricAlgorithm',
      asymmetricAlgorithm: 'AsymmetricAlgorithm',
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      encryptedSymmetricKey: 'string',
      encryptedPrivateKey: 'string',
      symmetricAlgorithm: 'string',
      asymmetricAlgorithm: 'string',
      certificate: 'string',
      certificateChain: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportEncryptionCertificateResponseBody extends $tea.Model {
  requestId?: string;
  certificateId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      certificateId: 'CertificateId',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      certificateId: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportEncryptionCertificateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ImportEncryptionCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ImportEncryptionCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyMaterialRequest extends $tea.Model {
  keyId?: string;
  encryptedKeyMaterial?: string;
  importToken?: string;
  keyMaterialExpireUnix?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      encryptedKeyMaterial: 'EncryptedKeyMaterial',
      importToken: 'ImportToken',
      keyMaterialExpireUnix: 'KeyMaterialExpireUnix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      encryptedKeyMaterial: 'string',
      importToken: 'string',
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
  body: ImportKeyMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  aliases?: ListAliasesResponseBodyAliases;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      aliases: 'Aliases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      aliases: ListAliasesResponseBodyAliases,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAliasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  aliases?: ListAliasesByKeyIdResponseBodyAliases;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      aliases: 'Aliases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      aliases: ListAliasesByKeyIdResponseBodyAliases,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAliasesByKeyIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAliasesByKeyIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesRequest extends $tea.Model {
  subject?: string;
  issuer?: string;
  status?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      subject: 'Subject',
      issuer: 'Issuer',
      status: 'Status',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subject: 'string',
      issuer: 'string',
      status: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  certificateSummaryList?: ListCertificatesResponseBodyCertificateSummaryList;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      certificateSummaryList: 'CertificateSummaryList',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      certificateSummaryList: ListCertificatesResponseBodyCertificateSummaryList,
      totalSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  filters?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      filters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  keys?: ListKeysResponseBodyKeys;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
      keys: ListKeysResponseBodyKeys,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListKeysResponseBody,
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
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      keyVersions: 'KeyVersions',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersions: ListKeyVersionsResponseBodyKeyVersions,
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListKeyVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListKeyVersionsResponseBody,
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
  body: ListResourceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsRequest extends $tea.Model {
  fetchTags?: string;
  pageNumber?: number;
  pageSize?: number;
  filters?: string;
  static names(): { [key: string]: string } {
    return {
      fetchTags: 'FetchTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      filters: 'Filters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchTags: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      filters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  secretList?: ListSecretsResponseBodySecretList;
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secretList: 'SecretList',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      secretList: ListSecretsResponseBodySecretList,
      pageNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecretsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecretsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsRequest extends $tea.Model {
  secretName?: string;
  includeDeprecated?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      includeDeprecated: 'IncludeDeprecated',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      includeDeprecated: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBody extends $tea.Model {
  secretName?: string;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  pageNumber?: number;
  versionIds?: ListSecretVersionIdsResponseBodyVersionIds;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      pageNumber: 'PageNumber',
      versionIds: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      pageNumber: 'number',
      versionIds: ListSecretVersionIdsResponseBodyVersionIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecretVersionIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecretVersionIdsResponseBody,
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
  body: OpenKmsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenKmsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueRequest extends $tea.Model {
  versionId?: string;
  secretName?: string;
  secretData?: string;
  secretDataType?: string;
  versionStages?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      secretName: 'SecretName',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      secretName: 'string',
      secretData: 'string',
      secretDataType: 'string',
      versionStages: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponseBody extends $tea.Model {
  secretName?: string;
  versionId?: string;
  requestId?: string;
  versionStages?: PutSecretValueResponseBodyVersionStages;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionId: 'VersionId',
      requestId: 'RequestId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      versionId: 'string',
      requestId: 'string',
      versionStages: PutSecretValueResponseBodyVersionStages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutSecretValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutSecretValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptRequest extends $tea.Model {
  ciphertextBlob?: string;
  sourceKeyId?: string;
  sourceKeyVersionId?: string;
  sourceEncryptionAlgorithm?: string;
  sourceEncryptionContext?: { [key: string]: any };
  destinationKeyId?: string;
  destinationEncryptionContext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      sourceKeyId: 'SourceKeyId',
      sourceKeyVersionId: 'SourceKeyVersionId',
      sourceEncryptionAlgorithm: 'SourceEncryptionAlgorithm',
      sourceEncryptionContext: 'SourceEncryptionContext',
      destinationKeyId: 'DestinationKeyId',
      destinationEncryptionContext: 'DestinationEncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      sourceKeyId: 'string',
      sourceKeyVersionId: 'string',
      sourceEncryptionAlgorithm: 'string',
      sourceEncryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      destinationKeyId: 'string',
      destinationEncryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptShrinkRequest extends $tea.Model {
  ciphertextBlob?: string;
  sourceKeyId?: string;
  sourceKeyVersionId?: string;
  sourceEncryptionAlgorithm?: string;
  sourceEncryptionContextShrink?: string;
  destinationKeyId?: string;
  destinationEncryptionContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      sourceKeyId: 'SourceKeyId',
      sourceKeyVersionId: 'SourceKeyVersionId',
      sourceEncryptionAlgorithm: 'SourceEncryptionAlgorithm',
      sourceEncryptionContextShrink: 'SourceEncryptionContext',
      destinationKeyId: 'DestinationKeyId',
      destinationEncryptionContextShrink: 'DestinationEncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      sourceKeyId: 'string',
      sourceKeyVersionId: 'string',
      sourceEncryptionAlgorithm: 'string',
      sourceEncryptionContextShrink: 'string',
      destinationKeyId: 'string',
      destinationEncryptionContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptResponseBody extends $tea.Model {
  requestId?: string;
  ciphertextBlob?: string;
  keyId?: string;
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  secretName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestoreSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  versionId?: string;
  secretName?: string;
  requestId?: string;
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
      secretName: 'SecretName',
      requestId: 'RequestId',
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
      secretName: 'string',
      requestId: 'string',
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateSecretResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RotateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: ScheduleKeyDeletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ScheduleKeyDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceRequest extends $tea.Model {
  keyId?: string;
  tags?: string;
  secretName?: string;
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      tags: 'Tags',
      secretName: 'SecretName',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      tags: 'string',
      secretName: 'string',
      certificateId: 'string',
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
  body: TagResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceRequest extends $tea.Model {
  keyId?: string;
  tagKeys?: string;
  secretName?: string;
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      tagKeys: 'TagKeys',
      secretName: 'SecretName',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      tagKeys: 'string',
      secretName: 'string',
      certificateId: 'string',
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
  body: UntagResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasRequest extends $tea.Model {
  keyId?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      aliasName: 'string',
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
  body: UpdateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateCertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCertificateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeyDescriptionRequest extends $tea.Model {
  keyId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      description: 'string',
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
  body: UpdateKeyDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateKeyDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRotationPolicyRequest extends $tea.Model {
  keyId?: string;
  enableAutomaticRotation?: boolean;
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      enableAutomaticRotation: 'boolean',
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
  body: UpdateRotationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRotationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyRequest extends $tea.Model {
  secretName?: string;
  enableAutomaticRotation?: boolean;
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      enableAutomaticRotation: 'boolean',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyResponseBody extends $tea.Model {
  secretName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSecretRotationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSecretRotationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageRequest extends $tea.Model {
  secretName?: string;
  versionStage?: string;
  removeFromVersion?: string;
  moveToVersion?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionStage: 'VersionStage',
      removeFromVersion: 'RemoveFromVersion',
      moveToVersion: 'MoveToVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      versionStage: 'string',
      removeFromVersion: 'string',
      moveToVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageResponseBody extends $tea.Model {
  secretName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSecretVersionStageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSecretVersionStageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCertificateRequest extends $tea.Model {
  certificateId?: string;
  certificate?: string;
  certificateChain?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificate: 'string',
      certificateChain: 'string',
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
  body: UploadCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UploadCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponseBodyKeyMetadata extends $tea.Model {
  keyId?: string;
  nextRotationDate?: string;
  keyState?: string;
  rotationInterval?: string;
  arn?: string;
  creator?: string;
  deleteDate?: string;
  lastRotationDate?: string;
  description?: string;
  primaryKeyVersion?: string;
  origin?: string;
  keySpec?: string;
  materialExpireTime?: string;
  automaticRotation?: string;
  protectionLevel?: string;
  keyUsage?: string;
  creationDate?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      nextRotationDate: 'NextRotationDate',
      keyState: 'KeyState',
      rotationInterval: 'RotationInterval',
      arn: 'Arn',
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      lastRotationDate: 'LastRotationDate',
      description: 'Description',
      primaryKeyVersion: 'PrimaryKeyVersion',
      origin: 'Origin',
      keySpec: 'KeySpec',
      materialExpireTime: 'MaterialExpireTime',
      automaticRotation: 'AutomaticRotation',
      protectionLevel: 'ProtectionLevel',
      keyUsage: 'KeyUsage',
      creationDate: 'CreationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      nextRotationDate: 'string',
      keyState: 'string',
      rotationInterval: 'string',
      arn: 'string',
      creator: 'string',
      deleteDate: 'string',
      lastRotationDate: 'string',
      description: 'string',
      primaryKeyVersion: 'string',
      origin: 'string',
      keySpec: 'string',
      materialExpireTime: 'string',
      automaticRotation: 'string',
      protectionLevel: 'string',
      keyUsage: 'string',
      creationDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponseBodyKeyVersion extends $tea.Model {
  keyVersionId?: string;
  keyId?: string;
  creationDate?: string;
  static names(): { [key: string]: string } {
    return {
      keyVersionId: 'KeyVersionId',
      keyId: 'KeyId',
      creationDate: 'CreationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersionId: 'string',
      keyId: 'string',
      creationDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyResponseBodyKeyMetadata extends $tea.Model {
  keyId?: string;
  nextRotationDate?: string;
  keyState?: string;
  rotationInterval?: string;
  arn?: string;
  creator?: string;
  deleteDate?: string;
  lastRotationDate?: string;
  description?: string;
  primaryKeyVersion?: string;
  origin?: string;
  keySpec?: string;
  materialExpireTime?: string;
  automaticRotation?: string;
  protectionLevel?: string;
  keyUsage?: string;
  creationDate?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      nextRotationDate: 'NextRotationDate',
      keyState: 'KeyState',
      rotationInterval: 'RotationInterval',
      arn: 'Arn',
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      lastRotationDate: 'LastRotationDate',
      description: 'Description',
      primaryKeyVersion: 'PrimaryKeyVersion',
      origin: 'Origin',
      keySpec: 'KeySpec',
      materialExpireTime: 'MaterialExpireTime',
      automaticRotation: 'AutomaticRotation',
      protectionLevel: 'ProtectionLevel',
      keyUsage: 'KeyUsage',
      creationDate: 'CreationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      nextRotationDate: 'string',
      keyState: 'string',
      rotationInterval: 'string',
      arn: 'string',
      creator: 'string',
      deleteDate: 'string',
      lastRotationDate: 'string',
      description: 'string',
      primaryKeyVersion: 'string',
      origin: 'string',
      keySpec: 'string',
      materialExpireTime: 'string',
      automaticRotation: 'string',
      protectionLevel: 'string',
      keyUsage: 'string',
      creationDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionResponseBodyKeyVersion extends $tea.Model {
  keyVersionId?: string;
  keyId?: string;
  creationDate?: string;
  static names(): { [key: string]: string } {
    return {
      keyVersionId: 'KeyVersionId',
      keyId: 'KeyId',
      creationDate: 'CreationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersionId: 'string',
      keyId: 'string',
      creationDate: 'string',
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
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
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

export class DescribeServiceResponseBodyProtectionLevelsProtectionLevel extends $tea.Model {
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponseBodyProtectionLevels extends $tea.Model {
  protectionLevel?: DescribeServiceResponseBodyProtectionLevelsProtectionLevel[];
  static names(): { [key: string]: string } {
    return {
      protectionLevel: 'ProtectionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectionLevel: { 'type': 'array', 'itemType': DescribeServiceResponseBodyProtectionLevelsProtectionLevel },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponseBodyKeySpecsKeySpecSupportedProtectionLevels extends $tea.Model {
  supportedProtectionLevel?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedProtectionLevel: 'SupportedProtectionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedProtectionLevel: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponseBodyKeySpecsKeySpecUsages extends $tea.Model {
  usage?: string[];
  static names(): { [key: string]: string } {
    return {
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponseBodyKeySpecsKeySpec extends $tea.Model {
  supportedProtectionLevels?: DescribeServiceResponseBodyKeySpecsKeySpecSupportedProtectionLevels;
  name?: string;
  usages?: DescribeServiceResponseBodyKeySpecsKeySpecUsages;
  static names(): { [key: string]: string } {
    return {
      supportedProtectionLevels: 'SupportedProtectionLevels',
      name: 'Name',
      usages: 'Usages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedProtectionLevels: DescribeServiceResponseBodyKeySpecsKeySpecSupportedProtectionLevels,
      name: 'string',
      usages: DescribeServiceResponseBodyKeySpecsKeySpecUsages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponseBodyKeySpecs extends $tea.Model {
  keySpec?: DescribeServiceResponseBodyKeySpecsKeySpec[];
  static names(): { [key: string]: string } {
    return {
      keySpec: 'KeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keySpec: { 'type': 'array', 'itemType': DescribeServiceResponseBodyKeySpecsKeySpec },
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
  keyId?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasArn: 'AliasArn',
      keyId: 'KeyId',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasArn: 'string',
      keyId: 'string',
      aliasName: 'string',
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
  keyId?: string;
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasArn: 'AliasArn',
      keyId: 'KeyId',
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasArn: 'string',
      keyId: 'string',
      aliasName: 'string',
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

export class ListCertificatesResponseBodyCertificateSummaryListCertificateSummary extends $tea.Model {
  status?: string;
  keySpec?: string;
  subject?: string;
  protectionLevel?: string;
  issuer?: string;
  notBefore?: string;
  notAfter?: string;
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      keySpec: 'KeySpec',
      subject: 'Subject',
      protectionLevel: 'ProtectionLevel',
      issuer: 'Issuer',
      notBefore: 'NotBefore',
      notAfter: 'NotAfter',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      keySpec: 'string',
      subject: 'string',
      protectionLevel: 'string',
      issuer: 'string',
      notBefore: 'string',
      notAfter: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCertificatesResponseBodyCertificateSummaryList extends $tea.Model {
  certificateSummary?: ListCertificatesResponseBodyCertificateSummaryListCertificateSummary[];
  static names(): { [key: string]: string } {
    return {
      certificateSummary: 'CertificateSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateSummary: { 'type': 'array', 'itemType': ListCertificatesResponseBodyCertificateSummaryListCertificateSummary },
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

export class ListKeyVersionsResponseBodyKeyVersionsKeyVersion extends $tea.Model {
  keyVersionId?: string;
  keyId?: string;
  creationDate?: string;
  static names(): { [key: string]: string } {
    return {
      keyVersionId: 'KeyVersionId',
      keyId: 'KeyId',
      creationDate: 'CreationDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersionId: 'string',
      keyId: 'string',
      creationDate: 'string',
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

export class ListResourceTagsResponseBodyTagsTag extends $tea.Model {
  keyId?: string;
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      tagValue: 'string',
      tagKey: 'string',
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

export class ListSecretsResponseBodySecretListSecretTagsTag extends $tea.Model {
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
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
  updateTime?: string;
  createTime?: string;
  secretName?: string;
  tags?: ListSecretsResponseBodySecretListSecretTags;
  secretType?: string;
  plannedDeleteTime?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      secretName: 'SecretName',
      tags: 'Tags',
      secretType: 'SecretType',
      plannedDeleteTime: 'PlannedDeleteTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'string',
      createTime: 'string',
      secretName: 'string',
      tags: ListSecretsResponseBodySecretListSecretTags,
      secretType: 'string',
      plannedDeleteTime: 'string',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AsymmetricDecryptResponse>(await this.doRPCRequest("AsymmetricDecrypt", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AsymmetricDecryptResponse({}));
  }

  async asymmetricDecrypt(request: AsymmetricDecryptRequest): Promise<AsymmetricDecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricDecryptWithOptions(request, runtime);
  }

  async asymmetricEncryptWithOptions(request: AsymmetricEncryptRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricEncryptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AsymmetricEncryptResponse>(await this.doRPCRequest("AsymmetricEncrypt", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AsymmetricEncryptResponse({}));
  }

  async asymmetricEncrypt(request: AsymmetricEncryptRequest): Promise<AsymmetricEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricEncryptWithOptions(request, runtime);
  }

  async asymmetricSignWithOptions(request: AsymmetricSignRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricSignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AsymmetricSignResponse>(await this.doRPCRequest("AsymmetricSign", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AsymmetricSignResponse({}));
  }

  async asymmetricSign(request: AsymmetricSignRequest): Promise<AsymmetricSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricSignWithOptions(request, runtime);
  }

  async asymmetricVerifyWithOptions(request: AsymmetricVerifyRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<AsymmetricVerifyResponse>(await this.doRPCRequest("AsymmetricVerify", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new AsymmetricVerifyResponse({}));
  }

  async asymmetricVerify(request: AsymmetricVerifyRequest): Promise<AsymmetricVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricVerifyWithOptions(request, runtime);
  }

  async cancelKeyDeletionWithOptions(request: CancelKeyDeletionRequest, runtime: $Util.RuntimeOptions): Promise<CancelKeyDeletionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CancelKeyDeletionResponse>(await this.doRPCRequest("CancelKeyDeletion", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CancelKeyDeletionResponse({}));
  }

  async cancelKeyDeletion(request: CancelKeyDeletionRequest): Promise<CancelKeyDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelKeyDeletionWithOptions(request, runtime);
  }

  async certificatePrivateKeyDecryptWithOptions(request: CertificatePrivateKeyDecryptRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePrivateKeyDecryptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CertificatePrivateKeyDecryptResponse>(await this.doRPCRequest("CertificatePrivateKeyDecrypt", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CertificatePrivateKeyDecryptResponse({}));
  }

  async certificatePrivateKeyDecrypt(request: CertificatePrivateKeyDecryptRequest): Promise<CertificatePrivateKeyDecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePrivateKeyDecryptWithOptions(request, runtime);
  }

  async certificatePrivateKeySignWithOptions(request: CertificatePrivateKeySignRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePrivateKeySignResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CertificatePrivateKeySignResponse>(await this.doRPCRequest("CertificatePrivateKeySign", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CertificatePrivateKeySignResponse({}));
  }

  async certificatePrivateKeySign(request: CertificatePrivateKeySignRequest): Promise<CertificatePrivateKeySignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePrivateKeySignWithOptions(request, runtime);
  }

  async certificatePublicKeyEncryptWithOptions(request: CertificatePublicKeyEncryptRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePublicKeyEncryptResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CertificatePublicKeyEncryptResponse>(await this.doRPCRequest("CertificatePublicKeyEncrypt", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CertificatePublicKeyEncryptResponse({}));
  }

  async certificatePublicKeyEncrypt(request: CertificatePublicKeyEncryptRequest): Promise<CertificatePublicKeyEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePublicKeyEncryptWithOptions(request, runtime);
  }

  async certificatePublicKeyVerifyWithOptions(request: CertificatePublicKeyVerifyRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePublicKeyVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CertificatePublicKeyVerifyResponse>(await this.doRPCRequest("CertificatePublicKeyVerify", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CertificatePublicKeyVerifyResponse({}));
  }

  async certificatePublicKeyVerify(request: CertificatePublicKeyVerifyRequest): Promise<CertificatePublicKeyVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePublicKeyVerifyWithOptions(request, runtime);
  }

  async createAliasWithOptions(request: CreateAliasRequest, runtime: $Util.RuntimeOptions): Promise<CreateAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAliasResponse>(await this.doRPCRequest("CreateAlias", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAliasResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateCertificateResponse>(await this.doRPCRequest("CreateCertificate", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateCertificateResponse({}));
  }

  async createCertificate(request: CreateCertificateRequest): Promise<CreateCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithOptions(request, runtime);
  }

  async createKeyWithOptions(request: CreateKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateKeyResponse>(await this.doRPCRequest("CreateKey", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateKeyResponse({}));
  }

  async createKey(request: CreateKeyRequest): Promise<CreateKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyWithOptions(request, runtime);
  }

  async createKeyVersionWithOptions(request: CreateKeyVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateKeyVersionResponse>(await this.doRPCRequest("CreateKeyVersion", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateKeyVersionResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateSecretResponse>(await this.doRPCRequest("CreateSecret", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new CreateSecretResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DecryptResponse>(await this.doRPCRequest("Decrypt", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DecryptResponse({}));
  }

  async decrypt(request: DecryptRequest): Promise<DecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  async deleteAliasWithOptions(request: DeleteAliasRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteAliasResponse>(await this.doRPCRequest("DeleteAlias", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteAliasResponse({}));
  }

  async deleteAlias(request: DeleteAliasRequest): Promise<DeleteAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAliasWithOptions(request, runtime);
  }

  async deleteCertificateWithOptions(request: DeleteCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteCertificateResponse>(await this.doRPCRequest("DeleteCertificate", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteCertificateResponse({}));
  }

  async deleteCertificate(request: DeleteCertificateRequest): Promise<DeleteCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCertificateWithOptions(request, runtime);
  }

  async deleteKeyMaterialWithOptions(request: DeleteKeyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeyMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteKeyMaterialResponse>(await this.doRPCRequest("DeleteKeyMaterial", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteKeyMaterialResponse({}));
  }

  async deleteKeyMaterial(request: DeleteKeyMaterialRequest): Promise<DeleteKeyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyMaterialWithOptions(request, runtime);
  }

  async deleteSecretWithOptions(request: DeleteSecretRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteSecretResponse>(await this.doRPCRequest("DeleteSecret", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteSecretResponse({}));
  }

  async deleteSecret(request: DeleteSecretRequest): Promise<DeleteSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretWithOptions(request, runtime);
  }

  async describeAccountKmsStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAccountKmsStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeAccountKmsStatusResponse>(await this.doRPCRequest("DescribeAccountKmsStatus", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAccountKmsStatusResponse({}));
  }

  async describeAccountKmsStatus(): Promise<DescribeAccountKmsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountKmsStatusWithOptions(runtime);
  }

  async describeCertificateWithOptions(request: DescribeCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeCertificateResponse>(await this.doRPCRequest("DescribeCertificate", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeCertificateResponse({}));
  }

  async describeCertificate(request: DescribeCertificateRequest): Promise<DescribeCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateWithOptions(request, runtime);
  }

  async describeKeyWithOptions(request: DescribeKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeKeyResponse>(await this.doRPCRequest("DescribeKey", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeKeyResponse({}));
  }

  async describeKey(request: DescribeKeyRequest): Promise<DescribeKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyWithOptions(request, runtime);
  }

  async describeKeyVersionWithOptions(request: DescribeKeyVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeKeyVersionResponse>(await this.doRPCRequest("DescribeKeyVersion", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeKeyVersionResponse({}));
  }

  async describeKeyVersion(request: DescribeKeyVersionRequest): Promise<DescribeKeyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyVersionWithOptions(request, runtime);
  }

  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeRegionsResponse>(await this.doRPCRequest("DescribeRegions", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  async describeSecretWithOptions(request: DescribeSecretRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSecretResponse>(await this.doRPCRequest("DescribeSecret", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSecretResponse({}));
  }

  async describeSecret(request: DescribeSecretRequest): Promise<DescribeSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecretWithOptions(request, runtime);
  }

  async describeServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeServiceResponse>(await this.doRPCRequest("DescribeService", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeServiceResponse({}));
  }

  async describeService(): Promise<DescribeServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeServiceWithOptions(runtime);
  }

  async disableKeyWithOptions(request: DisableKeyRequest, runtime: $Util.RuntimeOptions): Promise<DisableKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DisableKeyResponse>(await this.doRPCRequest("DisableKey", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new DisableKeyResponse({}));
  }

  async disableKey(request: DisableKeyRequest): Promise<DisableKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableKeyWithOptions(request, runtime);
  }

  async enableKeyWithOptions(request: EnableKeyRequest, runtime: $Util.RuntimeOptions): Promise<EnableKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EnableKeyResponse>(await this.doRPCRequest("EnableKey", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new EnableKeyResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<EncryptResponse>(await this.doRPCRequest("Encrypt", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new EncryptResponse({}));
  }

  async encrypt(request: EncryptRequest): Promise<EncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  async exportCertificateWithOptions(request: ExportCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ExportCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportCertificateResponse>(await this.doRPCRequest("ExportCertificate", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ExportCertificateResponse({}));
  }

  async exportCertificate(request: ExportCertificateRequest): Promise<ExportCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportCertificateWithOptions(request, runtime);
  }

  async exportDataKeyWithOptions(tmpReq: ExportDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<ExportDataKeyResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExportDataKeyResponse>(await this.doRPCRequest("ExportDataKey", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ExportDataKeyResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateAndExportDataKeyResponse>(await this.doRPCRequest("GenerateAndExportDataKey", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateAndExportDataKeyResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateDataKeyResponse>(await this.doRPCRequest("GenerateDataKey", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateDataKeyResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GenerateDataKeyWithoutPlaintextResponse>(await this.doRPCRequest("GenerateDataKeyWithoutPlaintext", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GenerateDataKeyWithoutPlaintextResponse({}));
  }

  async generateDataKeyWithoutPlaintext(request: GenerateDataKeyWithoutPlaintextRequest): Promise<GenerateDataKeyWithoutPlaintextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDataKeyWithoutPlaintextWithOptions(request, runtime);
  }

  async getCertificateWithOptions(request: GetCertificateRequest, runtime: $Util.RuntimeOptions): Promise<GetCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCertificateResponse>(await this.doRPCRequest("GetCertificate", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetCertificateResponse({}));
  }

  async getCertificate(request: GetCertificateRequest): Promise<GetCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertificateWithOptions(request, runtime);
  }

  async getParametersForImportWithOptions(request: GetParametersForImportRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersForImportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetParametersForImportResponse>(await this.doRPCRequest("GetParametersForImport", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetParametersForImportResponse({}));
  }

  async getParametersForImport(request: GetParametersForImportRequest): Promise<GetParametersForImportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersForImportWithOptions(request, runtime);
  }

  async getPublicKeyWithOptions(request: GetPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetPublicKeyResponse>(await this.doRPCRequest("GetPublicKey", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetPublicKeyResponse({}));
  }

  async getPublicKey(request: GetPublicKeyRequest): Promise<GetPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicKeyWithOptions(request, runtime);
  }

  async getRandomPasswordWithOptions(request: GetRandomPasswordRequest, runtime: $Util.RuntimeOptions): Promise<GetRandomPasswordResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetRandomPasswordResponse>(await this.doRPCRequest("GetRandomPassword", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetRandomPasswordResponse({}));
  }

  async getRandomPassword(request: GetRandomPasswordRequest): Promise<GetRandomPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRandomPasswordWithOptions(request, runtime);
  }

  async getSecretValueWithOptions(request: GetSecretValueRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretValueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetSecretValueResponse>(await this.doRPCRequest("GetSecretValue", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new GetSecretValueResponse({}));
  }

  async getSecretValue(request: GetSecretValueRequest): Promise<GetSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretValueWithOptions(request, runtime);
  }

  async importCertificateWithOptions(request: ImportCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ImportCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportCertificateResponse>(await this.doRPCRequest("ImportCertificate", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImportCertificateResponse({}));
  }

  async importCertificate(request: ImportCertificateRequest): Promise<ImportCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importCertificateWithOptions(request, runtime);
  }

  async importEncryptionCertificateWithOptions(request: ImportEncryptionCertificateRequest, runtime: $Util.RuntimeOptions): Promise<ImportEncryptionCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportEncryptionCertificateResponse>(await this.doRPCRequest("ImportEncryptionCertificate", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImportEncryptionCertificateResponse({}));
  }

  async importEncryptionCertificate(request: ImportEncryptionCertificateRequest): Promise<ImportEncryptionCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importEncryptionCertificateWithOptions(request, runtime);
  }

  async importKeyMaterialWithOptions(request: ImportKeyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeyMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ImportKeyMaterialResponse>(await this.doRPCRequest("ImportKeyMaterial", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ImportKeyMaterialResponse({}));
  }

  async importKeyMaterial(request: ImportKeyMaterialRequest): Promise<ImportKeyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyMaterialWithOptions(request, runtime);
  }

  async listAliasesWithOptions(request: ListAliasesRequest, runtime: $Util.RuntimeOptions): Promise<ListAliasesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAliasesResponse>(await this.doRPCRequest("ListAliases", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAliasesResponse({}));
  }

  async listAliases(request: ListAliasesRequest): Promise<ListAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAliasesWithOptions(request, runtime);
  }

  async listAliasesByKeyIdWithOptions(request: ListAliasesByKeyIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAliasesByKeyIdResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListAliasesByKeyIdResponse>(await this.doRPCRequest("ListAliasesByKeyId", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListAliasesByKeyIdResponse({}));
  }

  async listAliasesByKeyId(request: ListAliasesByKeyIdRequest): Promise<ListAliasesByKeyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAliasesByKeyIdWithOptions(request, runtime);
  }

  async listCertificatesWithOptions(request: ListCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListCertificatesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListCertificatesResponse>(await this.doRPCRequest("ListCertificates", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListCertificatesResponse({}));
  }

  async listCertificates(request: ListCertificatesRequest): Promise<ListCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCertificatesWithOptions(request, runtime);
  }

  async listKeysWithOptions(request: ListKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListKeysResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListKeysResponse>(await this.doRPCRequest("ListKeys", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListKeysResponse({}));
  }

  async listKeys(request: ListKeysRequest): Promise<ListKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeysWithOptions(request, runtime);
  }

  async listKeyVersionsWithOptions(request: ListKeyVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListKeyVersionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListKeyVersionsResponse>(await this.doRPCRequest("ListKeyVersions", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListKeyVersionsResponse({}));
  }

  async listKeyVersions(request: ListKeyVersionsRequest): Promise<ListKeyVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeyVersionsWithOptions(request, runtime);
  }

  async listResourceTagsWithOptions(request: ListResourceTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTagsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListResourceTagsResponse>(await this.doRPCRequest("ListResourceTags", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListResourceTagsResponse({}));
  }

  async listResourceTags(request: ListResourceTagsRequest): Promise<ListResourceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTagsWithOptions(request, runtime);
  }

  async listSecretsWithOptions(request: ListSecretsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSecretsResponse>(await this.doRPCRequest("ListSecrets", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSecretsResponse({}));
  }

  async listSecrets(request: ListSecretsRequest): Promise<ListSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretsWithOptions(request, runtime);
  }

  async listSecretVersionIdsWithOptions(request: ListSecretVersionIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretVersionIdsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListSecretVersionIdsResponse>(await this.doRPCRequest("ListSecretVersionIds", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ListSecretVersionIdsResponse({}));
  }

  async listSecretVersionIds(request: ListSecretVersionIdsRequest): Promise<ListSecretVersionIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretVersionIdsWithOptions(request, runtime);
  }

  async openKmsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenKmsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<OpenKmsServiceResponse>(await this.doRPCRequest("OpenKmsService", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new OpenKmsServiceResponse({}));
  }

  async openKmsService(): Promise<OpenKmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openKmsServiceWithOptions(runtime);
  }

  async putSecretValueWithOptions(request: PutSecretValueRequest, runtime: $Util.RuntimeOptions): Promise<PutSecretValueResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<PutSecretValueResponse>(await this.doRPCRequest("PutSecretValue", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new PutSecretValueResponse({}));
  }

  async putSecretValue(request: PutSecretValueRequest): Promise<PutSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putSecretValueWithOptions(request, runtime);
  }

  async reEncryptWithOptions(tmpReq: ReEncryptRequest, runtime: $Util.RuntimeOptions): Promise<ReEncryptResponse> {
    Util.validateModel(tmpReq);
    let request = new ReEncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sourceEncryptionContext)) {
      request.sourceEncryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceEncryptionContext, "SourceEncryptionContext", "json");
    }

    if (!Util.isUnset(tmpReq.destinationEncryptionContext)) {
      request.destinationEncryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationEncryptionContext, "DestinationEncryptionContext", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ReEncryptResponse>(await this.doRPCRequest("ReEncrypt", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ReEncryptResponse({}));
  }

  async reEncrypt(request: ReEncryptRequest): Promise<ReEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reEncryptWithOptions(request, runtime);
  }

  async restoreSecretWithOptions(request: RestoreSecretRequest, runtime: $Util.RuntimeOptions): Promise<RestoreSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RestoreSecretResponse>(await this.doRPCRequest("RestoreSecret", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RestoreSecretResponse({}));
  }

  async restoreSecret(request: RestoreSecretRequest): Promise<RestoreSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreSecretWithOptions(request, runtime);
  }

  async rotateSecretWithOptions(request: RotateSecretRequest, runtime: $Util.RuntimeOptions): Promise<RotateSecretResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RotateSecretResponse>(await this.doRPCRequest("RotateSecret", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new RotateSecretResponse({}));
  }

  async rotateSecret(request: RotateSecretRequest): Promise<RotateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rotateSecretWithOptions(request, runtime);
  }

  async scheduleKeyDeletionWithOptions(request: ScheduleKeyDeletionRequest, runtime: $Util.RuntimeOptions): Promise<ScheduleKeyDeletionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ScheduleKeyDeletionResponse>(await this.doRPCRequest("ScheduleKeyDeletion", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new ScheduleKeyDeletionResponse({}));
  }

  async scheduleKeyDeletion(request: ScheduleKeyDeletionRequest): Promise<ScheduleKeyDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scheduleKeyDeletionWithOptions(request, runtime);
  }

  async tagResourceWithOptions(request: TagResourceRequest, runtime: $Util.RuntimeOptions): Promise<TagResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<TagResourceResponse>(await this.doRPCRequest("TagResource", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new TagResourceResponse({}));
  }

  async tagResource(request: TagResourceRequest): Promise<TagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourceWithOptions(request, runtime);
  }

  async untagResourceWithOptions(request: UntagResourceRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UntagResourceResponse>(await this.doRPCRequest("UntagResource", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UntagResourceResponse({}));
  }

  async untagResource(request: UntagResourceRequest): Promise<UntagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourceWithOptions(request, runtime);
  }

  async updateAliasWithOptions(request: UpdateAliasRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAliasResponse>(await this.doRPCRequest("UpdateAlias", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAliasResponse({}));
  }

  async updateAlias(request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAliasWithOptions(request, runtime);
  }

  async updateCertificateStatusWithOptions(request: UpdateCertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCertificateStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateCertificateStatusResponse>(await this.doRPCRequest("UpdateCertificateStatus", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateCertificateStatusResponse({}));
  }

  async updateCertificateStatus(request: UpdateCertificateStatusRequest): Promise<UpdateCertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCertificateStatusWithOptions(request, runtime);
  }

  async updateKeyDescriptionWithOptions(request: UpdateKeyDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKeyDescriptionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateKeyDescriptionResponse>(await this.doRPCRequest("UpdateKeyDescription", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateKeyDescriptionResponse({}));
  }

  async updateKeyDescription(request: UpdateKeyDescriptionRequest): Promise<UpdateKeyDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKeyDescriptionWithOptions(request, runtime);
  }

  async updateRotationPolicyWithOptions(request: UpdateRotationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRotationPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateRotationPolicyResponse>(await this.doRPCRequest("UpdateRotationPolicy", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateRotationPolicyResponse({}));
  }

  async updateRotationPolicy(request: UpdateRotationPolicyRequest): Promise<UpdateRotationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRotationPolicyWithOptions(request, runtime);
  }

  async updateSecretRotationPolicyWithOptions(request: UpdateSecretRotationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretRotationPolicyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSecretRotationPolicyResponse>(await this.doRPCRequest("UpdateSecretRotationPolicy", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSecretRotationPolicyResponse({}));
  }

  async updateSecretRotationPolicy(request: UpdateSecretRotationPolicyRequest): Promise<UpdateSecretRotationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretRotationPolicyWithOptions(request, runtime);
  }

  async updateSecretVersionStageWithOptions(request: UpdateSecretVersionStageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretVersionStageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateSecretVersionStageResponse>(await this.doRPCRequest("UpdateSecretVersionStage", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateSecretVersionStageResponse({}));
  }

  async updateSecretVersionStage(request: UpdateSecretVersionStageRequest): Promise<UpdateSecretVersionStageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretVersionStageWithOptions(request, runtime);
  }

  async uploadCertificateWithOptions(request: UploadCertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadCertificateResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UploadCertificateResponse>(await this.doRPCRequest("UploadCertificate", "2016-01-20", "HTTPS", "POST", "AK", "json", req, runtime), new UploadCertificateResponse({}));
  }

  async uploadCertificate(request: UploadCertificateRequest): Promise<UploadCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCertificateWithOptions(request, runtime);
  }

}
