// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList } from "./ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList";
import { ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo } from "./ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo";
import { ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList } from "./ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList";


export class ListMediaInfoJobsResponseBodyJobsMediaInfoProperty extends $dara.Model {
  /**
   * @remarks
   * The information about the audio stream.
   */
  audioStreamInfoList?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information.
   */
  fileBasicInfo?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo;
  /**
   * @remarks
   * The information about the video stream.
   */
  videoStreamInfoList?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.audioStreamInfoList)) {
      $dara.Model.validateArray(this.audioStreamInfoList);
    }
    if(this.fileBasicInfo && typeof (this.fileBasicInfo as any).validate === 'function') {
      (this.fileBasicInfo as any).validate();
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

