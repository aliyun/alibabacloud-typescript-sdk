// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList } from "./GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList";
import { GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo } from "./GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo";
import { GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList } from "./GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList";


export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty extends $dara.Model {
  /**
   * @remarks
   * The information about the audio stream.
   */
  audioStreamInfoList?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information.
   */
  fileBasicInfo?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo;
  /**
   * @remarks
   * The information about the video stream.
   */
  videoStreamInfoList?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList },
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

