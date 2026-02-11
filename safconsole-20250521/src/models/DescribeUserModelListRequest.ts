// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserModelListRequest extends $dara.Model {
  /**
   * @remarks
   * Authorization type.
   * 
   * @example
   * READ
   */
  authType?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Model name.
   * 
   * @example
   * StudyX
   */
  name?: string;
  /**
   * @remarks
   * Pagination parameter: number of items per page, default value 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      currentPage: 'string',
      name: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

