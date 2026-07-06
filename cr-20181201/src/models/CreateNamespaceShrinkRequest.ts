// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether a repository is automatically created when an image is pushed to a repository that does not yet exist in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  defaultRepoConfigurationShrink?: string;
  /**
   * @remarks
   * The default type of automatically created repositories. Valid values:
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
   * The name of the namespace. The name must be 2 to 120 characters long and can contain only lowercase letters, digits, and the following separators: underscores (_), hyphens (-), and periods (.). A separator cannot be used as the first or last character.
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

