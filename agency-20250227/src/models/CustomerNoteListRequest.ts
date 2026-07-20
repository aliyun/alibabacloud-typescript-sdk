// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteListRequest extends $dara.Model {
  /**
   * @example
   * 5625862916391497
   */
  customerUid?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      customerUid: 'CustomerUid',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerUid: 'string',
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

