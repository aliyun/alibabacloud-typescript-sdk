// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVirtualBridgeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The virtual bridge ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vb-sjfiahsiufhisda***
   */
  bridgeId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The virtual bridge status.
   * 
   * This parameter is required.
   * 
   * @example
   * unuse
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bridgeId: 'BridgeId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bridgeId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

