// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The model ID used to query a specific model.
   * 
   * @example
   * m-xxx
   */
  id?: string;
  /**
   * @remarks
   * Optional. Fuzzy match by instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * AgentTeams
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results.
   * 
   * @example
   * nt-xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The model provider name used for filtering.
   * 
   * @example
   * my-provider
   */
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

