// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * > You must specify one and only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * 770dbe42-e146-43d1-a55a-1355db86****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the key. This is the globally unique identifier (GUID) of the master key (CMK).
   * 
   * > You must specify one and only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddf****
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * > You must specify one and only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * MyDbC****
   */
  secretName?: string;
  /**
   * @remarks
   * One or more tag keys. Separate multiple tag keys with commas (,).<br> You need to specify only tag keys, not tag values.<br> The tag key can be 1 to 128 bytes in length.<br><br>
   * 
   * This parameter is required.
   * 
   * @example
   * ["tagkey1","tagkey2"]
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

