// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhysicalConnectionsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter. Valid values:
   * 
   * *   **PhysicalConnectionId**: the ID of the Express Connect circuit.
   * 
   * *   **AccessPointId**: the ID of the access point.
   * 
   * *   **Type**: the type of resource to which the Express Connect circuit is connected. You can set Type only to **VPC**.
   * 
   * *   **LineOperator**: the connectivity provider of the Express Connect circuit. Valid values:
   * 
   *     *   **CT**: China Telecom.
   *     *   **CU**: China Unicom.
   *     *   **CM**: China Mobile.
   *     *   **CO**: other connectivity providers in the Chinese mainland.
   *     *   **Equinix**: Equinix.
   *     *   **Other**: other connectivity providers outside the Chinese mainland.
   * 
   * *   **Spec**: the specification of the Express Connect circuit. Valid values:
   * 
   *     *   **1G and below**
   *     *   **10G**
   *     *   **40G**
   *     *   **100G**
   * 
   * >  By default, you cannot set the value to **40G** or **100G**. To use these values, you must first contact your account manager.
   * 
   * *   **Status**: the status of the Express Connect circuit. Valid values:
   * 
   *     *   **Initial**: The application is under review.
   *     *   **Approved**: The application is approved.
   *     *   **Allocating**: The system is allocating resources.
   *     *   **Allocated**: The Express Connect circuit is under construction.
   *     *   **Confirmed**: The Express Connect circuit is pending for user confirmation.
   *     *   **Enabled**: The Express Connect circuit is enabled.
   *     *   **Rejected**: The application is rejected.
   *     *   **Canceled**: The application is canceled.
   *     *   **Allocation Failed**: The system failed to allocate resources.
   *     *   **Terminating**: The Express Connect circuit is being disabled.
   *     *   **Terminated**: The Express Connect circuit is disabled.
   * 
   * *   **Name**: the name of the Express Connect circuit.
   * 
   * *   **ProductType**: the type of the Express Connect circuit. Valid values:
   * 
   *     *   **VirtualPhysicalConnection**: shared Express Connect circuit
   *     *   **PhysicalConnection**: dedicated Express Connect circuit.
   * 
   * You can specify at most five filter conditions in each request. The logical relation among the filter conditions is **AND**. Therefore, an Express Connect circuit is returned only when all specified filter conditions are matched.
   * 
   * @example
   * Name
   */
  key?: string;
  /**
   * @remarks
   * The filter values.
   * 
   * @example
   * 1
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

export class DescribePhysicalConnectionsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of tag N to add to the resource. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * It can be up to 64 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N to add to the resource. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * It can be up to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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

export class DescribePhysicalConnectionsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The filter keys.
   */
  filter?: DescribePhysicalConnectionsRequestFilter[];
  /**
   * @remarks
   * Specifies whether to return the data about pending orders. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  ownerAccount?: string;
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
   * The number of entries per page. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Express Connect circuit.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Express Connect circuit belongs.
   * 
   * @example
   * rg-aek2yvwibxrmrkq
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag list.
   */
  tags?: DescribePhysicalConnectionsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      filter: 'Filter',
      includeReservationData: 'IncludeReservationData',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      filter: { 'type': 'array', 'itemType': DescribePhysicalConnectionsRequestFilter },
      includeReservationData: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': DescribePhysicalConnectionsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

