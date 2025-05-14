// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaBasicInfosResponseBodyMediaInfosFileInfoList } from "./ListMediaBasicInfosResponseBodyMediaInfosFileInfoList";
import { ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo } from "./ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo";


export class ListMediaBasicInfosResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: ListMediaBasicInfosResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****019b82e24b37a1c2958dec38****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': ListMediaBasicInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
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

