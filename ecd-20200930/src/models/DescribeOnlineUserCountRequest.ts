// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnlineUserCountRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is for internal use only.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The office site ID.
   * 
   * @example
   * cn-shanghai+dir-631324****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the region to search. This filters the results to show only resources from the specified region.
   * 
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      officeSiteId: 'string',
      regionId: 'string',
      searchRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

