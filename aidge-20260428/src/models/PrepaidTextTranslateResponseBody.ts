// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrepaidTextTranslateResponseBodyDataTranslations extends $dara.Model {
  /**
   * @remarks
   * The character count of the source text.
   * 
   * @example
   * 11
   */
  characters?: number;
  /**
   * @remarks
   * The automatically detected source language.
   * 
   * @example
   * en
   */
  detectedLanguage?: string;
  /**
   * @remarks
   * The translated text.
   * 
   * @example
   * 你好世界
   */
  translatedText?: string;
  static names(): { [key: string]: string } {
    return {
      characters: 'Characters',
      detectedLanguage: 'DetectedLanguage',
      translatedText: 'TranslatedText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characters: 'number',
      detectedLanguage: 'string',
      translatedText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepaidTextTranslateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The translation result list. Each element corresponds to a translation result for an entry in the input text list.
   */
  translations?: PrepaidTextTranslateResponseBodyDataTranslations[];
  /**
   * @remarks
   * The usage information, including the input character count.
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      translations: 'Translations',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      translations: { 'type': 'array', 'itemType': PrepaidTextTranslateResponseBodyDataTranslations },
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.translations)) {
      $dara.Model.validateArray(this.translations);
    }
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PrepaidTextTranslateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Returns "success" for normal calls.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The translation result data, including the translation list and usage information.
   */
  data?: PrepaidTextTranslateResponseBodyData;
  /**
   * @remarks
   * The error message. Returns "Success" for normal calls. Returns specific error information for exceptions, such as "The parameters contain sensitive information. Try other input."
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, used to identify a unique request call.
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. true indicates success. false indicates failure.
   * 
   * @example
   * True
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
      data: PrepaidTextTranslateResponseBodyData,
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

