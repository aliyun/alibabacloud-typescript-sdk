// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindInstanceDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * A list of domain names.
   * 
   * > Separate multiple domain names with a comma (,). You can specify up to 100 domain names.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.net
   */
  domainNames?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud DNS instance. You can call the [ListCloudGtmInstances](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-listcloudgtminstances) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s********
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * Default value: zh
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

