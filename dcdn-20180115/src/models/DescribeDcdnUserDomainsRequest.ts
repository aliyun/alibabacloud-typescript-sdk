// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnUserDomainsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: **1** to **20**. You can call the TagDcdnResources operation to set a tag for a domain name.
   * 
   * @example
   * 1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1** to **20**.
   * 
   * @example
   * 1
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

export class DescribeDcdnUserDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2018-05-10T14:00:00Z
   */
  changeEndTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC+0.
   * 
   * @example
   * 2018-05-10T12:00:00Z
   */
  changeStartTime?: string;
  /**
   * @remarks
   * Specifies whether to display domain names that are under review, failed the review, or failed to be configured. Valid values:
   * 
   * *   true: displays domain names.
   * *   false: does not display detailed information.
   * 
   * @example
   * false
   */
  checkDomainShow?: boolean;
  /**
   * @remarks
   * The acceleration region. By default, all acceleration regions are queried.
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: outside the Chinese mainland
   * *   **global**: global
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The accelerated domain names. If you do not set this parameter, configurations of all domain names that match the conditions are returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The search method. Default value: full_match. Valid values:
   * 
   * *   **fuzzy_match**: fuzzy match
   * *   **pre_match**: prefix match
   * *   **suf_match**: suffix match
   * *   **full_match** (default): exact match
   * 
   * > If you specify the domain names to query but do not set the DomainSearchType parameter, the exact match mode is used.
   * 
   * @example
   * fuzzy_match
   */
  domainSearchType?: string;
  /**
   * @remarks
   * The status of the domain name. Valid values:
   * 
   * *   **online**: enabled
   * *   **offline**: disabled
   * *   **configuring**: configuring
   * *   **configure_failed**: configuration failed
   * *   **checking**: reviewing
   * *   **check_failed:** review failed
   * 
   * @example
   * online
   */
  domainStatus?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of returned pages. Valid values: **1** to **100000**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**. Valid values: **1** to **500**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmv6jutt**
   */
  resourceGroupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeDcdnUserDomainsRequestTag[];
  /**
   * @remarks
   * The business type of the domain. Separate multiple values with commas (,). Default value: **dynamic**. To query common domains, keep the default value. To query domains of the computing business type, enter **computing_routine** or **computing_image**.
   * 
   * @example
   * computing_routine
   */
  webSiteType?: string;
  static names(): { [key: string]: string } {
    return {
      changeEndTime: 'ChangeEndTime',
      changeStartTime: 'ChangeStartTime',
      checkDomainShow: 'CheckDomainShow',
      coverage: 'Coverage',
      domainName: 'DomainName',
      domainSearchType: 'DomainSearchType',
      domainStatus: 'DomainStatus',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      securityToken: 'SecurityToken',
      tag: 'Tag',
      webSiteType: 'WebSiteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeEndTime: 'string',
      changeStartTime: 'string',
      checkDomainShow: 'boolean',
      coverage: 'string',
      domainName: 'string',
      domainSearchType: 'string',
      domainStatus: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      securityToken: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDcdnUserDomainsRequestTag },
      webSiteType: 'string',
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

