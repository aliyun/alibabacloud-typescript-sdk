// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  isResourceGroupWithOfficeSite?: number;
  /**
   * @remarks
   * >  Set the value to AliyunConsole.
   * 
   * *   This parameter is not publicly available in other platforms.
   * 
   * @example
   * AliyunConsole
   */
  platform?: string;
  /**
   * @remarks
   * The name of the resource group.
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      isResourceGroupWithOfficeSite: 'IsResourceGroupWithOfficeSite',
      platform: 'Platform',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isResourceGroupWithOfficeSite: 'number',
      platform: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

