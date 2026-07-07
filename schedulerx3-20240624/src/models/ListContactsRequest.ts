// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsRequest extends $dara.Model {
  /**
   * @example
   * Tom
   */
  contactName?: string;
  /**
   * @remarks
   * 页码，从 1 开始，默认 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * 每页条数，默认 20，最大 100
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

