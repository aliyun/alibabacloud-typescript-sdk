// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList } from "./GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList";
import { GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo } from "./GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo";
import { GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList } from "./GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList";
import { GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList } from "./GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList";


export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoList extends $dara.Model {
  audioStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  fileBasicInfo?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  subtitleStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  videoStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      subtitleStreamInfoList: 'SubtitleStreamInfoList',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      fileBasicInfo: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.audioStreamInfoList)) {
      $dara.Model.validateArray(this.audioStreamInfoList);
    }
    if(this.fileBasicInfo && typeof (this.fileBasicInfo as any).validate === 'function') {
      (this.fileBasicInfo as any).validate();
    }
    if(Array.isArray(this.subtitleStreamInfoList)) {
      $dara.Model.validateArray(this.subtitleStreamInfoList);
    }
    if(Array.isArray(this.videoStreamInfoList)) {
      $dara.Model.validateArray(this.videoStreamInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

