// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAliasesRequest extends $dara.Model {
  /**
   * @remarks
   * The AppKey value.
   * 
   * This parameter is required.
   * 
   * @example
   * 23267207
   */
  appKey?: number;
  /**
   * @remarks
   * The unique identifier for the device in Mobile Push. It is 32 characters long and contains only digits and lowercase letters.
   * 
   * This parameter is required.
   * 
   * @example
   * e2ba19de97604f55b165576****
   */
  deviceId?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      deviceId: 'DeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      deviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

