// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsRequest extends $dara.Model {
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  instanceId?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      instanceId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

