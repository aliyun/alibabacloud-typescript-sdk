// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopRCInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation mode. Set the value to **AllTogether**. In this mode, if all instances are stopped, a success message is returned. If an instance fails the verification, none of the instances can be stopped and an error message is returned.
   * 
   * @example
   * AllTogether
   */
  batchOptimization?: string;
  /**
   * @remarks
   * Specifies whether to forcefully stop the instance. Valid values:
   * 
   * *   **true**: forcefully stops the instance. If an instance fails to stop due to system or network issues, a forced stop can be triggered, **though it may result in data loss.**
   * *   **false**: does not forcefully stop the instance. This is the default value.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The node IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      batchOptimization: 'BatchOptimization',
      forceStop: 'ForceStop',
      instanceIdsShrink: 'InstanceIds',
      regionId: 'RegionId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      forceStop: 'boolean',
      instanceIdsShrink: 'string',
      regionId: 'string',
      stoppedMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

