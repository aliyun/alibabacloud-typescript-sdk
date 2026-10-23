// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateProductContentRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  bulletPointCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * description
   */
  contentType?: string;
  /**
   * @example
   * True
   */
  enableTranslation?: boolean;
  /**
   * @example
   * 1000
   */
  maxLength?: number;
  /**
   * @example
   * 500
   */
  minLength?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * generate
   */
  operation?: string;
  /**
   * @example
   * amazon
   */
  platform?: string;
  /**
   * @example
   * {"brand":"苏泊尔","material":"304不锈钢"}
   */
  productAttributes?: string;
  /**
   * @example
   * 厨房用具
   */
  productCategory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * zh
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 不锈钢蒸锅28cm三层大容量家用厨房必备蒸煮两用锅具
   */
  sourceText?: string;
  /**
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

