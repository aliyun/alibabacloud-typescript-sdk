// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchPublicMediaInfoResponseBodyPublicMediaInfos } from "./SearchPublicMediaInfoResponseBodyPublicMediaInfos";


export class SearchPublicMediaInfoResponseBody extends $dara.Model {
  publicMediaInfos?: SearchPublicMediaInfoResponseBodyPublicMediaInfos[];
  /**
   * @example
   * ****3CFB-2767-54FD-B311-BD15A4C1****
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      publicMediaInfos: 'PublicMediaInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicMediaInfos: { 'type': 'array', 'itemType': SearchPublicMediaInfoResponseBodyPublicMediaInfos },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicMediaInfos)) {
      $dara.Model.validateArray(this.publicMediaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

