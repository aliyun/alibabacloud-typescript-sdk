// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OmniRealtimeConversationEURequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20250211/tixcef/cherry.wav
   */
  inputAudio?: string;
  userPrompt?: string;
  /**
   * @example
   * Cherry
   */
  voice?: string;
  static names(): { [key: string]: string } {
    return {
      inputAudio: 'inputAudio',
      userPrompt: 'userPrompt',
      voice: 'voice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputAudio: 'string',
      userPrompt: 'string',
      voice: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

