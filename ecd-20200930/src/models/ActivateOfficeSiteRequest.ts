// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateOfficeSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience office network that is locked.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-803704****
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
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

