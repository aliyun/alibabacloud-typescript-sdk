// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList } from "./ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList";
import { ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo } from "./ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo";


export class ListPublicMediaBasicInfosResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * The file information of the media asset.
   */
  fileInfoList?: ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * The basic information of the media asset.
   */
  mediaBasicInfo?: ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo;
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
      fileInfoList: { 'type': 'array', 'itemType': ListPublicMediaBasicInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: ListPublicMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo,
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

