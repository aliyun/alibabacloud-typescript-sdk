// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDevicesRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * 23419851
   */
  appKey?: number;
  /**
   * @remarks
   * The unique identifier for each device in the push service. Each ID is 32 characters long and contains only digits and lowercase letters. Separate multiple IDs with commas. You can check up to 100 devices per request.
   * 
   * This parameter is required.
   * 
   * @example
   * ae296f3b04a58a05b30c95f****,ae296f3b04a58a05b30c95f****,ae296f3b04a58a05b30c95f****
   */
  deviceIds?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceIds: 'DeviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

