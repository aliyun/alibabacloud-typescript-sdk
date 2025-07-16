// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddCdnDomainRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. Valid values of N: **1 to 20**.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. Valid values of N: **1 to 20**.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCdnDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The workload type of the accelerated domain name. Valid values:
   * 
   * *   **web**: images and small files
   * *   **download**: large files
   * *   **video**: on-demand video and audio streaming
   * 
   * This parameter is required.
   * 
   * @example
   * web
   */
  cdnType?: string;
  /**
   * @remarks
   * The URL that is used to check the accessibility of the origin server.
   * 
   * @example
   * www.example.com/test.html
   */
  checkUrl?: string;
  /**
   * @remarks
   * The domain name that you want to add to Alibaba Cloud CDN.
   * 
   * A wildcard domain that starts with a period (.) is supported, such as .example.com.
   * 
   * This parameter is required.
   * 
   * @example
   * .example.com
   */
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * If you do not set this parameter, the system uses the ID of the default resource group.
   * 
   * @example
   * rg-acfmyuji4b6r4**
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The acceleration region. Default value: domestic. Valid values:
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: global (excluding the Chinese mainland)
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
   * [
   *       {
   *             "content": "192.0.2.0",
   *             "type": "ipaddr",
   *             "priority": "20",
   *             "port": 80,
   *             "weight": "15"
   *       }
   * ]
   */
  sources?: string;
  /**
   * @remarks
   * Details about the tags. You can specify up to 20 tags.
   */
  tag?: AddCdnDomainRequestTag[];
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
      cdnType: 'CdnType',
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      sources: 'Sources',
      tag: 'Tag',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
      checkUrl: 'string',
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceGroupId: 'string',
      scope: 'string',
      securityToken: 'string',
      sources: 'string',
      tag: { 'type': 'array', 'itemType': AddCdnDomainRequestTag },
      topLevelDomain: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

