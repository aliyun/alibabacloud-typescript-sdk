// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaByHybridResponseBodyMediaList } from "./SearchMediaByHybridResponseBodyMediaList";


export class SearchMediaByHybridResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  mediaList?: SearchMediaByHybridResponseBodyMediaList[];
  /**
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaList: 'MediaList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaList: { 'type': 'array', 'itemType': SearchMediaByHybridResponseBodyMediaList },
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaList)) {
      $dara.Model.validateArray(this.mediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

