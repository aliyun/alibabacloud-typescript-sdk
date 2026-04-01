// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient inventory errors. If the request passes the dry run, the DryRunOperation error code is returned. Otherwise, an error message is returned.
   * *   **false**: performs a dry run and performs the actual request. If the request passes the dry run, the instance is restarted.
   * 
   * Default value: false
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully stop the instance before you restart the instance Valid values:
   * 
   * *   **true**: forcefully stops the instance. This operation is equivalent to the typical power-off operation. Cache data that is not written to storage devices on the instance is lost.
   * *   **false** (default): normally stops the instance.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rc-m5sc1271fv344a1r****
   */
  instanceId?: string;
  /**
   * @example
   * 2018-01-01T12:05Z
   */
  rebootTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      rebootTime: 'RebootTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      forceStop: 'boolean',
      instanceId: 'string',
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

