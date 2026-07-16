// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationResponseBodyDataExtLlmContent extends $dara.Model {
  /**
   * @remarks
   * The output content.
   * 
   * @example
   * 正常。文本中无风险内容。
   */
  outputText?: string;
  static names(): { [key: string]: string } {
    return {
      outputText: 'outputText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBodyDataExt extends $dara.Model {
  /**
   * @remarks
   * The output from the Large Language Model (LLM).
   */
  llmContent?: TextModerationResponseBodyDataExtLlmContent;
  static names(): { [key: string]: string } {
    return {
      llmContent: 'llmContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmContent: TextModerationResponseBodyDataExtLlmContent,
    };
  }

  validate() {
    if(this.llmContent && typeof (this.llmContent as any).validate === 'function') {
      (this.llmContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The \\`accountId\\` specified in the request.
   * 
   * @example
   * 123456
   */
  accountId?: string;
  /**
   * @remarks
   * The data ID of the moderated object.
   * 
   * > If you specify the dataId parameter in the request, its value is returned in this parameter.
   * 
   * @example
   * text1234
   */
  dataId?: string;
  /**
   * @remarks
   * The description of the label.
   * 
   * @example
   * 疑似广告内容
   */
  descriptions?: string;
  /**
   * @remarks
   * The \\`deviceId\\` specified in the request.
   * 
   * @example
   * xxxxxx
   */
  deviceId?: string;
  /**
   * @remarks
   * Auxiliary reference information for the text.
   */
  ext?: TextModerationResponseBodyDataExt;
  /**
   * @remarks
   * The moderation labels. If multiple labels are returned, they are separated by commas (,). Valid values: ad: advertisement profanity: profanity contraband: contraband sexual_content: sexual content violence: violent and terrorist content nonsense: meaningless content spam: spam negative_content: undesirable content cyberbullying: cyberbullying C_customized: A match in a custom library
   * 
   * @example
   * porn
   */
  labels?: string;
  /**
   * @remarks
   * The ID of the manual review task.
   * 
   * @example
   * xxxxx-xxxxx
   */
  manualTaskId?: string;
  /**
   * @remarks
   * A JSON string that contains the reason for the moderation result. The string includes the following fields:
   * 
   * 1. riskTips: The sub-labels.
   * 
   * 2. riskWords: The detected risk words.
   * 
   * 3. adNums: The detected ad-related numbers.
   * 
   * 4. customizedWords: The detected custom words.
   * 
   * 5. customizedLibs: The names of the custom libraries that contain a match.
   * 
   * 6. riskLevel: The risk level, which is recommended by the system. Valid values:
   * 
   * - high: high risk
   * 
   * - medium: medium risk
   * 
   * - low: low risk
   * 
   * @example
   * {\\"riskLevel\\":\\"high\\",\\"riskTips\\":\\"色情_低俗词\\",\\"riskWords\\":\\"色情服务\\"}
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      dataId: 'dataId',
      descriptions: 'descriptions',
      deviceId: 'deviceId',
      ext: 'ext',
      labels: 'labels',
      manualTaskId: 'manualTaskId',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dataId: 'string',
      descriptions: 'string',
      deviceId: 'string',
      ext: TextModerationResponseBodyDataExt,
      labels: 'string',
      manualTaskId: 'string',
      reason: 'string',
    };
  }

  validate() {
    if(this.ext && typeof (this.ext as any).validate === 'function') {
      (this.ext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation result data.
   */
  data?: TextModerationResponseBodyData;
  /**
   * @remarks
   * The response message for the request.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TextModerationResponseBodyData,
      message: 'string',
      requestId: 'string',
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

