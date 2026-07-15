// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCasCertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: any integer from 1 to 1000.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The certificate name for fuzzy match.
   * 
   * @example
   * aliyun
   */
  searchKeyword?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKeyword: 'SearchKeyword',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      searchKeyword: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

