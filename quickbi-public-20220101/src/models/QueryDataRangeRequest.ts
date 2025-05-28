// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataRangeRequest extends $dara.Model {
  /**
   * @remarks
   * Name, for fuzzy search.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * Data range type:
   * 
   * - llmCube: LlmCube resource.
   * - llmCubeTheme: Analysis theme.
   * 
   * This parameter is required.
   * 
   * @example
   * llmCube
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

