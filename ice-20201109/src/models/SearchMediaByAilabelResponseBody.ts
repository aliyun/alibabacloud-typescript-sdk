// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaByAILabelResponseBodyMediaList } from "./SearchMediaByAilabelResponseBodyMediaList";


export class SearchMediaByAILabelResponseBody extends $dara.Model {
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
   * The media assets that contain the specified content.
   */
  mediaList?: SearchMediaByAILabelResponseBodyMediaList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
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
   * The total number of audio and video files that meet the conditions.
   * 
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
      mediaList: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaList },
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

