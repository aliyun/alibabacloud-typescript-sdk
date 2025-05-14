// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData } from "./GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData";
import { GetPublicMediaInfoResponseBodyMediaInfoFileInfoList } from "./GetPublicMediaInfoResponseBodyMediaInfoFileInfoList";
import { GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo } from "./GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo";


export class GetPublicMediaInfoResponseBodyMediaInfo extends $dara.Model {
  dynamicMetaData?: GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData;
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoList[];
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  /**
   * @example
   * icepublic-****14e501538aeef0a3140176f6****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData,
      fileInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.dynamicMetaData && typeof (this.dynamicMetaData as any).validate === 'function') {
      (this.dynamicMetaData as any).validate();
    }
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

