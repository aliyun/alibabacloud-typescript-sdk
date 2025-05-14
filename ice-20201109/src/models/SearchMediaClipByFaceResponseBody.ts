// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaClipByFaceResponseBodyMediaClipList } from "./SearchMediaClipByFaceResponseBodyMediaClipList";


export class SearchMediaClipByFaceResponseBody extends $dara.Model {
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
   * The media asset clips that meet the requirements.
   */
  mediaClipList?: SearchMediaClipByFaceResponseBodyMediaClipList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E44FFACD-9E90-555A-A09A-6FD3B7335E39
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of media asset clips that meet the conditions.
   * 
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaClipList: 'MediaClipList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaClipList: { 'type': 'array', 'itemType': SearchMediaClipByFaceResponseBodyMediaClipList },
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaClipList)) {
      $dara.Model.validateArray(this.mediaClipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

