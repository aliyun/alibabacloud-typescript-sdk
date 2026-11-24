// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic creation of an image repository is enabled.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  defaultRepoConfigurationShrink?: string;
  /**
   * @remarks
   * The default repository type for automatic creation. Valid values:
   * 
   * - `PUBLIC`: public
   * 
   * - `PRIVATE`: private
   * 
   * @example
   * PUBLIC
   * 
   * @deprecated
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace. The name must be 2 to 120 characters in length and can contain lowercase letters and digits. The following separators are supported: underscores (_), hyphens (-), and periods (.). A separator cannot be placed at the beginning or end of the name.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace1
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

