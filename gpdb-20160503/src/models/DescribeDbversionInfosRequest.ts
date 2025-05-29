// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBVersionInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The resource type of the instance. Valid values:
   * 
   * *   **StorageElastic**: elastic storage mode.
   * *   **Serverless**: Serverless mode.
   * 
   * @example
   * StorageElastic
   */
  DBInstanceMode?: string;
  /**
   * @remarks
   * The minor version number that does not include the prefix.
   * 
   * @example
   * 6.3.10.20
   */
  DBVersion?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs. For information about how to obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceMode: 'DBInstanceMode',
      DBVersion: 'DBVersion',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceMode: 'string',
      DBVersion: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

