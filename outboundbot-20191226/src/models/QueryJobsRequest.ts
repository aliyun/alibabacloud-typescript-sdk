// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobsRequest extends $dara.Model {
  contactName?: string;
  /**
   * @example
   * 1579077794665
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @example
   * 994b8baf-7ef8-480c-b141-b7b6db77c4df
   */
  jobGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 135****8888
   */
  phoneNumber?: string;
  /**
   * @example
   * b0f35dd1-0337-402e-9c4f-3a6c2426950a
   */
  scenarioId?: string;
  /**
   * @example
   * 1579068424883
   */
  startTime?: number;
  /**
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

