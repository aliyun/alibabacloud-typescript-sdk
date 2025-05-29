// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGeographicRegionMembershipResponseBodyRegionIdsRegionId extends $dara.Model {
  /**
   * @remarks
   * The ID of the region.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * @example
   * us-west-1
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

