// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vbo40tl1dxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * ai
   */
  resourceGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      resourceGroupType: 'ResourceGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      resourceGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

