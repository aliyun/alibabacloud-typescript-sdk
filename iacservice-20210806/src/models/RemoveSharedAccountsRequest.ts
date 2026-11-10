// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveSharedAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Alibaba Cloud account IDs.
   * 
   * This parameter is required.
   */
  accountIds?: number[];
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
      accountIds: 'accountIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

