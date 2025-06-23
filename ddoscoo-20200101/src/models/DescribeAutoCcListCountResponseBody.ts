// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcListCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of IP addresses in the blacklist.
   * 
   * @example
   * 0
   */
  blackCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5AC3785F-C789-4622-87A4-F58BE7F6B184
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of IP addresses in the whitelist.
   * 
   * @example
   * 2
   */
  whiteCount?: number;
  static names(): { [key: string]: string } {
    return {
      blackCount: 'BlackCount',
      requestId: 'RequestId',
      whiteCount: 'WhiteCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackCount: 'number',
      requestId: 'string',
      whiteCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

