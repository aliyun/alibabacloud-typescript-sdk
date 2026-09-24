// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregatedDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The aggregation factor.
   * 
   * @example
   * STATUS
   */
  aggregationFactor?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the list of regions supported by WUYING Workspace.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The search region ID. Used to filter desktop information for a specified region.
   * 
   * @example
   * cn-shanghai
   */
  searchRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregationFactor: 'AggregationFactor',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationFactor: 'string',
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

