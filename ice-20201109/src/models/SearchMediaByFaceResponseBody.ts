// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByFaceResponseBodyMediaInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 3b187b3620c8490886cfc2a9578c****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaByFaceResponseBody extends $dara.Model {
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
   * The media assets that meet the conditions.
   */
  mediaInfoList?: SearchMediaByFaceResponseBodyMediaInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CA7D615-CFB1-5437-9A12-2D185C3EE6CB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of data records that meet the specified filter condition.
   * 
   * @example
   * 163
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaInfoList: 'MediaInfoList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaInfoList: { 'type': 'array', 'itemType': SearchMediaByFaceResponseBodyMediaInfoList },
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaInfoList)) {
      $dara.Model.validateArray(this.mediaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

