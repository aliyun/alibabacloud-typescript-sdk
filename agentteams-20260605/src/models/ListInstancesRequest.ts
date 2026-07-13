// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * AgentTeams
   */
  instanceName?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 20
   */
  nextToken?: string;
  skip?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skip: 'Skip',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      skip: 'number',
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

