// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserSecDropResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of packets that are blocked.
   * 
   * @example
   * 233023208
   */
  drops?: number;
  /**
   * @remarks
   * Indicates whether the information is found.
   * 
   * *   Found
   * *   Not Found
   * 
   * @example
   * Found
   */
  msg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4A1295C0-7A5C-4F27-8D70-C3A648E7037F
   */
  requestId?: string;
  /**
   * @remarks
   * The character string that is concatenated based on the request parameters and is used to locate causes when data is not found.
   * 
   * @example
   * 1day10811******6429wafDCDN
   */
  uuidStr?: string;
  static names(): { [key: string]: string } {
    return {
      drops: 'Drops',
      msg: 'Msg',
      requestId: 'RequestId',
      uuidStr: 'UuidStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drops: 'number',
      msg: 'string',
      requestId: 'string',
      uuidStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

