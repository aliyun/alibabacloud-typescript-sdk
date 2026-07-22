// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduledTaskExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the time range in ISO-8601 format.
   * 
   * @example
   * 2026-06-12T23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-axxkuuxahbu1*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of results to return per request. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first request.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * This parameter is required.
   * 
   * @example
   * sch-260705-agb*****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The start time of the time range in ISO-8601 format.
   * 
   * @example
   * 2026-06-01T00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the scheduled task.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      scheduledId: 'ScheduledId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      scheduledId: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

