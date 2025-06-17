// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MediaConvertOutputDetailFileMetaAudioStreamInfoList } from "./MediaConvertOutputDetailFileMetaAudioStreamInfoList";
import { MediaConvertOutputDetailFileMetaFileBasicInfo } from "./MediaConvertOutputDetailFileMetaFileBasicInfo";
import { MediaConvertOutputDetailFileMetaVideoStreamInfoList } from "./MediaConvertOutputDetailFileMetaVideoStreamInfoList";


export class MediaConvertOutputDetailFileMeta extends $dara.Model {
  audioStreamInfoList?: MediaConvertOutputDetailFileMetaAudioStreamInfoList[];
  fileBasicInfo?: MediaConvertOutputDetailFileMetaFileBasicInfo;
  videoStreamInfoList?: MediaConvertOutputDetailFileMetaVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': MediaConvertOutputDetailFileMetaAudioStreamInfoList },
      fileBasicInfo: MediaConvertOutputDetailFileMetaFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': MediaConvertOutputDetailFileMetaVideoStreamInfoList },
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

