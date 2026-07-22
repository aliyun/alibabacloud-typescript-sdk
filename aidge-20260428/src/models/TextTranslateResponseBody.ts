// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextTranslateResponseBodyDataTranslations extends $dara.Model {
  /**
   * @remarks
   * The source text character count.
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
   * Hello World.
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
   * The translation result list. Each element corresponds to a translation result for an entry in the input text list.
   */
  translations?: TextTranslateResponseBodyDataTranslations[];
  /**
   * @remarks
   * The usage information, including the input character count.
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
  data?: TextTranslateResponseBodyData;
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
   * 922E43BB-EE0E-1A29-B143-BB91BB3EA6AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. true indicates success. false indicates failure.
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

