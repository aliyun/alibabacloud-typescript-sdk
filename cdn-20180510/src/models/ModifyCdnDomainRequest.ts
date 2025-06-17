// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdnDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyuji4b6r4**
   */
  resourceGroupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The information about the addresses of origin servers.
   * 
   * > Do not set **Sources** and **TopLevelDomain** at the same time. If you set **Sources** and **TopLevelDomain** at the same time, **TopLevelDomain** does not take effect.
   * 
   * @example
   * [{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80,"weight":"15"}]
   */
  sources?: string;
  /**
   * @remarks
   * The root domain. To add a root domain name, you must be added to the whitelist specified by the CDN_TOP_LEVEL_DOMAIN_GREY_USER_LIST parameter.
   * 
   * > Do not set **Sources** and **TopLevelDomain** at the same time. If you set **Sources** and **TopLevelDomain** at the same time, **TopLevelDomain** does not take effect.
   * 
   * @example
   * aliyundoc.com
   */
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      securityToken: 'string',
      sources: 'string',
      topLevelDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

