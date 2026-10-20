// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of ENS nodes. Array length: 1 to 100.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The IP address of the HaVip instance.
   * 
   * @example
   * 10.5.XX.XX
   */
  haVipAddress?: string;
  /**
   * @remarks
   * The HaVip instance ID.
   * 
   * @example
   * havip-5p14t****
   */
  haVipId?: string;
  /**
   * @remarks
   * The name of the HaVip instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * @example
   * n-57gqcdfvx6n****
   */
  networkId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings for paging.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The HaVip status. Valid values:
   * - Creating: The HaVip is being created.
   * - Available: The HaVip is available.
   * - InUse: The HaVip is in use.
   * - Deleting: The HaVip is being deleted.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-5****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      haVipAddress: 'HaVipAddress',
      haVipId: 'HaVipId',
      name: 'Name',
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      haVipAddress: 'string',
      haVipId: 'string',
      name: 'string',
      networkId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      status: 'string',
      vSwitchId: 'string',
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

