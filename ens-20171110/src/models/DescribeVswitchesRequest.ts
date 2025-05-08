// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVSwitchesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-xian-unicom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The IDs of edge nodes. You can specify 1 to 100 IDs.
   */
  ensRegionIds?: string[];
  /**
   * @remarks
   * The ID of the VPC to which the vSwitch belongs.
   * 
   * @example
   * vpc-25cdvfeq58pl****
   */
  networkId?: string;
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
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-5m9xhlq8oh***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of vSwitches. You can specify 1 to 100 IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * testVSwitchName
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      ensRegionIds: 'EnsRegionIds',
      networkId: 'NetworkId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      ensRegionIds: { 'type': 'array', 'itemType': 'string' },
      networkId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ensRegionIds)) {
      $dara.Model.validateArray(this.ensRegionIds);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

