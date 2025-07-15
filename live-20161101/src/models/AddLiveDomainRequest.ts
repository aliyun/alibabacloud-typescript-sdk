// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveDomainRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TestValue
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

export class AddLiveDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The URL that is used for health checks.
   * 
   * @example
   * http://demo.aliyundoc.com/status.html
   */
  checkUrl?: string;
  /**
   * @remarks
   * The ingest domain or streaming domain that you want to add. Wildcard domain names that start with a period (.) are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **liveVideo**: streaming domain. This value is required if you set the DomainName parameter to a streaming domain.
   * *   **liveEdge**: ingest domain. This value is required if you set the DomainName parameter to an ingest domain.
   * 
   * This parameter is required.
   * 
   * @example
   * liveVideo
   */
  liveDomainType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region in which the domain name resides. Valid values:
   * 
   * *   **cn-beijing**: China (Beijing)
   * *   **cn-shanghai**: China (Shanghai)
   * *   **cn-shenzhen**: China (Shenzhen)
   * *   **cn-qingdao**: China (Qingdao)
   * *   **ap-southeast-1**: Singapore
   * *   **eu-central-1**: Germany (Frankfurt)
   * *   **ap-northeast-1**: Japan (Tokyo)
   * *   **ap-southeast-5**: Indonesia (Jakarta)
   * 
   * >  Make sure that the settings of the Region and Scope parameters do not conflict with each other.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group. For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-aekzw******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The edge group. This parameter is applicable to users of level 3 or higher in mainland China and users outside mainland China. Valid values:
   * 
   * *   **domestic**: mainland China. This is the default value.
   * *   **overseas**: outside mainland China.
   * *   **global**: regions in and outside mainland China.
   * 
   * @example
   * domestic
   */
  scope?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: AddLiveDomainRequestTag[];
  /**
   * @remarks
   * The top-level domain name.
   * 
   * @example
   * learn.aliyundoc.com
   */
  topLevelDomain?: string;
  static names(): { [key: string]: string } {
    return {
      checkUrl: 'CheckUrl',
      domainName: 'DomainName',
      liveDomainType: 'LiveDomainType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      scope: 'Scope',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      topLevelDomain: 'TopLevelDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkUrl: 'string',
      domainName: 'string',
      liveDomainType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      region: 'string',
      resourceGroupId: 'string',
      scope: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': AddLiveDomainRequestTag },
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

