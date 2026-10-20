// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The upper bound for filtering by trigger time (triggered_at <= endTime), in UNIX seconds.
   * 
   * @example
   * 1735660800
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries to return in the current request. Default value: 50. Maximum value: 200.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Pass the nextToken value from the previous response to retrieve the next page. Do not specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The lower bound for filtering by trigger time (triggered_at >= startTime), in UNIX seconds.
   * 
   * @example
   * 1735574400
   */
  startTime?: number;
  /**
   * @remarks
   * Filters runs by status. Valid values: Pending, Running, Succeeded, Failed, and Cancelled. If you do not specify this parameter, no filtering is applied.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * Filters runs by trigger type. Valid values: Continuous, RunOnce, and Scheduled. If you do not specify this parameter, no filtering is applied.
   * 
   * @example
   * Scheduled
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      startTime: 'startTime',
      status: 'status',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'number',
      status: 'string',
      triggerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

