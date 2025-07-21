// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourceRequest extends $dara.Model {
  /**
   * @example
   * 770dbe42-e146-43d1-a55a-1355db86****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddf****
   */
  keyId?: string;
  /**
   * @example
   * MyDbC****
   */
  secretName?: string;
  /**
   * @remarks
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

