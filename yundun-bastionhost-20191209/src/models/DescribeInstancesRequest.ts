// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance.
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
   * The ID of the Bastionhost instance.
   * 
   * @example
   * bastionhost-cn-78v1ghxxxxx
   */
  instanceId?: string[];
  /**
   * @remarks
   * The status of the Bastionhost instance. Valid values:
   * 
   * - **PENDING**: Uninitialized
   * 
   * - **CREATING**: Creating 
   * 
   * - **RUNNING**: Running 
   * 
   * - **EXPIRED**: Expired 
   * 
   * - **CREATE_FAILED**: Creation failed
   * 
   * - **UPGRADING**: Upgrading
   * 
   * - **UPGRADE_FAILED**: Upgrade failed
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * Specifies the page number of the returned results. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Settings for a paged query. Specifies the number of Bastionhost instances to display on each page during paging. Default value: **10**, which indicates that 10 Bastionhost instances are displayed on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Bastionhost instance belongs.
   * 
   * @example
   * rg-acfm26ougi****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the Bastionhost instance.
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

