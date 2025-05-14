// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectAudioForCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the recording file.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  audioRecordId?: number;
  /**
   * @remarks
   * The URL of the recording file.
   * 
   * > : The URL must be an Object Storage Service (OSS) URL within your Alibaba Cloud account. The OSS bucket must be in the same region in which IMS is activated.
   * 
   * > : The audio file must be in the WAV or PCM format and must be a 16-bit mono audio file at 48000 Hz.
   * 
   * This parameter is required.
   * 
   * @example
   * https://your-bucket.oss-cn-hangzhou.aliyuncs.com/record1.wav
   */
  recordUrl?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  static names(): { [key: string]: string } {
    return {
      audioRecordId: 'AudioRecordId',
      recordUrl: 'RecordUrl',
      voiceId: 'VoiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioRecordId: 'number',
      recordUrl: 'string',
      voiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

