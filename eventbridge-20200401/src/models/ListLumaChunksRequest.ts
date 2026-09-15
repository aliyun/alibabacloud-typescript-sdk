// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLumaChunksRequest extends $dara.Model {
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
   * The name of the data catalog bound to the agent. You can call ListLumaCatalogs to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * The ID of the document used to filter text chunks. If this parameter is not specified, text chunks of all documents in the knowledge base are returned.
   * 
   * @example
   * doc-a1b2c3d4
   */
  documentId?: string;
  /**
   * @remarks
   * Specifies whether to return only enabled text chunks. If this parameter is not specified, text chunks are not filtered by enabled status.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The keyword used to filter text chunks by content.
   * 
   * @example
   * Event rule
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the knowledge base bound to the agent. You can call ListLumaKnowledgeBases to obtain this value.
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
   * The name of the namespace bound to the agent. You can call ListLumaNamespaces to obtain this value.
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
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      catalog: 'Catalog',
      documentId: 'DocumentId',
      enabled: 'Enabled',
      keyword: 'Keyword',
      knowledgeBaseName: 'KnowledgeBaseName',
      maxResults: 'MaxResults',
      namespace: 'Namespace',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      catalog: 'string',
      documentId: 'string',
      enabled: 'boolean',
      keyword: 'string',
      knowledgeBaseName: 'string',
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

