// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesRequestTag } from "./DescribeInstancesRequestTag";


export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the IDs of the bastion hosts.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string[];
  /**
   * @remarks
   * The status of the bastion host. Valid values:
   * 
   * *   **PENDING**: The bastion host is not initialized.
   * *   **CREATING**: The bastion host is being created.
   * *   **RUNNING**: The bastion host is running.
   * *   **EXPIRED**: The bastion host expired.
   * *   **CREATE_FAILED**: The bastion host fails to be created.
   * *   **UPGRADING**: The configurations of the bastion host are being changed.
   * *   **UPGRADE_FAILED**: The configurations of the bastion host fail to be changed.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the bastion host belongs.
   * 
   * @example
   * rg-acfm26ougi****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * An array consisting of the tags that are added to the bastion hosts.
   */
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
      instanceStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
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

