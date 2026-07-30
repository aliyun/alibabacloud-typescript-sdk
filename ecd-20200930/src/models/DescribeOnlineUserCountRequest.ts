// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOnlineUserCountRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-shanghai+dir-631324****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID of the service.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The region ID used to filter cloud resource information for the specified region.
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

