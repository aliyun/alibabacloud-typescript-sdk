// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodSSLCertificateListRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The certificate name for fuzzy match.
   * 
   * @example
   * certabc
   */
  searchKeyword?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchKeyword: 'SearchKeyword',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
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

