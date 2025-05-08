// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsEipAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP that you want to query. You can specify up to 50 EIP IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * eip-5q9uwkd9bznjpxz8hr6cirnjk
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the instance with which you want to associate the EIP.
   * 
   * @example
   * lb-5t18quoohsrc3xkf86spmnu77
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of the instance that is associated with the EIP. Valid values:
   * 
   * *   **EnsInstance**: ENS instance in a VPC
   * *   **SlbInstance**: SLB instance
   * 
   * @example
   * SlbInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The EIP that you want to query. You can specify up to 50 EIPs. Separate multiple EIPs with commas (,).
   * 
   * @example
   * 192.168.0.1
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
   * The ID of the Edge Node Service (ENS) node.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of edge nodes. You can specify 1 to 100 IDs.
   */
  ensRegionIds?: string[];
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
   * The number of entries per page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the EIP is a secondary EIP. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  standby?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      eipAddress: 'EipAddress',
      eipName: 'EipName',
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      standby: 'Standby',
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
      pageNumber: 'number',
      pageSize: 'number',
      standby: 'string',
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

