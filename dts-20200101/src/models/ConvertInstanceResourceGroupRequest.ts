// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertInstanceResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This historical parameter does not take effect and is not required.
   * 
   * @example
   * m4312mab158****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of new resource group. You can obtain the ID on the Resource Group page in the Resource Management console. For more information, see [View basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-aek2r4fkrqw****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The ID of the region in which the Data Transmission Service (DTS) instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is only for special services and not required.
   * 
   * @example
   * rg-3m1213ye7l****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the DTS instance. You can view the ID in the **ID/Name** column on the task page in the console.
   * 
   * >  This parameter is required.
   * 
   * @example
   * dtszhc12zp727o****
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is only for special services and not required.
   * 
   * @example
   * true
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

