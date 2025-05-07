// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRCInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation mode. Set the value to **AllTogether**. In this mode, a success message is returned if all specified instances are started. If an instance fails the verification, none of the specified instances can be started and an error message is returned.
   * 
   * @example
   * AllTogether
   */
  batchOptimization?: string;
  /**
   * @remarks
   * The node IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      batchOptimization: 'BatchOptimization',
      instanceIds: 'InstanceIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

