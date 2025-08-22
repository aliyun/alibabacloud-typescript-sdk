// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDcdnIpaDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * @example
   * example.com/image_01.png
   */
  checkUrl?: string;
  /**
   * @remarks
   * The domain name to be added to IPA.
   * 
   * A wildcard domain that starts with a period (.) is supported, such as .example.com.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **udp**
   * *   **tcp**
   * 
   * **
   * 
   * **Description** For example: `{"protocol":"udp"}`.
   * 
   * @example
   * udp
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify a value for this parameter, the system automatically assigns the ID of the default resource group.
   * 
   * @example
   * rg
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The acceleration region. Default value: domestic. Valid values:
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: outside the Chinese mainland
   * *   **global**: global
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
   * *.com
   */
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      protocol: 'Protocol',
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
      protocol: 'string',
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

