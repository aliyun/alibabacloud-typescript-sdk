// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo } from "./SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo";


export class SearchPublicMediaInfoResponseBodyPublicMediaInfos extends $dara.Model {
  /**
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @example
   * true
   */
  favorite?: boolean;
  mediaInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo;
  /**
   * @example
   * 100
   */
  remainingAuthTime?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      favorite: 'Favorite',
      mediaInfo: 'MediaInfo',
      remainingAuthTime: 'RemainingAuthTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      favorite: 'boolean',
      mediaInfo: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo,
      remainingAuthTime: 'string',
    };
  }

  validate() {
    if(this.mediaInfo && typeof (this.mediaInfo as any).validate === 'function') {
      (this.mediaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

