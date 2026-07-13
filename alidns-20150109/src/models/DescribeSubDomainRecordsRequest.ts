// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubDomainRecordsRequest extends $dara.Model {
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
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The DNS resolution line.
   * 
   * @example
   * default
   */
  line?: string;
  /**
   * @remarks
   * The page number. The value starts from **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * For example, if you set SubDomain to a.www\\.example.com:
   * 
   * If you do not specify DomainName, the system queries the DNS records for the hostname a.www of the domain name example.com.
   * 
   * If you set DomainName to www\\.example.com, the system queries the DNS records for the hostname a of the domain name www\\.example.com.
   * 
   * If you set DomainName to "a.www\\.example.com", the system queries the DNS records for the hostname @ of the domain name a.www\\.example.com.
   * 
   * This parameter is required.
   * 
   * @example
   * a.www.example.com
   */
  subDomain?: string;
  /**
   * @remarks
   * The type of the DNS record. If you do not specify this parameter, all types of DNS records for the subdomain are returned.
   * 
   * The record types are case-insensitive and include the following: **A, MX, CNAME, TXT, REDIRECT_URL, FORWARD_URL, NS, AAAA, and SRV**.
   * 
   * @example
   * MX
   */
  type?: string;
  /**
   * @remarks
   * The client IP address.
   * 
   * @example
   * 192.0.2.0
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      line: 'Line',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      subDomain: 'SubDomain',
      type: 'Type',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      line: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      subDomain: 'string',
      type: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

