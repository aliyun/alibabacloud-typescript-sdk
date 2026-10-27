// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The contact name for filtering.
   * 
   * @example
   * Zhang San
   */
  contactName?: string;
  /**
   * @remarks
   * The end time for filtering. Default value: 0, which indicates the current time. Specify a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1579077794665
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * @example
   * 994b8baf-7ef8-480c-b141-b7b6db77c4df
   */
  jobGroupId?: string;
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
   * The page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The contact phone number for filtering.
   * 
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The scenario ID. **[Deprecated]** Legacy parameter.
   * 
   * @example
   * b0f35dd1-0337-402e-9c4f-3a6c2426950a
   */
  scenarioId?: string;
  /**
   * @remarks
   * The start time for filtering. Default value: 0, which indicates 00:00 today. Specify a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1579068424883
   */
  startTime?: number;
  /**
   * @remarks
   * The time basis for filtering. This parameter specifies the filtering criterion rather than a specific date or time. Valid values:
   * - start: Filters by start time.
   * - end: Filters by end time.
   * - job_create: Filters by job creation time.
   * 
   * @example
   * start
   */
  timeAlignment?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      scenarioId: 'ScenarioId',
      startTime: 'StartTime',
      timeAlignment: 'TimeAlignment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      scenarioId: 'string',
      startTime: 'number',
      timeAlignment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

