// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition for the contact name.
   * 
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * The filter condition for the end time. Default value: 0, which indicates the current time.
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
   * The filter condition for the contact phone number.
   * 
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The scenario ID. This is a legacy parameter and has been deprecated.
   * 
   * @example
   * b0f35dd1-0337-402e-9c4f-3a6c2426950a
   */
  scenarioId?: string;
  /**
   * @remarks
   * The filter condition for the start time. Default value: 0, which indicates the start of the current day.
   * 
   * @example
   * 1579068424883
   */
  startTime?: number;
  /**
   * @remarks
   * Specifies whether to query by start time, end time, or job creation time. Valid values: start, end, job_create.
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

