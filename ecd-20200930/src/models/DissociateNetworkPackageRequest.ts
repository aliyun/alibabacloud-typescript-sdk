// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateNetworkPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the premium Internet bandwidth plan. You can call [DescribeNetworkPackages](https://help.aliyun.com/document_detail/216079.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * np-*********
   */
  networkPackageId?: string;
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

