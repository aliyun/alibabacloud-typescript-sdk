// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsEipAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP instance to query. You can specify up to 50 EIP instance IDs separated by commas (,).
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
   * The type of the cloud service instance to associate. Valid values: 
   * 
   * - **EnsInstance**: a VPC-type ENS instance.
   * 
   * - **SlbInstance**: a load balancing instance.
   * 
   * @example
   * SlbInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The IP address of the EIP to query. You can specify up to 50 EIP addresses separated by commas (,).
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
   * The ENS edge zone ID.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The array of ENS edge zone IDs. Array length: 1 to 100.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * Specifies whether ICMP echo reply is enabled. Valid values:
   * 
   * - **true** (default): enabled.
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  icmpReplyEnabled?: boolean;
  /**
   * @remarks
   * The lock type.
   * - financial: locked due to overdue payment.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The page number of the list. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the EIP is a standby EIP. Valid values:
   * 
   * - **true**: standby.
   * 
   * - **false**: not standby.
   * 
   * @example
   * true
   */
  standby?: string;
  /**
   * @remarks
   * The status of the EIP. Valid values: Associating: being associated. Unassociating: being disassociated. InUse: allocated. Available: available.
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

