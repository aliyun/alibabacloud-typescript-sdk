// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace to which the secret instance belongs. If the namespace is the default namespace, you only need to specify RegionId, such as `cn-beijing`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * Instance ID of the secret instance to be deleted. You can call the [ListSecrets](https://help.aliyun.com/document_detail/466929.html) operation to query instance ID.
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

