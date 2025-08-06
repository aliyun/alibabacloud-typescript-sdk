// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVodDomainRequest extends $dara.Model {
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
   * The domain name that you want to accelerate. Wildcard domain names that start with periods (.) are supported. Example: .example.com.
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
   * This parameter is applicable to users of level 3 or higher in the Chinese mainland and users outside the Chinese mainland. Default value: domestic. Valid values:
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: outside the Chinese mainland
   * *   **global**: regions in and outside the Chinese mainland
   * 
   * @example
   * domestic
   */
  scope?: string;
  securityToken?: string;
  /**
   * @remarks
   * The information about the addresses of origin servers. For more information, see the **Sources** table in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"content":"1.1.1.1","type":"ipaddr","priority":"20","port":80}]
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

