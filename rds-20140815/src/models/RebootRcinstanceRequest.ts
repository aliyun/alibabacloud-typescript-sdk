// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootRCInstanceRequest extends $dara.Model {
  dryRun?: boolean;
  forceStop?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @example
   * 2018-01-01T12:05Z
   */
  rebootTime?: string;
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

