// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledBackupConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgprecn-cn-9lb3bjg1n003
   */
  instanceId?: string;
  /**
   * @remarks
   * The backup type. By default, periodic and manual backup configurations are returned. To return the remote backup configuration, set this parameter to remote.
   * 
   * @example
   * remote
   */
  scheduleType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      instanceId: 'instanceId',
      scheduleType: 'scheduleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      instanceId: 'string',
      scheduleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

