// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The field-level equality filter condition. The value is a URL-encoded JSON string (which decodes to a {"fieldName": value} object). Multiple fields have an AND relationship, meaning all conditions must be met for a result to be returned.
   * 
   * @example
   * %7B%22enabled%22%3Atrue%7D
   */
  filter?: string;
  /**
   * @remarks
   * page
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * pageSize
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      page: 'page',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      page: 'number',
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

