// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that you want to transfer.
   * 
   * >  You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to view the details of the instances under the account, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * drds***********
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the resource group that you want to specify.
   * 
   * >  You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to view the details of the resource groups, including the resource group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-***************
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the instance you want to transfer is located.
   * 
   * >  You can call the [DescribeDrdsInstances](https://help.aliyun.com/document_detail/139284.html) operation to view the details of the instances under the account, including the region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      drdsInstanceId: 'DrdsInstanceId',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drdsInstanceId: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

