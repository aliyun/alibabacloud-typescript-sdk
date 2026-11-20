// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceStatisticByRegionRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  includeGroupDesktops?: boolean;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
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

