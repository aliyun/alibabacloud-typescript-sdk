// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList } from "./GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList";
import { GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo } from "./GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo";
import { GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList } from "./GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList";
import { GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList } from "./GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList";


export class GetMediaInfoResponseBodyMediaInfoFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The information about the audio tracks. A media asset may have multiple audio tracks.
   */
  audioStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  /**
   * @remarks
   * The basic information about the file, including the duration and size.
   */
  fileBasicInfo?: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  /**
   * @remarks
   * The information about the subtitle tracks. A media asset may have multiple subtitle tracks.
   */
  subtitleStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  /**
   * @remarks
   * The information about the video tracks. A media asset may have multiple video tracks.
   */
  videoStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
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
      audioStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      fileBasicInfo: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
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

