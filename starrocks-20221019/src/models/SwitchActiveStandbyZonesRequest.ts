// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchActiveStandbyZonesRequest extends $dara.Model {
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou-k
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      targetZoneId: 'TargetZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      targetZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

