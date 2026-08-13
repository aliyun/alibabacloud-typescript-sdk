// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignsRequest extends $dara.Model {
  /**
   * @remarks
   * The earliest actual start time.
   * 
   * @example
   * 1634054400000
   */
  actualStartTimeFrom?: string;
  /**
   * @remarks
   * The latest actual start time.
   * 
   * @example
   * 1634054400000
   */
  actualStartTimeTo?: string;
  /**
   * @remarks
   * The instance ID of the outbound robot.
   * 
   * This parameter is required.
   * 
   * @example
   * a4274627-265f-4e14-b2d6-4ee7d4f8593e
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the campaign.
   * 
   * @example
   * SatisfactionSurvey
   */
  name?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The earliest planned start time.
   * 
   * @example
   * 1634054400000
   */
  plannedStartTimeFrom?: string;
  /**
   * @remarks
   * The latest planned start time.
   * 
   * @example
   * 1634054400000
   */
  plannedStartTimeTo?: string;
  /**
   * @remarks
   * The status of the campaign.
   * 
   * @example
   * Completed
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      actualStartTimeFrom: 'ActualStartTimeFrom',
      actualStartTimeTo: 'ActualStartTimeTo',
      instanceId: 'InstanceId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      plannedStartTimeFrom: 'PlannedStartTimeFrom',
      plannedStartTimeTo: 'PlannedStartTimeTo',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualStartTimeFrom: 'string',
      actualStartTimeTo: 'string',
      instanceId: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      plannedStartTimeFrom: 'string',
      plannedStartTimeTo: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

