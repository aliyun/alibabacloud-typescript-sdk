// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteCurrentNSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The nameservers of the website.
   */
  NSList?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2430E05E-1340-5773-B5E1-B743929F46F2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      NSList: 'NSList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      NSList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.NSList)) {
      $dara.Model.validateArray(this.NSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

