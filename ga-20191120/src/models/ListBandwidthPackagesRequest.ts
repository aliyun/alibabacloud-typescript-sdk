// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBandwidthPackagesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the bandwidth plan. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the bandwidth plan. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * You can specify up to 20 tag values.
   * 
   * @example
   * tag-value
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

export class ListBandwidthPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * @example
   * gbwp-bp1sgzldyj6b4q7cx****
   */
  bandwidthPackageId?: string;
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
   * The number of entries per page. Maximum value: **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2ry6mp2c****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the bandwidth plan. Valid values:
   * 
   * *   **init**: The bandwidth plan is being initialized.
   * *   **active**: The bandwidth plan is available.
   * *   **binded**: The bandwidth plan is associated.
   * *   **binding**: The bandwidth plan is being associated.
   * *   **unbinding**: The bandwidth plan is being disassociated.
   * *   **updating**: The bandwidth plan is being updated.
   * *   **finacialLocked**: The bandwidth plan is locked due to overdue payments.
   * *   **locked**: The bandwidth plan is locked.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tag of the bandwidth plan.
   */
  tag?: ListBandwidthPackagesRequestTag[];
  /**
   * @remarks
   * The type of the bandwidth plan. Valid values:
   * 
   * *   **Basic**: a basic bandwidth plan
   * *   **CrossDomain**: a cross-border acceleration bandwidth plan
   * 
   * If you call this operation on the China site (aliyun.com), you can set Type only to **Basic**.
   * 
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tag: 'Tag',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tag: { 'type': 'array', 'itemType': ListBandwidthPackagesRequestTag },
      type: 'string',
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

