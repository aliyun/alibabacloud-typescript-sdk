// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNamespaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create a repository when an image is pushed to the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  defaultRepoConfigurationShrink?: string;
  /**
   * @remarks
   * The default type of the repository. Valid values:
   * 
   * *   `PUBLIC`: The repository is a public repository.
   * *   `PRIVATE`: The repository is a private repository.
   * 
   * @example
   * PRIVATE
   * 
   * @deprecated
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoConfigurationShrink: 'DefaultRepoConfiguration',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoConfigurationShrink: 'string',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

