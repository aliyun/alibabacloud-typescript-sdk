// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDemonstrationForCustomizedVoiceJobResponseBodyDataDemonstrationList extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the text, which corresponds to the AudioRecordId field that must be passed during audio detection.
   * 
   * @example
   * 2
   */
  audioId?: number;
  /**
   * @remarks
   * The URL of the sample audio.
   * - OSS URL.
   * >Notice: The audio file expires in 12 hours.</notice>
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/1.wav
   */
  demoAudio?: string;
  /**
   * @remarks
   * The text content to be read aloud.
   * 
   * @example
   * No, he thought for a moment. I cannot say this to the king. That would be a lie
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

export class GetDemonstrationForCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The demonstration list, which returns 20 text passages to be read aloud and their corresponding audio samples.
   */
  demonstrationList?: GetDemonstrationForCustomizedVoiceJobResponseBodyDataDemonstrationList[];
  static names(): { [key: string]: string } {
    return {
      demonstrationList: 'DemonstrationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demonstrationList: { 'type': 'array', 'itemType': GetDemonstrationForCustomizedVoiceJobResponseBodyDataDemonstrationList },
    };
  }

  validate() {
    if(Array.isArray(this.demonstrationList)) {
      $dara.Model.validateArray(this.demonstrationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDemonstrationForCustomizedVoiceJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetDemonstrationForCustomizedVoiceJobResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDemonstrationForCustomizedVoiceJobResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

