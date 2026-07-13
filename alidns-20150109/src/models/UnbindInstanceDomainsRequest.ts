// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindInstanceDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of domain names.
   * 
   * Separate multiple domain names with commas (,). You can specify up to 100 domain names.<props="intl"> For more information, see [DescribeDomains](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describedomains).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.net
   */
  domainNames?: string;
  /**
   * @remarks
   * The ID of the authoritative domain name instance.<props="intl"> For more information, see [ListCloudGtmInstances](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-listcloudgtminstances).
   * 
   * This parameter is required.
   * 
   * @example
   * dns-cn-9lb38ldq9**
   */
  instanceId?: string;
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
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      instanceId: 'InstanceId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      instanceId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

