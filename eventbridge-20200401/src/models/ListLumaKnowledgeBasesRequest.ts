// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLumaKnowledgeBasesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * my_agent
   */
  agentName?: string;
  /**
   * @remarks
   * The name of the data catalog bound to the agent. You can call ListLumaCatalogs to obtain the catalog name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The maximum number of entries to return. Valid values: 1 to 100. If you do not specify this parameter, the server uses the default value of 100. Each entry requires a back-to-origin metadata query, so this value also limits the number of back-to-origin requests per call.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the namespace bound to the agent. You can call ListLumaNamespaces to obtain the namespace name.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The pagination token. Do not specify this parameter for the first request. For subsequent requests, set this parameter to the NextToken value returned in the previous response. This value is an opaque string. Do not parse it.
   * 
   * @example
   * ca1eb85f5d99c7d6a97e6****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      catalog: 'Catalog',
      maxResults: 'MaxResults',
      namespace: 'Namespace',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      catalog: 'string',
      maxResults: 'number',
      namespace: 'string',
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

