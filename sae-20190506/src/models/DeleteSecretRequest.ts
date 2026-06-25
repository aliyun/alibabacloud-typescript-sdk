// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace. If the secret is in the default namespace, you need to specify only the region ID, for example, `cn-beijing`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The ID of the secret to delete. You can obtain the ID by calling the [ListSecrets](https://help.aliyun.com/document_detail/466929.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 16
   */
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

