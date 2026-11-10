// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSharedAccountsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Alibaba Cloud account IDs.
   * 
   * This parameter is required.
   */
  accountIdsShrink?: string;
  /**
   * @remarks
   * The ID of the resource to be unshared.
   * 
   * - If the type is Namespace, the value is the workspace name. 
   * 
   * - If the type is RegistryModule, the value is \\<namespaceName>/\\<ModuleName>.
   * 
   * This parameter is required.
   * 
   * @example
   * terraform-alicloud-modules/mongodb
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - RegistryModule: Registry template.
   * - Namespace: Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * RegistryModule
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountIdsShrink: 'accountIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

