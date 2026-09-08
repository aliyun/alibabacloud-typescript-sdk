// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignTrendingReportRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the predictive outbound calling Activity.
   * 
   * This parameter is required.
   * 
   * @example
   * 6badb397-a8b5-40b6-21019d382a09
   */
  campaignId?: string;
  /**
   * @remarks
   * The end time. This parameter is optional. The default value is the end time of the predictive outbound dialing activity.
   * 
   * @example
   * 2021-10-14 20:59:59
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * Start Time. This parameter is optional. The default value is the Start Time of the predictive outbound calling Activity.
   * 
   * @example
   * 2021-10-14 00:00:00
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      endTime: 'number',
      instanceId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

