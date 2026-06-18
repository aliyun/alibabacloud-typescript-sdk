// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LlmSmartCallRequest extends $dara.Model {
  /**
   * @remarks
   * LLM application code. View it in the [Application Management](https://aiccs.console.aliyun.com/engine/llmApp) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * F32******
   */
  applicationCode?: string;
  /**
   * @remarks
   * Business parameters. These parameters are passed to the customer model when invoking the customer model.
   * 
   * @example
   * biz_params = {
   *   "user_prompt_params": "{\\"city\\":\\"北京\\"}"
   * }
   */
  bizParam?: { [key: string]: any };
  /**
   * @remarks
   * Called number that receives the intelligent outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 137****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * Caller number. This parameter is required and supports only numbers from the Chinese mainland. View available numbers in the Voice Service [Number Management](https://dyvmsnext.console.aliyun.com/number/list/normal) interface.
   * 
   * @example
   * 132****2054
   */
  callerNumber?: string;
  /**
   * @remarks
   * Customer-provided ingest endpoint encoding.
   * 
   * > 
   * > - If you use your own line, contact Alibaba Cloud support to enable this feature.
   * > - The line encoding is provided by Alibaba Cloud support. Do not set this parameter if you do not have one.
   * 
   * @example
   * SELF_xxxxx_A_NET
   */
  customerLineCode?: string;
  /**
   * @remarks
   * The extension number of the X number, up to 5 digits.
   * 
   * >Notice: Fill this field only in AXN extension mode. If no extension number exists, do not fill it.
   * 
   * @example
   * 123
   */
  extension?: string;
  /**
   * @remarks
   * An ID reserved for the caller. This ID will be returned to the caller through a receipt message. Length: 1–15 bytes.
   * 
   * @example
   * 222356****
   */
  outId?: string;
  /**
   * @remarks
   * Prompt variable. Go to the [Application Management](https://aiccs.console.aliyun.com/engine/llmApp) interface and click Details to view the prompt variables you created.
   * 
   * @example
   * {
   *   "style": "温柔"
   * }
   */
  promptParam?: { [key: string]: any };
  /**
   * @remarks
   * Maximum call duration. The call is automatically disconnected after timeout. Unit: seconds.
   * >
   * >- Maximum value: 3600 s.
   * >- Minimum value: 600 s.
   * 
   * @example
   * 1200
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * Start-word variables. Go to the [LLM Application Management](https://aiccs.console.aliyun.com/engine/llmApp) interface and click Details to view the start-word variables of your created LLM application.
   * 
   * @example
   * {
   *   "name": "小明",
   *   "address": "浙江省杭州市"
   * }
   */
  startWordParam?: { [key: string]: any };
  /**
   * @remarks
   * Voice speed during TTS playback.
   * 
   * > 
   * > - Value range: -200 to 200. Default value is 0.
   * > - If this parameter is not set, the voice speed configured in the LLM application is used by default.
   * 
   * @example
   * 50
   */
  ttsSpeed?: number;
  /**
   * @remarks
   * The voice code used for TTS playback.
   * > 
   * > - If no value is set, the voice code configured in the LLM application is used by default.
   * > - You can use the [ListAvailableTts](https://help.aliyun.com/document_detail/2926668.html) API to view all available voice codes.
   * 
   * @example
   * V65******
   */
  ttsVoiceCode?: string;
  /**
   * @remarks
   * The volume for TTS playback.
   * > 
   * > - Value range: 0–100. Default value is 0.
   * > - If no value is set, the volume configured in the LLM application is used by default.
   * 
   * @example
   * 10
   */
  ttsVolume?: number;
  static names(): { [key: string]: string } {
    return {
      applicationCode: 'ApplicationCode',
      bizParam: 'BizParam',
      calledNumber: 'CalledNumber',
      callerNumber: 'CallerNumber',
      customerLineCode: 'CustomerLineCode',
      extension: 'Extension',
      outId: 'OutId',
      promptParam: 'PromptParam',
      sessionTimeout: 'SessionTimeout',
      startWordParam: 'StartWordParam',
      ttsSpeed: 'TtsSpeed',
      ttsVoiceCode: 'TtsVoiceCode',
      ttsVolume: 'TtsVolume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCode: 'string',
      bizParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      calledNumber: 'string',
      callerNumber: 'string',
      customerLineCode: 'string',
      extension: 'string',
      outId: 'string',
      promptParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sessionTimeout: 'number',
      startWordParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ttsSpeed: 'number',
      ttsVoiceCode: 'string',
      ttsVolume: 'number',
    };
  }

  validate() {
    if(this.bizParam) {
      $dara.Model.validateMap(this.bizParam);
    }
    if(this.promptParam) {
      $dara.Model.validateMap(this.promptParam);
    }
    if(this.startWordParam) {
      $dara.Model.validateMap(this.startWordParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

