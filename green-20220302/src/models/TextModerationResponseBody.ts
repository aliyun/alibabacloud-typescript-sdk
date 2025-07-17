// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 123456
   */
  accountId?: string;
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * text1234
   */
  dataId?: string;
  /**
   * @remarks
   * The description of the labels.
   * 
   * @example
   * no risk
   */
  descriptions?: string;
  /**
   * @remarks
   * The device ID.
   * 
   * @example
   * xxxxxx
   */
  deviceId?: string;
  /**
   * @remarks
   * The labels. Multiple labels are separated by commas (,). Valid values: ad: ad violation profanity: abuse contraband: contraband sexual_content: pornography violence: violence nonsense: irrigation spam: spam negative_content: undesirable content cyberbullying: cyberbullying C_customized: custom library that is hit
   * 
   * @example
   * porn
   */
  labels?: string;
  manualTaskId?: string;
  /**
   * @remarks
   * The JSON string used to locate the cause. Valid values: riskTips: subcategory label riskWords: risk words adNums: hit advertising number customizedWords: customized words customizedLibs: customized libraries
   * 
   * @example
   * {\\"detectedLanguage\\":\\"ar\\",\\"riskTips\\":\\"sexuality_Suggestive\\",\\"riskWords\\":\\"pxxxxy\\",\\"translatedContent\\":\\"pxxxxy sxxxx\\"}
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      dataId: 'dataId',
      descriptions: 'descriptions',
      deviceId: 'deviceId',
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
      labels: 'string',
      manualTaskId: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TextModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The moderation results.
   */
  data?: TextModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
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

