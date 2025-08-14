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

export class GetDemonstrationForCustomizedVoiceJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of 20 text entries to be read and the corresponding sample audio.
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
   * The data returned.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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

