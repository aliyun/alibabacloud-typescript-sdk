// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByMultimodalResponseBodyMediaListClipInfo extends $dara.Model {
  /**
   * @remarks
   * The start time of the clip.
   * 
   * @example
   * 2
   */
  from?: number;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 1.2
   */
  score?: number;
  /**
   * @remarks
   * The end time of the clip.
   * 
   * @example
   * 4
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      score: 'Score',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaByMultimodalResponseBodyMediaList extends $dara.Model {
  /**
   * @remarks
   * The information about the clip.
   */
  clipInfo?: SearchMediaByMultimodalResponseBodyMediaListClipInfo[];
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * a18936e0e28771edb59ae6f6f47a****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      clipInfo: 'ClipInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipInfo: { 'type': 'array', 'itemType': SearchMediaByMultimodalResponseBodyMediaListClipInfo },
      mediaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clipInfo)) {
      $dara.Model.validateArray(this.clipInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaByMultimodalResponseBody extends $dara.Model {
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
  mediaList?: SearchMediaByMultimodalResponseBodyMediaList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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
   * 20
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
      mediaList: { 'type': 'array', 'itemType': SearchMediaByMultimodalResponseBodyMediaList },
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

