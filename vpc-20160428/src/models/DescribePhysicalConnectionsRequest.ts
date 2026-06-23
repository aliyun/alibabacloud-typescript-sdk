// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePhysicalConnectionsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values:
   * 
   * - **PhysicalConnectionId**: the Express Connect circuit ID.
   * 
   * - **AccessPointId**: the access point ID.
   * 
   * - **Type**: the Express Connect circuit type. This filter condition supports only the value **VPC**.
   * 
   * - **LineOperator**: the carrier of the Express Connect circuit. This filter condition supports the following values:
   *     - **CT**: China Telecom.
   *     - **CU**: China Unicom.
   *     - **CM**: China Mobile.
   *     - **CO**: other carriers in China.
   *     - **Equinix**: Equinix.
   *     - **Other**: other carriers outside China.
   * 
   * - **Spec**: the specification of the Express Connect circuit. This filter condition supports the following values:
   *     - **1G and below**.
   *     - **10G**.
   *     - **40G**.
   *     - **100G**.
   * >  The **40G** and **100G** specifications are not available by default. Only users who have committed an application to their account manager and received approval can use these values.
   * 
   * - **Status**: the status of the Express Connect circuit. This filter condition supports the following values:
   *     - **Initial**: pending application.
   *     - **Approved**: approved.
   *     - **Allocating**: allocating resources.
   *     - **Allocated**: under construction.
   *     - **Confirmed**: pending user confirmation.
   *     - **Enabled**: enabled.
   *     - **Rejected**: application denied.
   *     - **Canceled**: canceled.
   *     - **Allocation Failed**: resource allocation failed.
   *     - **Terminating**: stopping.
   *     - **Terminated**: stopped.
   * 
   * - **Name**: the name of the Express Connect circuit.
   * - **ProductType**: the circuit type. Valid values:
   *     - **VirtualPhysicalConnection**: shared Express Connect circuit.
   *     - **PhysicalConnection**: dedicated Express Connect circuit.
   * 
   * You can specify up to 5 filter conditions at a time. The filter conditions have an **AND** relationship. Results are returned only when all filter conditions are met.
   * 
   * @example
   * Name
   */
  key?: string;
  /**
   * @remarks
   * The list of filter values.
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
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
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
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of filter conditions.
   */
  filter?: DescribePhysicalConnectionsRequestFilter[];
  /**
   * @remarks
   * Specifies whether to return data of orders that have not taken effect. Valid values:
   * 
   * * **true**: Returns data of orders that have not taken effect.
   * 
   * * **false** (default): Does not return data of orders that have not taken effect.
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Express Connect circuit. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * rg-aek2yvwibxr****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
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

