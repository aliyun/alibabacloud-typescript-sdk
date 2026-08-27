// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the statistical interval. The value is a millisecond-level timestamp string.
   * 
   * @example
   * 1751932800000
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * agentteams-test-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of data.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The start time of the statistical interval. The value is a millisecond-level timestamp string.
   * 
   * @example
   * 1751328000000
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

