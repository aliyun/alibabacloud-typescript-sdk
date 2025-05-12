// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateNetworkPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the premium bandwidth plan. You can call the [DescribeNetworkPackages](https://help.aliyun.com/document_detail/216079.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * np-*********
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

