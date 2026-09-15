// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLumaDocumentsRequest extends $dara.Model {
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
   * The file name prefix used to filter documents.
   * 
   * @example
   * manual-
   */
  fileNamePrefix?: string;
  /**
   * @remarks
   * The name of the knowledge base bound to the agent. You can call ListLumaKnowledgeBases to obtain the knowledge base name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The maximum number of records to return. Valid values: 1 to 100. If this parameter is not specified, the server uses a default value.
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
   * The pagination token. Do not specify this parameter for the first request. For subsequent requests, use the NextToken value returned in the previous response. This value is an opaque string. Do not parse it.
   * 
   * @example
   * ca1eb85f5d99c7d6a97e6****
   */
  nextToken?: string;
  /**
   * @remarks
   * The processing status used to filter documents. Valid values: Pending, Processing, Ready, and Failed.
   * 
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      catalog: 'Catalog',
      fileNamePrefix: 'FileNamePrefix',
      knowledgeBaseName: 'KnowledgeBaseName',
      maxResults: 'MaxResults',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      catalog: 'string',
      fileNamePrefix: 'string',
      knowledgeBaseName: 'string',
      maxResults: 'number',
      namespace: 'string',
      nextToken: 'string',
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

