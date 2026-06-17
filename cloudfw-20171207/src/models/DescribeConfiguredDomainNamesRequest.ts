// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfiguredDomainNamesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The traffic direction.
   * 
   * This parameter is required.
   * 
   * @example
   * out
   */
  direction?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The group name.
   * 
   * This parameter is required.
   * 
   * @example
   * ignore
   */
  groupName?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The trace code.
   * 
   * This parameter is required.
   * 
   * @example
   * yundun
   */
  sourceCode?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 1.202.149.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      direction: 'Direction',
      domainName: 'DomainName',
      groupName: 'GroupName',
      lang: 'Lang',
      pageSize: 'PageSize',
      sourceCode: 'SourceCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'string',
      direction: 'string',
      domainName: 'string',
      groupName: 'string',
      lang: 'string',
      pageSize: 'string',
      sourceCode: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

