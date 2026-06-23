// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * testapi
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

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the bastion host instances.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string[];
  /**
   * @remarks
   * The status of the bastion host instance. Valid values:
   * 
   * - **PENDING**: The instance is not initialized.
   * 
   * - **CREATING**: The instance is being created.
   * 
   * - **RUNNING**: The instance is running.
   * 
   * - **EXPIRED**: The instance is expired.
   * 
   * - **CREATE_FAILED**: The instance creation failed.
   * 
   * - **UPGRADING**: The instance is being upgraded.
   * 
   * - **UPGRADE_FAILED**: The instance upgrade failed.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The page number to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of bastion host instances to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the bastion host instances reside.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the bastion host instance belongs.
   * 
   * @example
   * rg-acfm26ougi****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags attached to the bastion host instances.
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

