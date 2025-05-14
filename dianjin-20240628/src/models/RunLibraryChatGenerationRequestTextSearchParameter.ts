// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunLibraryChatGenerationRequestTextSearchParameter extends $dara.Model {
  /**
   * @example
   * 10
   */
  limit?: number;
  /**
   * @example
   * IkMaxWord
   */
  searchAnalyzerType?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      searchAnalyzerType: 'searchAnalyzerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      searchAnalyzerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

