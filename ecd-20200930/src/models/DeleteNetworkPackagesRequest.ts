// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkPackagesRequest extends $dara.Model {
  /**
   * @remarks
   * List of public network premium bandwidth IDs. You can specify one or more IDs.
   * 
   * This parameter is required.
   */
  networkPackageId?: string[];
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to obtain a list of regions where WUYING Workspace is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resellerOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      networkPackageId: 'NetworkPackageId',
      regionId: 'RegionId',
      resellerOwnerUid: 'ResellerOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPackageId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      resellerOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.networkPackageId)) {
      $dara.Model.validateArray(this.networkPackageId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

