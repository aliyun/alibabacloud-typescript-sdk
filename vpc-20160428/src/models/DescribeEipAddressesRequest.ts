// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipAddressesRequestFilter } from "./DescribeEipAddressesRequestFilter";
import { DescribeEipAddressesRequestTag } from "./DescribeEipAddressesRequestTag";


export class DescribeEipAddressesRequest extends $dara.Model {
  filter?: DescribeEipAddressesRequestFilter[];
  /**
   * @remarks
   * The ID of the EIP that you want to query.
   * 
   * You can specify up to 50 EIP IDs. Separate multiple IDs with commas (,).
   * 
   * >  If both **EipAddress** and **AllocationId** are specified, you can specify up to 50 EIP IDs for **AllocationId**, and specify up to 50 EIPs for **EipAddress**.
   * 
   * @example
   * eip-2zeerraiwb7ujxscd****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the instance associated with the EIP.
   * 
   * @example
   * i-2zebb08phyccdvf****
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud resource with which you want to associate the EIP. Valid values:
   * 
   * *   **EcsInstance** (default): an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC).
   * *   **SlbInstance**: a CLB instance in a VPC.
   * *   **Nat**: a NAT gateway.
   * *   **HaVip**: an HAVIP.
   * *   **NetworkInterface**: a secondary ENI.
   * *   **IpAddress**: an IP address.
   * 
   * >  Each ECS instance, CLB instance, HAVIP, and IP address can be associated with only one EIP. A NAT gateway can be associated with multiple EIPs. The number of EIPs that you can associate with a secondary ENI depends on the association mode. For more information, see [Associate EIPs with and disassociate EIPs from cloud resources](https://help.aliyun.com/document_detail/72125.html).
   * 
   * @example
   * EcsInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * *   **PostPaid**: pay-as-you-go.
   * *   **PrePaid**: subscription.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The EIP that you want to query.
   * 
   * You can specify up to 50 EIPs. Separate multiple EIPs with commas (,).
   * 
   * >  If both **EipAddress** and **AllocationId** are specified, you can specify up to 50 EIPs for **EipAddress**, and specify up to 50 EIP IDs for **AllocationId**.
   * 
   * @example
   * 47.75.XX.XX
   */
  eipAddress?: string;
  /**
   * @remarks
   * The name of the EIP.
   * 
   * The name must be 1 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * EIP-01
   */
  eipName?: string;
  /**
   * @remarks
   * The line type. Valid values:
   * 
   * *   **BGP** (default): Border Gateway Protocol (BGP) (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
   * *   **BGP_PRO**: BGP (Multi-ISP) Pro lines. Only the following regions support BGP (Multi-ISP) Pro lines: China (Hong Kong), Singapore, Japan (Tokyo), Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
   * 
   * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see the [Line types](https://help.aliyun.com/document_detail/32321.html) section of the "What is EIP?" topic.
   * 
   * If you are allowed to use single-ISP bandwidth, you can also use one of the following values:
   * 
   * *   **ChinaTelecom**
   * *   **ChinaUnicom**
   * *   **ChinaMobile**
   * *   **ChinaTelecom_L2**
   * *   **ChinaUnicom_L2**
   * *   **ChinaMobile_L2**
   * 
   * If your services are deployed in China East 1 Finance, this parameter is required and you must set the value to **BGP_FinanceCloud**.
   * 
   * @example
   * BGP
   */
  ISP?: string;
  /**
   * @remarks
   * Specifies whether to return information about pending orders. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  includeReservationData?: boolean;
  /**
   * @remarks
   * The reason why the EIP is locked. Valid values:
   * 
   * *   **financial**: The EIP is locked due to overdue payments.
   * *   **security**: The EIP is locked for security reasons.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The IP address pool to which the EIP that you want to query belongs.
   * 
   * @example
   * pippool-2vc0kxcedhquybdsz****
   */
  publicIpAddressPoolId?: string;
  /**
   * @remarks
   * The region ID of the EIP.
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
   * The ID of the resource group to which the EIP belongs.
   * 
   * @example
   * rg-acfmxazb4pcdvf****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to activate Anti-DDoS Pro/Premium. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  securityProtectionEnabled?: boolean;
  /**
   * @remarks
   * The ID of the contiguous EIP group.
   * 
   * @example
   * eipsg-t4nr90yik5oy38xdy****
   */
  segmentInstanceId?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no.
   * 
   * If you do not specify this parameter, all instances are queried.
   * 
   * @example
   * false
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The state of the EIP. Valid values:
   * 
   * *   **Associating**
   * *   **Unassociating**
   * *   **InUse**
   * *   **Available**
   * *   **Releasing**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags used to filter EIPs.
   */
  tag?: DescribeEipAddressesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      allocationId: 'AllocationId',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      chargeType: 'ChargeType',
      dryRun: 'DryRun',
      eipAddress: 'EipAddress',
      eipName: 'EipName',
      ISP: 'ISP',
      includeReservationData: 'IncludeReservationData',
      lockReason: 'LockReason',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicIpAddressPoolId: 'PublicIpAddressPoolId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityProtectionEnabled: 'SecurityProtectionEnabled',
      segmentInstanceId: 'SegmentInstanceId',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeEipAddressesRequestFilter },
      allocationId: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      chargeType: 'string',
      dryRun: 'boolean',
      eipAddress: 'string',
      eipName: 'string',
      ISP: 'string',
      includeReservationData: 'boolean',
      lockReason: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      publicIpAddressPoolId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityProtectionEnabled: 'boolean',
      segmentInstanceId: 'string',
      serviceManaged: 'boolean',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeEipAddressesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
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

