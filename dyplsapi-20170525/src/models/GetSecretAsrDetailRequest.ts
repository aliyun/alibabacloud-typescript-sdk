// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretAsrDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the call record.
   * 
   * You can log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view **Call Record ID** on the **Call Record Query** page.
   * 
   * This parameter is required.
   * 
   * @example
   * 225625****
   */
  callId?: string;
  /**
   * @remarks
   * The call initiation time in the call record.
   * 
   * You can log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). View **Call Initiated At** on the **Call Record Query** page, or view the call_time field in the Call Detail Record (CDR) receipt.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-05 12:00:00
   */
  callTime?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * You can log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2267****
   */
  poolKey?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      poolKey: 'PoolKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      poolKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

