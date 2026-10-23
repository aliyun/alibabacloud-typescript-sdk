// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SizeChartExtractAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business order number of the caller. It is recorded when the request is accepted and returned as is when you query the asynchronous task result.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The list of column names to extract, such as Size, Bust, and Length.
   */
  columnNameListShrink?: string;
  /**
   * @remarks
   * The image URL. The image must be in the JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 256 × 256 pixels and 3000 × 3000 pixels, and the file size cannot exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The output language format. If you do not specify this parameter, the original language is used. If the original image language is Chinese or English, specifying en outputs English, and specifying cn outputs Chinese.
   * 
   * @example
   * en
   */
  languageModel?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      columnNameListShrink: 'ColumnNameList',
      imageUrl: 'ImageUrl',
      languageModel: 'LanguageModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      columnNameListShrink: 'string',
      imageUrl: 'string',
      languageModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

