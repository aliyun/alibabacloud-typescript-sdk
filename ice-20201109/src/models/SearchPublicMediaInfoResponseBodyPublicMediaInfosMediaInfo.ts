// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData } from "./SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData";
import { SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo } from "./SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo";


export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo extends $dara.Model {
  dynamicMetaData?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData;
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo;
  /**
   * @example
   * icepublic-****87b921bb4a55908a72a0537e****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData,
      mediaBasicInfo: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.dynamicMetaData && typeof (this.dynamicMetaData as any).validate === 'function') {
      (this.dynamicMetaData as any).validate();
    }
    if(this.mediaBasicInfo && typeof (this.mediaBasicInfo as any).validate === 'function') {
      (this.mediaBasicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

