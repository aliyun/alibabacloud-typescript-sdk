// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-test-001
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of records to return in this request. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token, which is the offset integer string returned from the previous page.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The team name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-team
   */
  team?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      team: 'Team',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      team: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

