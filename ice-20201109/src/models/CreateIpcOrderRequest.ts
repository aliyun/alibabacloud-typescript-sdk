// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpcOrderRequest extends $dara.Model {
  /**
   * @example
   * understand
   */
  capability?: string;
  /**
   * @example
   * d123
   */
  deviceId?: string;
  /**
   * @example
   * month
   */
  period?: string;
  static names(): { [key: string]: string } {
    return {
      capability: 'Capability',
      deviceId: 'DeviceId',
      period: 'Period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capability: 'string',
      deviceId: 'string',
      period: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

