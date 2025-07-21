// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * >  You can configure only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * 770dbe42-e146-43d1-a55a-1355db86****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * >  You can configure only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddf****
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * >  You can configure only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * MyDbC****
   */
  secretName?: string;
  /**
   * @remarks
   * One or more tags that you want to add. The value is in the array format.
   * 
   * Tag attributes:
   * 
   * *   TagKey: the tag key.
   * *   TagValue: the tag value.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

