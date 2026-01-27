// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRCInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation mode. Set the value to **AllTogether**. In this mode, if all specified instances are restarted, a success message is returned. If an instance fails the verification, none of the specified instances can be restarted and an error message is returned.
   * 
   * @example
   * AllTogether
   */
  batchOptimization?: string;
  /**
   * @remarks
   * Specifies whether to forcefully restart the instance. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  forceReboot?: boolean;
  /**
   * @remarks
   * The node IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @example
   * 2018-01-01T12:05Z
   */
  rebootTime?: string;
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
      forceReboot: 'ForceReboot',
      instanceIdsShrink: 'InstanceIds',
      rebootTime: 'RebootTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      forceReboot: 'boolean',
      instanceIdsShrink: 'string',
      rebootTime: 'string',
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

