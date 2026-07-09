// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineRunsRequest extends $dara.Model {
  /**
   * @example
   * 1735660800
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 50. Maximum value: 200.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the nextToken value returned in the previous response to retrieve the next page. Do not specify this parameter for the first request.
   * 
   * @example
   * MTIzNDU2Nzg5MA==
   */
  nextToken?: string;
  /**
   * @example
   * 1735574400
   */
  startTime?: number;
  /**
   * @remarks
   * Filters by run status. Valid values: Pending, Running, Succeeded, Failed, and Cancelled. If this parameter is not specified, no filtering is applied.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * Filters by trigger type. Valid values: Manual, Scheduled, and RunOnce. If this parameter is not specified, no filtering is applied.
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

