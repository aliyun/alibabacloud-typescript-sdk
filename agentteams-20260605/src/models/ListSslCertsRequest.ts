// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSslCertsRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentTeams instance ID. This parameter is used to verify the ownership of the current user\\"s instance and to query certificates by the instance region.
   * 
   * This parameter is required.
   * 
   * @example
   * instance-1
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
   * 2
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

