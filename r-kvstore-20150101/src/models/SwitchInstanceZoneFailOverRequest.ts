// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchInstanceZoneFailOverRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The duration for which the fault lasts. Unit: minutes.
   * 
   * Valid values:
   * 
   * *   5
   * *   10
   * 
   * @example
   * 5
   */
  siteFaultTime?: string;
  /**
   * @remarks
   * The ID of the destination zone.
   * 
   * @example
   * cn-hangzhou-j
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      siteFaultTime: 'SiteFaultTime',
      targetZoneId: 'TargetZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      siteFaultTime: 'string',
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

