// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecretShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace where the Secret instance resides. If the namespace is the default namespace, you only need to specify RegionId, such as `cn-beijing`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The data of the Secret.
   * 
   * This parameter is required.
   */
  secretDataShrink?: string;
  /**
   * @remarks
   * The name of the Secret instance. The name can contain digits, letters, and underscores (_), and must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-auth-acree
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the Secret instance. Valid values:
   * 
   * - **kubernetes.io/dockerconfigjson**: stores the username and password of an image repository. It is used for authentication when pulling images during deployment.
   * 
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

