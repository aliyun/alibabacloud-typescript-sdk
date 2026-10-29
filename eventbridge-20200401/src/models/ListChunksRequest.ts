// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChunksRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the knowledge base belongs. This parameter is used together with Namespace and KnowledgeBaseName to locate the knowledge base. You can obtain the value by calling the ListCatalogs operation.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Optional. If you specify this parameter, only the chunks of the specified document are listed, sorted in ascending order of ChunkSeq within the document. If you do not specify this parameter, the chunks of all documents in the knowledge base are listed, sorted in ascending lexicographical order of DocumentId and then in ascending order of ChunkSeq within the same document, with chunks arranged consecutively. In full-base mode, Keyword filtering is not supported. Use SearchKnowledgeBase instead. In addition, TotalCount is not returned in full-base mode. Pagination ends when NextToken is empty.
   * 
   * @example
   * doc-bp1xxxxxxxxxxxx
   */
  documentId?: string;
  /**
   * @remarks
   * Optional. If you set this parameter to true, only enabled chunks are returned. If you set it to false, only disabled chunks are returned. If you do not specify this parameter, all chunks are returned.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Optional. This parameter is active only when DocumentId is specified. It filters chunks by keywords in the chunk content. Only chunks that contain the specified keyword are returned. If you specify this parameter in full-base pattern (when DocumentId is not specified), an error is reported. To retrieve full-text content, use SearchKnowledgeBase (set Mode to KEYWORD for full-text index).
   * 
   * @example
   * Install
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name must be unique within the namespace. It is specified upon creation and cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. If you do not specify this parameter or set it to 0, the default value 20 is used. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The namespace to which the knowledge base belongs. The namespace must belong to the specified data catalog. This parameter is used together with Catalog and KnowledgeBaseName to locate the knowledge base. You can obtain the value by calling the ListNamespaces operation.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * You do not need to specify this parameter for the first query. For subsequent queries, use the NextToken value returned in the previous response. An empty value indicates that no more pages are available.
   * 
   * @example
   * ca1eb85f5d99c7d6a97e6****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
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

