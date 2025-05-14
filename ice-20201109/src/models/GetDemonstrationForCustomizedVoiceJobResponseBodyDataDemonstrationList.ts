// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDemonstrationForCustomizedVoiceJobResponseBodyDataDemonstrationList extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the text, which corresponds to the AduioRecordId parameter to be passed during audio check.
   * 
   * @example
   * 2
   */
  audioId?: number;
  /**
   * @remarks
   * The URL of the sample audio.
   * 
   * *   The value is an Object Storage Service (OSS) URL.
   * 
   *     **
   * 
   *     **Note**: The URL expires in 12 hours.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/1.wav
   */
  demoAudio?: string;
  /**
   * @remarks
   * The text content to be read.
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      audioId: 'AudioId',
      demoAudio: 'DemoAudio',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioId: 'number',
      demoAudio: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

