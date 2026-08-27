// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * * **Description**: The instance name. Supports fuzzy match.
   * 
   * @example
   * AgentTeams
   */
  instanceName?: string;
  /**
   * @remarks
   * * **Description**: The page size.
   * * **Default value**: 20
   * * **Current implementation limit**: 1 to 100
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * * **Description**: The pagination token for the next page.
   * 
   * @example
   * 20
   */
  nextToken?: string;
  /**
   * @remarks
   * * **Description**: The number of records to skip.
   * * **Default value**: 0
   * 
   * @example
   * 0
   */
  skip?: number;
  /**
   * @remarks
   * * **Description**: The instance status.
   * 
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

