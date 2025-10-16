// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemorySessionsRequest extends $dara.Model {
  /**
   * @example
   * 1740622996
   */
  from?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1747275768
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

