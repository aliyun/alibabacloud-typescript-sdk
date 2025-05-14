// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaInfoResponseBodyMediaInfoAiRoughData } from "./GetMediaInfoResponseBodyMediaInfoAiRoughData";
import { GetMediaInfoResponseBodyMediaInfoFileInfoList } from "./GetMediaInfoResponseBodyMediaInfoFileInfoList";
import { GetMediaInfoResponseBodyMediaInfoMediaBasicInfo } from "./GetMediaInfoResponseBodyMediaInfoMediaBasicInfo";


export class GetMediaInfoResponseBodyMediaInfo extends $dara.Model {
  /**
   * @remarks
   * The original AI analysis data.
   */
  aiRoughData?: GetMediaInfoResponseBodyMediaInfoAiRoughData;
  /**
   * @remarks
   * The file information.
   */
  fileInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoList[];
  /**
   * @remarks
   * The basic information about the media asset.
   */
  mediaBasicInfo?: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiRoughData: 'AiRoughData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRoughData: GetMediaInfoResponseBodyMediaInfoAiRoughData,
      fileInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.aiRoughData && typeof (this.aiRoughData as any).validate === 'function') {
      (this.aiRoughData as any).validate();
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

