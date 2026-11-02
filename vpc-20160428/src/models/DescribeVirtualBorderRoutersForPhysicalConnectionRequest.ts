// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. You can specify up to five filter conditions. Supported filter conditions:
   * 
   * * **PhysicalConnectionId**: instance ID of the Express Connect circuit.
   * 
   * * **VbrId**: instance ID of the VBR.
   * 
   * * **Status**: the status of the VBR.
   * 
   * * **Name**: the name of the VBR.
   * 
   * * **AccessPointId**: instance ID of the access point.
   * 
   * * **eccId**: instance ID of the Express Cloud Connect instance.
   * 
   * * **type**: the type of the VBR.
   * 
   * @example
   * Status
   */
  key?: string;
  /**
   * @remarks
   * The filter value corresponding to the filter condition. You can specify multiple filter values for a single filter condition. The filter values are evaluated by using the OR logical operator. If a resource matches one of the filter values, it matches the filter condition.
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
   * The list of filter conditions.
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
   * The number of entries per page during paging in a paged query. Maximum value: **50**. Default value: **10**.
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
   * The region where the Express Connect circuit is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
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

