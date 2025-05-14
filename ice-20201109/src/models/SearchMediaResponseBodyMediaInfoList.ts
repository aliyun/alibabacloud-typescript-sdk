// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaResponseBodyMediaInfoListAiData } from "./SearchMediaResponseBodyMediaInfoListAiData";
import { SearchMediaResponseBodyMediaInfoListAiRoughData } from "./SearchMediaResponseBodyMediaInfoListAiRoughData";
import { SearchMediaResponseBodyMediaInfoListFileInfoList } from "./SearchMediaResponseBodyMediaInfoListFileInfoList";
import { SearchMediaResponseBodyMediaInfoListIndexStatusList } from "./SearchMediaResponseBodyMediaInfoListIndexStatusList";
import { SearchMediaResponseBodyMediaInfoListMediaBasicInfo } from "./SearchMediaResponseBodyMediaInfoListMediaBasicInfo";


export class SearchMediaResponseBodyMediaInfoList extends $dara.Model {
  /**
   * @remarks
   * The details of the intelligent AI job.
   */
  aiData?: SearchMediaResponseBodyMediaInfoListAiData;
  /**
   * @remarks
   * The description of the AI job.
   */
  aiRoughData?: SearchMediaResponseBodyMediaInfoListAiRoughData;
  /**
   * @remarks
   * The information about the files.
   */
  fileInfoList?: SearchMediaResponseBodyMediaInfoListFileInfoList[];
  indexStatusList?: SearchMediaResponseBodyMediaInfoListIndexStatusList[];
  /**
   * @remarks
   * The basic information about the media asset.
   */
  mediaBasicInfo?: SearchMediaResponseBodyMediaInfoListMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 3b187b3620c8490886cfc2a9578c3ce6
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiData: 'AiData',
      aiRoughData: 'AiRoughData',
      fileInfoList: 'FileInfoList',
      indexStatusList: 'IndexStatusList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiData: SearchMediaResponseBodyMediaInfoListAiData,
      aiRoughData: SearchMediaResponseBodyMediaInfoListAiRoughData,
      fileInfoList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListFileInfoList },
      indexStatusList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListIndexStatusList },
      mediaBasicInfo: SearchMediaResponseBodyMediaInfoListMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.aiData && typeof (this.aiData as any).validate === 'function') {
      (this.aiData as any).validate();
    }
    if(this.aiRoughData && typeof (this.aiRoughData as any).validate === 'function') {
      (this.aiRoughData as any).validate();
    }
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
    }
    if(Array.isArray(this.indexStatusList)) {
      $dara.Model.validateArray(this.indexStatusList);
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

