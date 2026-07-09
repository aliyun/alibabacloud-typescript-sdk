// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContextRequest extends $dara.Model {
  /**
   * @remarks
   * The structured filter conditions. The key is the field name, and the value is the expected matching value.
   * 
   * @example
   * {"userId":"alice"}
   */
  filter?: { [key: string]: any };
  /**
   * @remarks
   * Specifies whether to apply structured formatting to the returned results.
   * 
   * @example
   * true
   */
  formatted?: boolean;
  /**
   * @remarks
   * The maximum number of returned results (similarity Top-N).
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The retrieval query text. Natural language is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 用户最近的偏好设置
   */
  query?: string;
  /**
   * @remarks
   * The retrieval options that control the retrieval strategy.
   * 
   * @example
   * semantic
   */
  retrievalOption?: string;
  /**
   * @remarks
   * The similarity threshold. Results with a similarity score lower than this value are filtered out. Valid values: 0 to 1.
   * 
   * @example
   * 0.5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      formatted: 'formatted',
      limit: 'limit',
      query: 'query',
      retrievalOption: 'retrievalOption',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatted: 'boolean',
      limit: 'number',
      query: 'string',
      retrievalOption: 'string',
      threshold: 'number',
    };
  }

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

