// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLabelGeneratedResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of input tokens for the LLM.
   * 
   * @example
   * 7371
   */
  inputTokens?: number;
  /**
   * @remarks
   * The number of LLM calls.
   * 
   * @example
   * 4
   */
  llmCallNum?: number;
  /**
   * @remarks
   * The number of output tokens for the LLM.
   * 
   * @example
   * 355
   */
  outputTokens?: number;
  /**
   * @remarks
   * The pre-signed download URL of the result file.
   * 
   * @example
   * https://sca-eas-mining.oss-cn-beijing.aliyuncs.com/xxx.xlsx?Expires=...
   */
  resultFileUrl?: string;
  /**
   * @remarks
   * The ID of the generation task.
   * 
   * @example
   * 20260616-4955F615-A74E-171E-86ED-080F60C72EC9
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      llmCallNum: 'LlmCallNum',
      outputTokens: 'OutputTokens',
      resultFileUrl: 'ResultFileUrl',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      llmCallNum: 'number',
      outputTokens: 'number',
      resultFileUrl: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLabelGeneratedResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code. A value of **200** indicates success. Other values indicate failure. You can use this field to determine the cause of failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetLabelGeneratedResultResponseBodyData;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. true: The call was successful. false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetLabelGeneratedResultResponseBodyData,
      message: 'string',
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

