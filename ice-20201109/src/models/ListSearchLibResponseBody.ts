// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSearchLibResponseBodySearchLibInfoList } from "./ListSearchLibResponseBodySearchLibInfoList";


export class ListSearchLibResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * Information about search libraries.
   */
  searchLibInfoList?: ListSearchLibResponseBodySearchLibInfoList[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      searchLibInfoList: 'SearchLibInfoList',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
      searchLibInfoList: { 'type': 'array', 'itemType': ListSearchLibResponseBodySearchLibInfoList },
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.searchLibInfoList)) {
      $dara.Model.validateArray(this.searchLibInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

