// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserDomainsRequestTag } from "./DescribeUserDomainsRequestTag";


export class DescribeUserDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The type of workload accelerated by Alibaba Cloud CDN. Separate types with commas (,). Valid values:
   * 
   * *   **web**: images and small files
   * *   **download**: large files
   * *   **video**: on-demand video and audio streaming
   * 
   * If you do not set this parameter, all service types are queried.
   * 
   * @example
   * download,web,video
   */
  cdnType?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2019-10-10T12:14:58Z
   */
  changeEndTime?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2019-10-10T12:14:55Z
   */
  changeStartTime?: string;
  /**
   * @remarks
   * Specifies whether to display domain names that are under review, failed the review, or failed to be configured. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  checkDomainShow?: boolean;
  /**
   * @remarks
   * The acceleration region. By default, all acceleration regions are queried. Valid values:
   * 
   * *   **domestic**: Chinese mainland
   * *   **global**: global
   * *   **overseas**: outside the Chinese mainland
   * 
   * @example
   * domestic
   */
  coverage?: string;
  /**
   * @remarks
   * The accelerated domain. If you do not set this parameter, all domain names that match the conditions are returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The search mode. Valid values:
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
   * *   **online**
   * *   **offline**
   * *   **configuring**
   * *   **configure_failed**
   * *   **checking**
   * *   **check_failed**
   * *   **stopping**
   * *   **deleting**
   * 
   * If you do not set this parameter, domain names in all states are queried.
   * 
   * @example
   * configure_failed
   */
  domainStatus?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: **1** to **100000**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1 to 500**. Default value: **20**. Maximum value: **500**.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. By default, all IDs are queried.
   * 
   * @example
   * abcd1234abcd1234
   */
  resourceGroupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The information about the origin server.
   * 
   * @example
   * example.source.com
   */
  source?: string;
  /**
   * @remarks
   * The list of tags. Maximum number of elements in the list: 20
   */
  tag?: DescribeUserDomainsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      cdnType: 'CdnType',
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
      source: 'Source',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnType: 'string',
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
      source: 'string',
      tag: { 'type': 'array', 'itemType': DescribeUserDomainsRequestTag },
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

