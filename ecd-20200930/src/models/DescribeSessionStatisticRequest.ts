// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSessionStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 1677808889806
   */
  endTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-shanghai+dir-259382****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The query interval. Unit: seconds. Valid values:
   * 
   * *   60
   * *   120
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies to search for session information by region ID. This parameter is used to filter desktop information of a specific region.
   * 
   * @example
   * cn-hangzhou
   */
  searchRegionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 1679449506572
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      officeSiteId: 'OfficeSiteId',
      period: 'Period',
      regionId: 'RegionId',
      searchRegionId: 'SearchRegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      officeSiteId: 'string',
      period: 'number',
      regionId: 'string',
      searchRegionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

