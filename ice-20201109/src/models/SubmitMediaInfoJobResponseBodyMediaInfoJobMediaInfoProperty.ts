// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList";
import { SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo";
import { SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList } from "./SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList";


export class SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty extends $dara.Model {
  /**
   * @remarks
   * The information about the audio stream.
   */
  audioStreamInfoList?: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information.
   */
  fileBasicInfo?: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo;
  /**
   * @remarks
   * The information about the video stream.
   */
  videoStreamInfoList?: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList },
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

