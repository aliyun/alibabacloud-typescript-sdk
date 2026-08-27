// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkerStatsDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for statistics. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1720054400000
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * inst-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to query the next page of data.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time for statistics. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1719504000000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

