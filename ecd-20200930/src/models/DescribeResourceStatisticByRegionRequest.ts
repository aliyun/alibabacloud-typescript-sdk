// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceStatisticByRegionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the statistics include the number of shared cloud desktops.
   * 
   * @example
   * true
   */
  includeGroupDesktops?: boolean;
  /**
   * @remarks
   * The ID of the service region. Valid values: China (Shanghai) and Singapore.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the region to search. This parameter is used to filter cloud desktops in the specified region.
   * 
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      includeGroupDesktops: 'IncludeGroupDesktops',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeGroupDesktops: 'boolean',
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

