// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveDomainRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The health check URL.
   * 
   * @example
   * http://demo.aliyundoc.com/status.html
   */
  checkUrl?: string;
  /**
   * @remarks
   * The ingest domain or streaming domain to be connected to ApsaraVideo Live. Wildcard domain names are supported and must start with a period (.).
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
   * - **liveVideo**: streaming domain. If you set DomainName (the domain name to be connected to ApsaraVideo Live) to a streaming domain, you must set this parameter to liveVideo.
   * - **liveEdge**: edge ingest domain. If you set DomainName (the domain name to be connected to ApsaraVideo Live) to an ingest domain, you must set this parameter to liveEdge.
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
   * The unit information of the live streaming domain name. Valid values:
   * 
   * - **cn-beijing**: Beijing.
   * - **cn-shanghai**: Shanghai.
   * - **cn-shenzhen**: Shenzhen.
   * - **cn-qingdao**: Qingdao.
   * - **ap-southeast-1**: Singapore.
   * - **eu-central-1**: Germany.
   * - **ap-northeast-1**: Tokyo.
   * - **ap-southeast-5**: Jakarta.
   * 
   * >Region (unit information of the live streaming domain name) and Scope (acceleration region) do not restrict each other.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [What is a resource group](https://help.aliyun.com/document_detail/2381067.html).
   * 
   * @example
   * rg-aekzw******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The acceleration region. This parameter takes effect for international users and China site users at L3 or above. Valid values:
   * 
   * - **domestic** (default): the Chinese mainland.
   * - **overseas**: outside the Chinese mainland, including Hong Kong (China), Macao (China), and Taiwan (China).
   * - **global**: global acceleration.
   * 
   * @example
   * domestic
   */
  scope?: string;
  securityToken?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: AddLiveDomainRequestTag[];
  /**
   * @remarks
   * The top-level domain name for access.
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

