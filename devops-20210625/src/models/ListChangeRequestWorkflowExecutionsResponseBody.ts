// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeRequestWorkflowExecutionsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 10
   */
  pages?: number;
  records?: any[];
  /**
   * @example
   * 200
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pageSize: 'pageSize',
      pages: 'pages',
      records: 'records',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pageSize: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': 'any' },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

