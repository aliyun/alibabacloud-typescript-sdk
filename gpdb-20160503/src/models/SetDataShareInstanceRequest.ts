// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataShareInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for PostgreSQL instance in Serverless mode.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including instance IDs.
   * 
   * This parameter is required.
   */
  instanceList?: string[];
  /**
   * @remarks
   * Specifies whether to enable or disable data sharing. Valid values:
   * 
   * *   **add**: enables data sharing.
   * *   **remove**: disables data sharing.
   * 
   * This parameter is required.
   * 
   * @example
   * add
   */
  operationType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      operationType: 'OperationType',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: { 'type': 'array', 'itemType': 'string' },
      operationType: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

