// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAddCdnDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The workload type of the domain name to accelerate. Valid values:
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
   * The URL that is used for health checks.
   * 
   * @example
   * url
   */
  checkUrl?: string;
  /**
   * @remarks
   * The domain names that you want to add to Alibaba Cloud CDN. Separate domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,aliyundoc.com
   */
  domainName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify a value for this parameter, the system uses the ID of the default resource group.
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

