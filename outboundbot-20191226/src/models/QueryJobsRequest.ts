// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Filter condition. Contact name.
   * 
   * @example
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * Filter condition. End time. Default value is 0, which means up to now.
   * 
   * @example
   * 1579077794665
   */
  endTime?: number;
  /**
   * @remarks
   * Instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * Task group ID.
   * 
   * @example
   * 994b8baf-7ef8-480c-b141-b7b6db77c4df
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter condition. Contact phone number.
   * 
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Scenario ID. This parameter is deprecated.
   * 
   * @example
   * b0f35dd1-0337-402e-9c4f-3a6c2426950a
   */
  scenarioId?: string;
  /**
   * @remarks
   * Filter condition. Start time. Default value is 0, which means from 00:00 today.
   * 
   * @example
   * 1579068424883
   */
  startTime?: number;
  /**
   * @remarks
   * Time filter basis. Valid values: start, end, and job_create.
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

