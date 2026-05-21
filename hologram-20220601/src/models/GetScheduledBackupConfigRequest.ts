// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledBackupConfigRequest extends $dara.Model {
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * hgprecn-cn-9lb3bjg1n003
   */
  instanceId?: string;
  /**
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

