// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAlertRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alertId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
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

