// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList } from "./SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList";
import { SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo } from "./SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo";
import { SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList } from "./SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList";


export class SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty extends $dara.Model {
  /**
   * @remarks
   * The information about the audio stream.
   */
  audioStreamInfoList?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information.
   */
  fileBasicInfo?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo;
  /**
   * @remarks
   * The information about the video stream.
   */
  videoStreamInfoList?: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': SubmitSyncMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList },
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

