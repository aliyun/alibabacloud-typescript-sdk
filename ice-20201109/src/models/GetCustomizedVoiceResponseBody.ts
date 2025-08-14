// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomizedVoiceResponseBodyDataCustomizedVoice extends $dara.Model {
  /**
   * @remarks
   * The media asset ID of the sample audio file.
   * 
   * @example
   * ****42d3c312402982be65975f5b****
   */
  demoAudioMediaId?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * 
   * *   female
   * *   male
   * 
   * @example
   * female
   */
  gender?: string;
  /**
   * @remarks
   * The demonstration scenario.
   * 
   * Valid values:
   * 
   * *   **story**
   * *   **interaction**
   * *   **navigation**
   * 
   * @example
   * interaction
   */
  scenario?: string;
  /**
   * @remarks
   * The voice description.
   */
  voiceDesc?: string;
  /**
   * @remarks
   * The voice ID.
   * 
   * @example
   * xiaozhuan
   */
  voiceId?: string;
  /**
   * @remarks
   * The voice name.
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      demoAudioMediaId: 'DemoAudioMediaId',
      gender: 'Gender',
      scenario: 'Scenario',
      voiceDesc: 'VoiceDesc',
      voiceId: 'VoiceId',
      voiceName: 'VoiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoAudioMediaId: 'string',
      gender: 'string',
      scenario: 'string',
      voiceDesc: 'string',
      voiceId: 'string',
      voiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizedVoiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The personalized human voice.
   */
  customizedVoice?: GetCustomizedVoiceResponseBodyDataCustomizedVoice;
  static names(): { [key: string]: string } {
    return {
      customizedVoice: 'CustomizedVoice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedVoice: GetCustomizedVoiceResponseBodyDataCustomizedVoice,
    };
  }

  validate() {
    if(this.customizedVoice && typeof (this.customizedVoice as any).validate === 'function') {
      (this.customizedVoice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomizedVoiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetCustomizedVoiceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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
      data: GetCustomizedVoiceResponseBodyData,
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

