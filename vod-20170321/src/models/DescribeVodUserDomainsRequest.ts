// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodUserDomainsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**.
   * 
   * By default, all tag keys are queried.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1** to **20**.
   * 
   * By default, all tag values are queried.
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

export class DescribeVodUserDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name. The value of this parameter is used as a filter condition for a fuzzy match.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The search method. Valid values:
   * 
   * *   **fuzzy_match** (default): fuzzy match.
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
   * The status of the domain name. Value values:
   * 
   * *   **online**: indicates that the domain name is enabled.
   * *   **offline**: indicates that the domain name is disabled.
   * *   **configuring**: indicates that the domain name is being configured.
   * *   **configure_failed**: indicates that the domain name failed to be configured.
   * *   **checking**: indicates that the domain name is under review.
   * *   **check_failed**: indicates that the domain name failed the review.
   * 
   * @example
   * online
   */
  domainStatus?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**. Maximum value: **50**. Valid values: **1** to **50**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: DescribeVodUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeVodUserDomainsRequestTag },
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

