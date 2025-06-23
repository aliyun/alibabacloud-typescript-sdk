// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesRequestTag } from "./DescribeInstancesRequestTag";


export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The mitigation plan of the instance to query. Valid values:
   * 
   * *   **0**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Insurance mitigation plan
   * *   **1**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Unlimited mitigation plan
   * *   **2**: Anti-DDoS Proxy (Outside Chinese Mainland) instance of the Chinese Mainland Acceleration (CMA) mitigation plan
   * *   **9**: Anti-DDoS Proxy (Chinese Mainland) instance of the Profession mitigation plan
   * 
   * @example
   * 9
   */
  edition?: number;
  /**
   * @remarks
   * The traffic forwarding status of the instance to query. Valid values:
   * 
   * *   **0**: The instance no longer forwards service traffic.
   * *   **1**: The instance forwards service traffic as expected.
   * 
   * @example
   * 1
   */
  enabled?: number;
  /**
   * @remarks
   * The end of the time range to query. Instances whose expiration time is earlier than the point in time are queried. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640361700000
   */
  expireEndTime?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Instances whose expiration time is later than the point in time are queried. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1640361500000
   */
  expireStartTime?: number;
  /**
   * @remarks
   * The IDs of the instances to query. You can specify up to 200 instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The IP address of the instance to query.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The remarks of the instance to query. Fuzzy match is supported.
   * 
   * @example
   * doc-test
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management.
   * 
   * If you do not specify this parameter, the instance belongs to the default resource group.
   * 
   * @example
   * rg-acfm2pz25js****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The states of the instances to query. You can specify up to two states.
   */
  status?: number[];
  /**
   * @remarks
   * The tags that are added to the instances to query.
   */
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      enabled: 'Enabled',
      expireEndTime: 'ExpireEndTime',
      expireStartTime: 'ExpireStartTime',
      instanceIds: 'InstanceIds',
      ip: 'Ip',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      enabled: 'number',
      expireEndTime: 'number',
      expireStartTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      status: { 'type': 'array', 'itemType': 'number' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

