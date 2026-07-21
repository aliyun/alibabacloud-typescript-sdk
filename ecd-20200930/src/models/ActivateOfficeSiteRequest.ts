// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateOfficeSiteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the locked convenience office network.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-803704****
   */
  officeSiteId?: string;
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

