// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddDcdnDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * @example
   * www.example.com/test.html
   */
  checkUrl?: string;
  /**
   * @remarks
   * You can add up to 20 domain names to DCDN for each of your Alibaba Cloud account. If you specify multiple domain names, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.org
   */
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify a value for this parameter, the system uses the ID of the default resource group.
   * 
   * @example
   * testID
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The acceleration region. Default value: domestic. Valid values:
   * 
   * *   domestic: Chinese mainland
   * *   overseas: global (excluding the Chinese mainland)
   * *   global: global
   * 
   * @example
   * domestic
   */
  scope?: string;
  securityToken?: string;
  /**
   * @remarks
   * The information about the addresses of origin servers.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"content":"10.10.10.10","type":"ipaddr","priority":"20","port":80,"weight":"15"}]
   */
  sources?: string;
  /**
   * @remarks
   * The top-level domain.
   * 
   * @example
   * example.com
   */
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkUrl: 'string',
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      scope: 'string',
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

