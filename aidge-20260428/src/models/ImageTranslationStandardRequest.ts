// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageTranslationStandardRequest extends $dara.Model {
  /**
   * @remarks
   * The glossary ID. Optional. Create a glossary in the console and provide its ID. If the glossary ID is empty, the translation results are not modified.
   * 
   * @example
   * glossary_1
   */
  glossary?: string;
  /**
   * @remarks
   * - Image URL: Must be publicly accessible.
   * 
   * This parameter is required.
   * 
   * @example
   * https://images-na.ssl-images-amazon.com/images/I/41bKsNBDcwL.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies whether to translate text on the main subject of the image. Optional. Default value: false. This helps you protect information by avoiding translation of embedded information such as product names.
   * 
   * @example
   * false
   */
  includingProductArea?: boolean;
  /**
   * @remarks
   * The source language code. Required. For supported language pairs, see the supported language pair list.
   * 
   * This parameter is required.
   * 
   * @example
   * en
   */
  sourceLanguage?: string;
  /**
   * @remarks
   * The target language code. Required. For supported language pairs, see the supported language pair list.
   * 
   * This parameter is required.
   * 
   * @example
   * ko
   */
  targetLanguage?: string;
  /**
   * @remarks
   * Specifies whether to translate brand names on the image. Optional. Default value: false. This helps you protect brand name information from being translated.
   * 
   * @example
   * false
   */
  translatingBrandInTheProduct?: boolean;
  /**
   * @remarks
   * Specifies whether to return layer information such as text position, font, and color. When set to true, layer information is returned for integration with image editors for secondary editing. Default value: false.
   * 
   * @example
   * false
   */
  useImageEditor?: boolean;
  static names(): { [key: string]: string } {
    return {
      glossary: 'Glossary',
      imageUrl: 'ImageUrl',
      includingProductArea: 'IncludingProductArea',
      sourceLanguage: 'SourceLanguage',
      targetLanguage: 'TargetLanguage',
      translatingBrandInTheProduct: 'TranslatingBrandInTheProduct',
      useImageEditor: 'UseImageEditor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glossary: 'string',
      imageUrl: 'string',
      includingProductArea: 'boolean',
      sourceLanguage: 'string',
      targetLanguage: 'string',
      translatingBrandInTheProduct: 'boolean',
      useImageEditor: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

