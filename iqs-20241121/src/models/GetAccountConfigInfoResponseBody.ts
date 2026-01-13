// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountConfigInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Normal
   */
  accountStatus?: string;
  /**
   * @example
   * 2025-07-12 12:00:00
   */
  availableTime?: string;
  /**
   * @example
   * 30
   */
  billQps?: string;
  /**
   * @example
   * FixLadder
   */
  ladderType?: string;
  /**
   * @example
   * 12123123123
   */
  mainAccountId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6788a2c2-157d4ebe-ad979cd4f296
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'accountStatus',
      availableTime: 'availableTime',
      billQps: 'billQps',
      ladderType: 'ladderType',
      mainAccountId: 'mainAccountId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      availableTime: 'string',
      billQps: 'string',
      ladderType: 'string',
      mainAccountId: 'string',
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

