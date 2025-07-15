// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. You can specify at most five filter conditions. The following filter conditions are supported:
   * 
   * *   **PhysicalConnectionId**: filter VBRs by the Express Connect circuit ID.
   * *   **VbrId**: filter VBRs by ID.
   * *   **Status**: filter VBRs by status.
   * *   **Name**: filter VBRs by name.
   * *   **AccessPointId**: filter VBRs by access point ID.
   * *   **eccId**: filter VBRs by ID of Express Cloud Connect (ECC) instance.
   * *   **type**: filter VBRs by type.
   * 
   * @example
   * Status
   */
  key?: string;
  /**
   * @remarks
   * The filter value for the key. You can specify multiple filter values for one key. The logical operator among filter values is OR. If one filter value is matched, the filter condition is matched.
   * 
   * @example
   * Active
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualBorderRoutersForPhysicalConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The filter keys.
   */
  filter?: DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter[];
  ownerId?: number;
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
   * The ID of the Express Connect circuit.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-119mfj****
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * The region in which the Express Connect circuit is deployed. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter },
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

