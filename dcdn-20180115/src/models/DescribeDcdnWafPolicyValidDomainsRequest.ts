// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafPolicyValidDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Web Application Firewall (WAF) protection policy. Valid values:
   * 
   * *   waf_group: basic web protection
   * *   custom_acl: custom protection
   * *   whitelist: IP address whitelist
   * *   ip_blacklist: IP address blacklist
   * *   region_block: region blacklist
   * *   bot: bot management
   * 
   * This parameter is required.
   * 
   * @example
   * custom_acl
   */
  defenseScene?: string;
  /**
   * @remarks
   * The protected domain name. Fuzzy search is supported.
   * 
   * @example
   * example.com
   */
  domainNameLike?: string;
  /**
   * @remarks
   * The page number of the returned page. Valid values: **1** to **100000**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of domain names to return on each page. Valid values: an integer from **1** to **500**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      domainNameLike: 'DomainNameLike',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      domainNameLike: 'string',
      pageNumber: 'number',
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

