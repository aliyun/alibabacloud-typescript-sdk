// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList } from "./DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList";


export class DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The configuration of the blocked locations.
   */
  regionList?: DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      regionList: 'RegionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      regionList: { 'type': 'array', 'itemType': DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigsRegionList },
    };
  }

  validate() {
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

