// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsRequest extends $dara.Model {
  /**
   * @remarks
   * The upper bound of the trigger time filter (triggered_at <= endTime). The value is a UNIX timestamp in seconds.
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
   * The pagination token. To retrieve the next page of results, pass the nextToken value from the previous response. Do not specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The lower bound of the trigger time filter (triggered_at >= startTime). The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735574400
   */
  startTime?: number;
  /**
   * @remarks
   * Filters the results by run status. Valid values: Pending, Running, Succeeded, Failed, and Cancelled. If you do not specify this parameter, the results are not filtered by status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * Filters the results by trigger type. Valid values: Manual, Scheduled, and RunOnce. If you do not specify this parameter, the results are not filtered by trigger type.
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

