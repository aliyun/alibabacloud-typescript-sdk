// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the new Alibaba Cloud resource group.
   * 
   * @example
   * rg-aek2kqofrgXXXXX
   */
  aliyunResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003XXXXX
   */
  id?: string;
  /**
   * @remarks
   * The new name that you want to change for the resource group.
   * 
   * @example
   * common_resource_group
   */
  name?: string;
  /**
   * @remarks
   * The new remarks that you want to modify for the resource group.
   * 
   * @example
   * Create a common resource group for common tasks
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupId: 'AliyunResourceGroupId',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunResourceGroupId: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

