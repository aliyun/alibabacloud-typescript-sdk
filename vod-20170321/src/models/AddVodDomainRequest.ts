// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVodDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The URL for health checks.
   * 
   * @example
   * www.example.com/test.html
   */
  checkUrl?: string;
  /**
   * @remarks
   * The accelerated domain name that you want to add to ApsaraVideo VOD. Wildcard domain names are supported. A wildcard domain name must start with a period (.), such as .example.com.
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
   * The acceleration region. This parameter is valid for users outside the Chinese mainland and users in the Chinese mainland at level 3 or above. Valid values:
   * - **domestic** (default): the Chinese mainland.
   * - **overseas**: Hong Kong (China), Macao (China), Taiwan (China), and regions outside China.
   * - **global**: global acceleration.
   * 
   * @example
   * domestic
   */
  scope?: string;
  securityToken?: string;
  /**
   * @remarks
   * The list of origin addresses. For more information about the parameters, see the **Sources** table below.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]
   */
  sources?: string;
  /**
   * @remarks
   * The top-level domain name.
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

