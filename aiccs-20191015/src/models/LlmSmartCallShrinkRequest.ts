// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * F32XXX2CF9
   */
  applicationCode?: string;
  bizParamShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @example
   * 057188040000
   */
  callerNumber?: string;
  customerLineCode?: string;
  extension?: string;
  /**
   * @example
   * 222356****
   */
  outId?: string;
  promptParamShrink?: string;
  sessionTimeout?: number;
  startWordParamShrink?: string;
  ttsSpeed?: number;
  ttsVoiceCode?: string;
  ttsVolume?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      bizParamShrink: 'BizParam',
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      customerLineCode: 'CustomerLineCode',
      extension: 'Extension',
      outId: 'OutId',
      promptParamShrink: 'PromptParam',
      sessionTimeout: 'SessionTimeout',
      startWordParamShrink: 'StartWordParam',
      ttsSpeed: 'TtsSpeed',
      ttsVoiceCode: 'TtsVoiceCode',
      ttsVolume: 'TtsVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      bizParamShrink: 'string',
      calledNumber: 'string',
      callerNumber: 'string',
      customerLineCode: 'string',
      extension: 'string',
      outId: 'string',
      promptParamShrink: 'string',
      sessionTimeout: 'number',
      startWordParamShrink: 'string',
      ttsSpeed: 'number',
      ttsVoiceCode: 'string',
      ttsVolume: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

