// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContextRequest extends $dara.Model {
  /**
   * @example
   * {"userId":"alice"}
   */
  filter?: { [key: string]: any };
  /**
   * @example
   * true
   */
  formatted?: boolean;
  /**
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 用户最近的偏好设置
   */
  query?: string;
  /**
   * @example
   * semantic
   */
  retrievalOption?: string;
  /**
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

