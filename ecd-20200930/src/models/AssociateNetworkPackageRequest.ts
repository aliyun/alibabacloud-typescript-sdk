// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateNetworkPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the premium bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * np-e0iodl3yzb62q****
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The ID of the office network. You can call the [DescribeNetworkPackages](https://help.aliyun.com/document_detail/216079.html) to obtain the ID of the office network to which a premium bandwidth plan is bound.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-*********
   */
  officeSiteId?: string;
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
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: 'string',
      officeSiteId: 'string',
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

