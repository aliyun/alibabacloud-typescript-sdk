// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name to query.
   * 
   * @example
   * www.abc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749916800000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the Web Application Firewall (WAF) instance.
   * 
   * > You can call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-2bl4****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number to return when paging through results in a paged query. Default value: 1, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page when paging through results in a paged query. Default value: **5**, which indicates that 5 entries are returned on each page. Valid values: 1 to 200.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-aeky65ka*****
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in UTC. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1668496310000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'number',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceManagerResourceGroupId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

