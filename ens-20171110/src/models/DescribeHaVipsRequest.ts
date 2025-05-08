// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing-cmcc
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of edge nodes. You can specify 1 to 100 IDs.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The IP address of the HAVIP.
   * 
   * @example
   * 10.5.XX.XX
   */
  haVipAddress?: string;
  /**
   * @remarks
   * The ID of the HAVIP.
   * 
   * @example
   * havip-5p14t****
   */
  haVipId?: string;
  /**
   * @remarks
   * The name of the HAVIP.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-57gqcdfvx6n****
   */
  networkId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The status of the HAVIP. Valid values:
   * 
   * *   Creating
   * *   Available
   * *   InUse
   * *   Deleting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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

