// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatSessionListRequest extends $dara.Model {
  /**
   * @remarks
   * Pagination parameter, page number, default is 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Session name.
   * 
   * @example
   * oklabs
   */
  name?: string;
  /**
   * @remarks
   * Page size, default is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique identifier of the user. If not provided, the SDK calling account will be used as the user ID by default.
   * 
   * @example
   * 12222
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      name: 'name',
      pageSize: 'pageSize',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

