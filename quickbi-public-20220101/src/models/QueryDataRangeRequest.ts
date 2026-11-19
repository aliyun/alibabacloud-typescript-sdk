// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDataRangeRequest extends $dara.Model {
  /**
   * @remarks
   * The name. Fuzzy search is supported.
   * 
   * @example
   * Test
   */
  keyword?: string;
  /**
   * @remarks
   * The data scope type. Valid values:
   * - llmCube: Data query resource.
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

