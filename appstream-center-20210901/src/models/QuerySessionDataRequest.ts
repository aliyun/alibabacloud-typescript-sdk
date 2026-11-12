// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionDataRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID, used to filter session data for a specified delivery group. If not provided, the summary of session data for all delivery groups under the current account is returned.
   * 
   * @example
   * aig-89ibriac2wudyph38
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The business region ID, which specifies the region for which to query session data. The server uses this value as the region filter condition for session data. If not provided, no region filtering is applied, and the summary of session data for all regions is returned.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The region ID, which is a common request parameter for the gateway. The region actually used to filter session data in this operation is specified by BizRegionId.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The statistical date in the yyyyMMdd format (without hyphens), such as 20261106. If not provided, the data for yesterday is queried by default. Only dates within the last 90 days are supported. If the date exceeds 90 days or the format is invalid, a parameter error is returned.
   * 
   * @example
   * 20261106
   */
  statDate?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      bizRegionId: 'BizRegionId',
      regionId: 'RegionId',
      statDate: 'StatDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      bizRegionId: 'string',
      regionId: 'string',
      statDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

