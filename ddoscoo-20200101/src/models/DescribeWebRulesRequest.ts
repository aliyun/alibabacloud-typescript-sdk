// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The CNAME address to query.
   * 
   * @example
   * kzmk7b8tt351****.aliyunddos1014****
   */
  cname?: string;
  /**
   * @remarks
   * The domain name of the website to query.
   * 
   * > The domain must have been configured with website business forwarding rules. You can call [DescribeDomains](~~DescribeDomains~~) to query all domains that have been configured with website business forwarding rules.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The list of DDoS protection instance IDs to query.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query matching pattern. Values:
   * - **fuzzy** (default): Indicates fuzzy query.
   * - **exact**: Indicates exact query.
   * 
   * @example
   * exact
   */
  queryDomainPattern?: string;
  /**
   * @remarks
   * The resource group ID of the DDoS protection instance in the resource management service.
   * 
   * Not setting this parameter indicates the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      domain: 'Domain',
      instanceIds: 'InstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDomainPattern: 'QueryDomainPattern',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      domain: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      queryDomainPattern: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

