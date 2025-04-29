// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleasePublicIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * > This parameter is unavailable.
   * 
   * @example
   * hide
   */
  remainTimes?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      remainTimes: 'RemainTimes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remainTimes: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

