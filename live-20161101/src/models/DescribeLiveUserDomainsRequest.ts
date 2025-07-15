// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveUserDomainsRequestTag extends $dara.Model {
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

export class DescribeLiveUserDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name that is used as a keyword to filter domain names. Fuzzy match is supported.
   * 
   * > 
   * 
   * *   If you set LiveDomainType to liveVideo and leave this parameter empty, the streaming domains are queried. - If you set LiveDomainType to liveEdge and leave this parameter empty, the ingest domains are queried.
   * 
   * @example
   * *.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The search mode. Valid values:
   * 
   * *   **fuzzy_match** (default): fuzzy match
   * *   **pre_match**: prefix match
   * *   **suf_match**: suffix match
   * *   **full_match**: exact match
   * 
   * @example
   * fuzzy_match
   */
  domainSearchType?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **online**
   * *   **offline**
   * *   **configuring**
   * 
   * @example
   * online
   */
  domainStatus?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   **liveVideo**: streaming domain
   * *   **liveEdge**: ingest domain
   * 
   * >  If you leave this parameter empty, all ingest domains and streaming domains within your Alibaba Cloud account are queried by default.
   * 
   * @example
   * liveVideo
   */
  liveDomainType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: **1 to 100000**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**. Maximum value: **50**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the domain name resides.
   * 
   * @example
   * cn-beijing
   */
  regionName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2egyoep3jp7a
   */
  resourceGroupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeLiveUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      liveDomainType: 'LiveDomainType',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionName: 'RegionName',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      liveDomainType: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionName: 'string',
      resourceGroupId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeLiveUserDomainsRequestTag },
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

