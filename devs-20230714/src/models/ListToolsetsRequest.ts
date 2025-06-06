// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListToolsetsRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  keyword?: string;
  labelSelector?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelSelector)) {
      $dara.Model.validateArray(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

