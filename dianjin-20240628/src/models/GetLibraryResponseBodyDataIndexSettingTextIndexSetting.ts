// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLibraryResponseBodyDataIndexSettingTextIndexSetting extends $dara.Model {
  /**
   * @example
   * ElasticSearch
   */
  category?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * IkMaxWord
   */
  indexAnalyzer?: string;
  /**
   * @example
   * null
   */
  rankThreshold?: number;
  /**
   * @example
   * Standard
   */
  searchAnalyzer?: string;
  /**
   * @example
   * 10
   */
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      enable: 'enable',
      indexAnalyzer: 'indexAnalyzer',
      rankThreshold: 'rankThreshold',
      searchAnalyzer: 'searchAnalyzer',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      enable: 'boolean',
      indexAnalyzer: 'string',
      rankThreshold: 'number',
      searchAnalyzer: 'string',
      topK: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

