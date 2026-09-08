// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCampaignsRequest extends $dara.Model {
  /**
   * @remarks
   * The actual start time of the campaign. This parameter is optional. By default, all time ranges are queried.
   * 
   * @example
   * 1780329600000
   */
  actualStartTimeFrom?: string;
  /**
   * @remarks
   * The actual end time of the campaign. This parameter is optional. By default, all time ranges are queried.
   * 
   * @example
   * 1781625600000
   */
  actualStartTimeTo?: string;
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
   * Filters campaigns by predictive dialing campaign name. Fuzzy match is not supported. This parameter is optional and defaults to empty, which indicates no filtering.
   * 
   * @example
   * test-campaign
   */
  name?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The planned start time of the campaign. This parameter is optional. By default, all time ranges are queried.
   * 
   * @example
   * 1780243200000
   */
  planedStartTimeFrom?: string;
  /**
   * @remarks
   * The planned end time of the campaign. This parameter is optional. By default, all time ranges are queried.
   * 
   * @example
   * 1781798399000
   */
  planedStartTimeTo?: string;
  /**
   * @remarks
   * Filters campaigns by skill group ID. This parameter is optional and defaults to empty, which indicates no filtering.
   * 
   * @example
   * skillgroup@ccc-test
   */
  queueId?: string;
  /**
   * @remarks
   * Filters campaigns by predictive dialing campaign state. This parameter is optional and defaults to empty.
   * 
   * @example
   * Draft
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
      planedStartTimeFrom: 'PlanedStartTimeFrom',
      planedStartTimeTo: 'PlanedStartTimeTo',
      queueId: 'QueueId',
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
      planedStartTimeFrom: 'string',
      planedStartTimeTo: 'string',
      queueId: 'string',
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

