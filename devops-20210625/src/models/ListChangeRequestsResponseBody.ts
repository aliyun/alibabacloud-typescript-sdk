// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeRequestsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  data?: any[];
  /**
   * @example
   * eb13ac6049d3d78159d60f84af
   */
  nextToken?: string;
  /**
   * @example
   * 5
   */
  pages?: number;
  /**
   * @example
   * 20
   */
  perPage?: number;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      data: 'data',
      nextToken: 'nextToken',
      pages: 'pages',
      perPage: 'perPage',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      data: { 'type': 'array', 'itemType': 'any' },
      nextToken: 'string',
      pages: 'number',
      perPage: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

