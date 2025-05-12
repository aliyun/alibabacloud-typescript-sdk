// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBundlesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computer templates. You can specify 1 to 100 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * b-cezrnfgecbich****
   */
  bundleId?: string[];
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
      bundleId: 'BundleId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bundleId)) {
      $dara.Model.validateArray(this.bundleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

