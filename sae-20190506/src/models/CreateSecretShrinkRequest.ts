// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace where the Secret resides. If the namespace is the default namespace, you need to only enter the region ID, such as `cn-beijing`.
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
   * This parameter is required.
   * 
   * @example
   * registry-auth-acree
   */
  secretName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * kubernetes.io/dockerconfigjson
   */
  secretType?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceId: 'NamespaceId',
      secretDataShrink: 'SecretData',
      secretName: 'SecretName',
      secretType: 'SecretType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceId: 'string',
      secretDataShrink: 'string',
      secretName: 'string',
      secretType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

