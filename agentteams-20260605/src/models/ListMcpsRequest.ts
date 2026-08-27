// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpsRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. Fuzzy matches by instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of records per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page, used for paginated queries.
   * 
   * @example
   * next-token-xxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

