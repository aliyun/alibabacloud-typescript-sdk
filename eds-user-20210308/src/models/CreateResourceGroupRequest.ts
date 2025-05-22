// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  isResourceGroupWithOfficeSite?: number;
  /**
   * @example
   * AliyunConsole
   */
  platform?: string;
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

