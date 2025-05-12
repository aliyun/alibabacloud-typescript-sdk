// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVccsRequestTag } from "./ListVccsRequestTag";


export class ListVccsRequest extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth of the Lingjun connection instance. Unit: Mbit/s. Valid values: 1000 to 400000
   * 
   * @example
   * 5000
   */
  bandwidth?: number;
  /**
   * @remarks
   * The ID of the CEN instance; [What is the CEN?](https://help.aliyun.com/document_detail/181681.html)
   * 
   * You can call the [DescribeCens](https://help.aliyun.com/document_detail/468215.htm) to query the information of CEN instances under the current Alibaba Cloud account.
   * 
   * @example
   * cen-95iwtpyvj3kk1v0ao0
   */
  cenId?: string;
  /**
   * @remarks
   * Specifies whether to enable paged query. Optional values:
   * 
   * *   **true**: Enable pagination query
   * *   **false**: Pagination query is disabled
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Excludes all data in the specified status. If the status parameter exists, ExStatus does not take effect.
   * 
   * @example
   * Prepaid
   */
  exStatus?: string;
  /**
   * @remarks
   * Filter queries by Lingjun HUB instance ID
   * 
   * @example
   * er-a7rqv1rq
   */
  filterErId?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * For more information about resource groups, see [Resource groups](https://help.aliyun.com/document_detail/94475.htm?spm=a2c4g.11186623.0.0.29e15d7akXhpuu).
   * 
   * @example
   * rg-aeky5f3qx6ceapq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags.
   */
  tag?: ListVccsRequestTag[];
  /**
   * @remarks
   * The ID of the Lingjun connection instance.
   * 
   * @example
   * vcc-cn-zvp2w222001
   */
  vccId?: string;
  /**
   * @remarks
   * Virtual Private Cloud IDs; [What is Virtual Private Cloud](https://help.aliyun.com/document_detail/34217.html)
   * 
   * You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html#demo-0) operation to query the specified VPC.
   * 
   * @example
   * vpc-bp1nrtkmamy329u6a1z0i
   */
  vpcId?: string;
  /**
   * @remarks
   * Lingjun CIDR block instance ID
   * 
   * @example
   * vpd-omqutbff
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cenId: 'CenId',
      enablePage: 'EnablePage',
      exStatus: 'ExStatus',
      filterErId: 'FilterErId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      vccId: 'VccId',
      vpcId: 'VpcId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cenId: 'string',
      enablePage: 'boolean',
      exStatus: 'string',
      filterErId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListVccsRequestTag },
      vccId: 'string',
      vpcId: 'string',
      vpdId: 'string',
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

