// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectAudioForCustomizedVoiceJobRequest extends $dara.Model {
  /**
   * @remarks
   * The audio sequence number corresponding to the RecordUrl parameter.
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
   * >Notice: The URL must point to an Object Storage Service (OSS) object in your account, and the region of the OSS bucket must be the same as the region where the service is deployed when you call this operation.</notice>
   * >Notice: Audio format requirements: The audio file must be in WAV or PCM format, and must be a mono audio file with a 16-bit sample depth and a sample rate of 48,000 Hz.</notice>
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

