// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByHybridResponseBodyMediaListClipInfo extends $dara.Model {
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
   * 0.99
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

export class SearchMediaByHybridResponseBodyMediaList extends $dara.Model {
  /**
   * @remarks
   * The clip information.
   */
  clipInfo?: SearchMediaByHybridResponseBodyMediaListClipInfo[];
  /**
   * @remarks
   * The media asset ID.
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
      clipInfo: { 'type': 'array', 'itemType': SearchMediaByHybridResponseBodyMediaListClipInfo },
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

export class SearchMediaByHybridResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The collection of matched media assets.
   */
  mediaList?: SearchMediaByHybridResponseBodyMediaList[];
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
   * Indicates whether the operation is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of media assets that meet the search conditions.
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

