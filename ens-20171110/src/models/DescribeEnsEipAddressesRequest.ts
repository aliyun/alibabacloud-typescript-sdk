// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsEipAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP instance. You can specify up to 50 EIP instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * eip-5q9uwkd9bznjpxz8hr6cirnjk
   */
  allocationId?: string;
  /**
   * @remarks
   * The instance ID of the cloud service.
   * 
   * @example
   * lb-5t18quoohsrc3xkf86spmnu77
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud service instance to attach. Valid values: 
   * 
   * - **EnsInstance**: ENS instance in a VPC.
   * 
   * - **SlbInstance**: load balancing instance.
   * 
   * @example
   * SlbInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The IP address of the EIP. You can specify up to 50 IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 120.XXX.XXX.4
   */
  eipAddress?: string;
  /**
   * @remarks
   * The name of the EIP.
   * 
   * @example
   * test
   */
  eipName?: string;
  /**
   * @remarks
   * The ID of the ENS edge zone.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The array of ENS edge zone IDs. The array must contain 1 to 100 IDs.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable ICMP echo reply. Valid values:
   * 
   * - **true**: ICMP echo reply is enabled. This is the default value.
   * - **false**: ICMP echo reply is disabled.
   * 
   * @example
   * false
   */
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * The lock reason. Valid values:
   * - **financial**: The EIP is locked due to an overdue payment.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the EIP is a standby EIP. Valid values:
   * 
   * - **true**: The EIP is a standby EIP.
   * 
   * - **false**: The EIP is not a standby EIP.
   * 
   * @example
   * true
   */
  standby?: string;
  /**
   * @remarks
   * The status of the EIP. Valid values:
   * 
   * - **Associating**: The EIP is being associated.
   * - **Unassociating**: The EIP is being disassociated.
   * - **InUse**: The EIP is allocated.
   * - **Available**: The EIP is available.
   * 
   * @example
   * InUse
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      eipAddress: 'EipAddress',
      eipName: 'EipName',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      icmpReplyEnabled: 'IcmpReplyEnabled',
      lockReason: 'LockReason',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      standby: 'Standby',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      eipAddress: 'string',
      eipName: 'string',
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      icmpReplyEnabled: 'boolean',
      lockReason: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      standby: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

