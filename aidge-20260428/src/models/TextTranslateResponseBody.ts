// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateResponseBodyDataTranslations extends $dara.Model {
  /**
   * @remarks
   * The number of characters in the source text.
   * 
   * @example
   * 11
   */
  characters?: number;
  /**
   * @remarks
   * The automatically detected source language code.
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

export class TextTranslateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of translation results. Each element corresponds to a translation result for an entry in the input text list.
   */
  translations?: TextTranslateResponseBodyDataTranslations[];
  /**
   * @remarks
   * The usage information, including the number of input characters.
   * 
   * @example
   * {"InputCharacterCount":5}
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
      translations: { 'type': 'array', 'itemType': TextTranslateResponseBodyDataTranslations },
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

export class TextTranslateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value "success" is returned for a successful call.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The translation result data, which contains the translation list and usage information.
   */
  data?: TextTranslateResponseBodyData;
  /**
   * @remarks
   * The error message. The value "Success" is returned for a successful call. For a failed call, a specific error message is returned, such as "The parameters contain sensitive information. Try other input.".
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * 922E43BB-EE0E-1A29-B143-BB91BB3EA6AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values: true and false.
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
      data: TextTranslateResponseBodyData,
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

