// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SizeChartExtractRequest extends $dara.Model {
  /**
   * @remarks
   * The list of column names (such as Size, Bust, Length).
   * 
   * @example
   * ["Size","Bust","Length"]
   */
  columnNameList?: string[];
  /**
   * @remarks
   * The URL of the size chart image to extract.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/size_chart.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The language model for output (such as en, cn). Set this parameter to cn for Chinese or en for English. If not specified, the original language is preserved.
   * 
   * @example
   * en
   */
  languageModel?: string;
  static names(): { [key: string]: string } {
    return {
      columnNameList: 'ColumnNameList',
      imageUrl: 'ImageUrl',
      languageModel: 'LanguageModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNameList: { 'type': 'array', 'itemType': 'string' },
      imageUrl: 'string',
      languageModel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnNameList)) {
      $dara.Model.validateArray(this.columnNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

