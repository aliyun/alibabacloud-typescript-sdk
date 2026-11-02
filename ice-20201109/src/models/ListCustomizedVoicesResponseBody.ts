// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomizedVoicesResponseBodyDataCustomizedVoiceList extends $dara.Model {
  /**
   * @remarks
   * The media asset ID of the demo audio.
   * 
   * @example
   * ****4d5e829d498aaf966b119348****
   */
  demoAudioMediaId?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - female: Female.
   * - male: Male.
   * 
   * @example
   * male
   */
  gender?: string;
  /**
   * @remarks
   * The scenario. Valid values:
   * - story: Story.
   * - interaction: Interaction.
   * - navigation: Navigation.
   * 
   * @example
   * story
   */
  scenario?: string;
  /**
   * @remarks
   * The voice type. Valid values:
   * - Basic: Basic edition.
   * - Standard: Standard edition.
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The voice description.
   * 
   * @example
   * This is a personalized vocal small special
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
   * The voice name, which is typically in Chinese.
   * 
   * @example
   * The voice name.
   */
  voiceName?: string;
  static names(): { [key: string]: string } {
    return {
      demoAudioMediaId: 'DemoAudioMediaId',
      gender: 'Gender',
      scenario: 'Scenario',
      type: 'Type',
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
      type: 'string',
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

export class ListCustomizedVoicesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of personalized voices.
   */
  customizedVoiceList?: ListCustomizedVoicesResponseBodyDataCustomizedVoiceList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 41
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customizedVoiceList: 'CustomizedVoiceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizedVoiceList: { 'type': 'array', 'itemType': ListCustomizedVoicesResponseBodyDataCustomizedVoiceList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customizedVoiceList)) {
      $dara.Model.validateArray(this.customizedVoiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomizedVoicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListCustomizedVoicesResponseBodyData;
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
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
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
      data: ListCustomizedVoicesResponseBodyData,
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

