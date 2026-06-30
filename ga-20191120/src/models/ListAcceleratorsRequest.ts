// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAcceleratorsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the Global Accelerator resource. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the Global Accelerator resource. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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

export class ListAcceleratorsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
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
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   * 
   * @deprecated
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekztkx4zwc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the Global Accelerator instance. Valid values:
   * 
   * - **init**: The instance is being initialized.
   * 
   * - **active**: The instance is active.
   * 
   * - **configuring**: The instance is being configured.
   * 
   * - **binding**: The instance is being bound.
   * 
   * - **unbinding**: The instance is being unbound.
   * 
   * - **deleting**: The instance is being deleted.
   * 
   * - **finacialLocked**: The instance is locked due to an overdue payment.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tags of the resource.
   */
  tag?: ListAcceleratorsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      state: 'State',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      state: 'string',
      tag: { 'type': 'array', 'itemType': ListAcceleratorsRequestTag },
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

