// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByHybridResponseBodyMediaListClipInfo extends $dara.Model {
  /**
   * @example
   * 2
   */
  from?: number;
  /**
   * @example
   * 0.99
   */
  score?: number;
  /**
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
  clipInfo?: SearchMediaByHybridResponseBodyMediaListClipInfo[];
  /**
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

