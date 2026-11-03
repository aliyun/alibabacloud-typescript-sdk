// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace where the Secret instance resides. If the Secret instance resides in the default namespace, specify only the RegionId, such as `cn-beijing`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The Secret data.
   * 
   * This parameter is required.
   */
  secretDataShrink?: string;
  /**
   * @remarks
   * The instance ID of the Secret.
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
      secretDataShrink: 'SecretData',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretDataShrink: 'string',
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

