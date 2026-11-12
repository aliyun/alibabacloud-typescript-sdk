// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * Tom
   */
  contactName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
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

