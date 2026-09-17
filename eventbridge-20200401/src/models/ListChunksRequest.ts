// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChunksRequest extends $dara.Model {
  /**
   * @remarks
   * The data catalog to which the knowledge base belongs. This parameter, together with Namespace and KnowledgeBaseName, uniquely identifies a knowledge base. You can call ListCatalogs to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_catalog
   */
  catalog?: string;
  /**
   * @remarks
   * Optional. If specified, only chunks of the specified document are returned, sorted by ChunkSeq in ascending order within the document. If not specified, chunks of all documents in the knowledge base are returned, sorted by DocumentId in lexicographic ascending order, and within the same document by ChunkSeq in ascending order, with chunks listed contiguously. In full knowledge base mode, Keyword filtering is not supported (use SearchKnowledgeBase instead), and TotalCount is not returned. Pagination ends when NextToken is empty.
   * 
   * @example
   * doc-bp1xxxxxxxxxxxx
   */
  documentId?: string;
  /**
   * @remarks
   * Optional. Set to true to return only enabled chunks, or false to return only disabled chunks. If not specified, all chunks are returned.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Optional. Active only when DocumentId is specified. Filters chunks by keyword in the chunk body. Only chunks that contain the specified keyword are returned. In full knowledge base pattern (when DocumentId is not specified), passing this parameter causes an error. To retrieve content across the full text, use SearchKnowledgeBase (set Mode to KEYWORD for full-text index).
   * 
   * @example
   * Installation
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the knowledge base. The name is unique within a namespace and is determined at creation time. It cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * my-knowledge-base
   */
  knowledgeBaseName?: string;
  /**
   * @remarks
   * The maximum number of results to return per page. If not specified or set to 0, the default value 20 is used. The maximum value is 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The namespace to which the knowledge base belongs. The namespace must belong to the specified data catalog. This parameter, together with Catalog and KnowledgeBaseName, uniquely identifies a knowledge base. You can call ListNamespaces to obtain this value.
   * 
   * This parameter is required.
   * 
   * @example
   * my_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * Not required for the first query. For subsequent queries, pass the NextToken returned in the previous response. An empty value indicates that no more pages are available.
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

