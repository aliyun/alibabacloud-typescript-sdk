// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchGetMediaInfosResponseBodyMediaInfosFileInfoList } from "./BatchGetMediaInfosResponseBodyMediaInfosFileInfoList";
import { BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo } from "./BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo";


export class BatchGetMediaInfosResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: BatchGetMediaInfosResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * The basic information of the media asset.
   */
  mediaBasicInfo?: BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ******c48fb37407365d4f2cd8******
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
      fileInfoList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo,
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

