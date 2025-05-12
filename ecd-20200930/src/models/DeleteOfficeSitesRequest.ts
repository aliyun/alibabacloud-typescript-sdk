// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOfficeSitesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the office networks. You can specify 1 to 100 office networks.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string[];
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
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.officeSiteId)) {
      $dara.Model.validateArray(this.officeSiteId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

