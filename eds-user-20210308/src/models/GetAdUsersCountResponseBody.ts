// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdUsersCountResponseBody extends $dara.Model {
  /**
   * @example
   * 1000
   */
  adUserCount?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      adUserCount: 'AdUserCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adUserCount: 'number',
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

