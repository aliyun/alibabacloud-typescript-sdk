// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertInstanceResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A legacy parameter. This parameter does not take effect. You do not need to pass this parameter.
   * 
   * @example
   * m4312mab158****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The ID of the new resource group. You can obtain the ID from the Resource Management console. For more information, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-aek2r4fkrqw****
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region in which the DTS instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A parameter reserved for special business scenarios. You do not need to pass this parameter.
   * 
   * @example
   * rg-3m1213ye7l****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the DTS instance. You can view the ID in the **ID/Name** column on the task list page in the console.
   * 
   * > This parameter is required.
   * 
   * @example
   * dtszhc12zp727o****
   */
  resourceId?: string;
  /**
   * @remarks
   * A parameter reserved for special business scenarios. You do not need to pass this parameter.
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

