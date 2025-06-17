// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateCdnDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain names. You can specify one or more accelerated domain names. Separate domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.org
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
   * [{"content":"10.10.10.10","type":"ipaddr","priority":"20","port":80,"weight":"15"}]
   */
  sources?: string;
  /**
   * @remarks
   * The root domain.
   * 
   * > Do not set **Sources** and **TopLevelDomain** at the same time. If you set **Sources** and **TopLevelDomain** at the same time, **TopLevelDomain** does not take effect.
   * 
   * @example
   * example.com
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

