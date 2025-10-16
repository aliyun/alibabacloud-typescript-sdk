// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemoryEventRequest extends $dara.Model {
  /**
   * @example
   * 1742347023
   */
  from?: number;
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
  /**
   * @example
   * 1736561650
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

