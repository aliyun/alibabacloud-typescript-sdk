// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the large language model application. You can view the code on the [Large Language Model Application Management](https://aiccs.console.aliyun.com/engine/llmApp) page.
   * 
   * This parameter is required.
   * 
   * @example
   * F32******
   */
  applicationCode?: string;
  /**
   * @remarks
   * The custom business parameters. When you call this API operation, you can pass custom parameters to the large language model gateway. When the large language model gateway requests the customer model, this parameter is passed to the customer model.
   * 
   * - [Model Studio workflow application: Parameter passing](https://www.alibabacloud.com/help/en/model-studio/invoke-workflow-application/#6e644d5a7b3ia). Example: `biz_params = {"city": "Hangzhou"}`
   * 
   * - [Model Studio agent application: Pass custom parameters](https://www.alibabacloud.com/help/en/model-studio/call-single-agent-application/#b774db7cdc0aa). Example:
   * `
   * biz_params = {
   *   "user_prompt_params": "{\"city\":\"Beijing\"}"
   * }
   * `
   * 
   * @example
   * biz_params = {
   *   "user_prompt_params": "{\"city\":\"Beijing\"}"
   * }
   */
  bizParamShrink?: string;
  /**
   * @remarks
   * The called number that receives the intelligent outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * The caller number. This parameter is required and supports only numbers in the Chinese mainland. Go to the [Real Number Management](https://dyvmsnext.console.aliyun.com/number/list/normal) page of Voice Service to view the number.
   * 
   * > 
   * > - If you use a self-managed line, you must pass the number of the self-managed line.
   * 
   * @example
   * 132****2054
   */
  callerNumber?: string;
  /**
   * @remarks
   * The code of the self-managed line.
   * > 
   * > - If you need to use a self-managed line, contact operations to enable this feature. After the self-managed line is approved, the line code is returned. If no line code is returned, do not specify this parameter.
   * 
   * @example
   * SELF_xxxxx_A_NET
   */
  customerLineCode?: string;
  /**
   * @remarks
   * The extension number of the X number. The extension number cannot exceed 5 digits.
   * 
   * >Notice: This parameter is required only in AXN extension number mode. If no extension number exists, do not specify this parameter.
   * 
   * @example
   * 123
   */
  extension?: string;
  /**
   * @remarks
   * The ID reserved for the caller. This ID is returned to the caller in the receipt message. When the large language model gateway requests the customer model, this parameter is passed to the customer model. The length is 1 to 15 bytes.
   * 
   * @example
   * 222356****
   */
  outId?: string;
  /**
   * @remarks
   * The prompt variables. Go to the [Large Language Model Application Management](https://aiccs.console.aliyun.com/engine/llmApp) page and click Details to view the prompt variables of the large language model application that you created.
   * 
   * @example
   * {
   *   "style": "gentle"
   * }
   */
  promptParamShrink?: string;
  /**
   * @remarks
   * The maximum call duration. The call is automatically disconnected after the timeout period. Unit: seconds.
   * >
   * >- Maximum value: 3600.
   * >- Minimum value: 600.
   * 
   * @example
   * 1200
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * The opening remark variables. Go to the [Large Language Model Application Management](https://aiccs.console.aliyun.com/engine/llmApp) page and click Details to view the opening remark variables of the large language model application that you created.
   * 
   * @example
   * {
   *   "name": "Xiaoming",
   *   "address": "Hangzhou, Zhejiang"
   * }
   */
  startWordParamShrink?: string;
  /**
   * @remarks
   * The speech rate for TTS playback.
   * 
   * > 
   * > - Valid values: -200 to 200. Default value: 0.
   * > - If you do not specify this parameter, the speech rate configured for the large language model application is used by default.
   * 
   * @example
   * 50
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice code for text-to-speech (TTS) playback.
   * 
   * > 
   * > - If you do not specify this parameter, the voice code configured for the large language model application is used by default.
   * > - You can call the [ListAvailableTts](https://help.aliyun.com/document_detail/2926668.html) API operation to query all voice codes.
   * 
   * @example
   * V65******
   */
  ttsVoiceCode?: string;
  /**
   * @remarks
   * The volume for TTS playback.
   * > 
   * > - Valid values: 0 to 100. Default value: 0.
   * > - If you do not specify this parameter, the volume configured for the large language model application is used by default.
   * 
   * @example
   * 10
   */
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

