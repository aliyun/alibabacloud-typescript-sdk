// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateProductContentRequest extends $dara.Model {
  /**
   * @remarks
   * Takes effect only when ContentType is set to bulletPoint. Valid values: 1 to 5. Default value in generate mode: 1. In rewrite mode, if you manually specify this parameter, the value must be the same as the number of non-empty paragraphs in SourceText. This parameter is ignored for other copy types.
   * 
   * @example
   * 5
   */
  bulletPointCount?: number;
  /**
   * @remarks
   * The copy type. Valid values: title, highlight, keywords, bulletPoint, description, and general. The general value is supported only when Operation is set to customize. If a platform is specified, you must select a type supported by the platform.
   * 
   * This parameter is required.
   * 
   * @example
   * description
   */
  contentType?: string;
  /**
   * @remarks
   * Specifies whether to enable translation. Default value: false. Valid values: true and false.
   * 
   * @example
   * True
   */
  enableTranslation?: boolean;
  /**
   * @remarks
   * The maximum number of characters for the final output text. If you specify this parameter, the value must be an integer greater than or equal to 30. If a platform is specified and this parameter is not specified, the configured upper limit for the content type on the platform is used. Example: 60.
   * 
   * @example
   * 1000
   */
  maxLength?: number;
  /**
   * @remarks
   * The minimum number of characters for the final output text. If you specify this parameter, the value must be an integer greater than or equal to 10. If a platform is specified and this parameter is not specified, the configured lower limit for the content type on the platform is used.
   * 
   * @example
   * 500
   */
  minLength?: number;
  /**
   * @remarks
   * The operation type. Valid values: generate, rewrite, and customize. The customize value allows you to enter custom prompts.
   * 
   * This parameter is required.
   * 
   * @example
   * generate
   */
  operation?: string;
  /**
   * @remarks
   * The target platform. Valid values: amazon, temu, tiktok, shopify, Wildberries, and tmall. If this parameter is not specified, the general scenario is used. Enum values are case-sensitive.
   * 
   * @example
   * amazon
   */
  platform?: string;
  /**
   * @remarks
   * The product attribute information. Default value: empty. The length must be 0 to 500 characters.
   * 
   * @example
   * {"brand":"Supor","material":"304 stainless steel"}
   */
  productAttributes?: string;
  /**
   * @remarks
   * The product category. Default value: an empty string. The length must be 0 to 100 characters. This parameter helps understand the category during generation and eliminates ambiguity during rewriting.
   * 
   * @example
   * Kitchenware
   */
  productCategory?: string;
  /**
   * @remarks
   * The custom prompt. The maximum length is 10,000 characters.
   * 
   * @example
   * Custom
   */
  prompt?: string;
  /**
   * @remarks
   * The source language. Valid values: zh and en. Automatic language detection is not supported. Supported source languages: Chinese (zh) and English (en).
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The product information or copy to be rewritten. The length must be 20 to 3,000 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * Stainless steel steamer 28cm 3-tier large capacity household kitchen essential steaming and boiling dual-use cookware
   */
  sourceText?: string;
  /**
   * @remarks
   * Required when EnableTranslation is set to true. For valid values, see Multilingual processing. If translation is disabled, this parameter is optional. If specified, the value must be the same as SourceLanguage. Supported target languages: Chinese (zh), English (en), Russian (ru), German (de), French (fr), Korean (ko), Italian (it), Thai (th), Arabic (ar), Turkish (tr), Hebrew (he), Ukrainian (uk), Polish (pl), Japanese (ja), Dutch (nl), Portuguese (pt), Spanish (es), Malay (ms), Bulgarian (bg), Indonesian (id), and Vietnamese (vi).
   * 
   * @example
   * en
   */
  targetLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      bulletPointCount: 'BulletPointCount',
      contentType: 'ContentType',
      enableTranslation: 'EnableTranslation',
      maxLength: 'MaxLength',
      minLength: 'MinLength',
      operation: 'Operation',
      platform: 'Platform',
      productAttributes: 'ProductAttributes',
      productCategory: 'ProductCategory',
      prompt: 'Prompt',
      sourceLanguage: 'SourceLanguage',
      sourceText: 'SourceText',
      targetLanguage: 'TargetLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bulletPointCount: 'number',
      contentType: 'string',
      enableTranslation: 'boolean',
      maxLength: 'number',
      minLength: 'number',
      operation: 'string',
      platform: 'string',
      productAttributes: 'string',
      productCategory: 'string',
      prompt: 'string',
      sourceLanguage: 'string',
      sourceText: 'string',
      targetLanguage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

