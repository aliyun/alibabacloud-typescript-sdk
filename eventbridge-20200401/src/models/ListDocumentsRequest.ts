// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentsRequest extends $dara.Model {
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
   * Optional. Filters documents by file name prefix (prefix match, with the same semantics as the NamePrefix parameter of ListEventStreamings). If this parameter is not specified or is set to an empty string, no filtering is applied. Maximum length: 255 characters.
   * 
   * @example
   * AfterSalesPolicy
   */
  fileNamePrefix?: string;
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
   * The maximum number of results to return per page. If this parameter is not specified or is set to 0, the default value of 20 is used. Maximum value: 100.
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
   * Not required for the first query. For subsequent queries, use the NextToken value returned in the previous response. An empty value indicates that no more pages are available.
   * 
   * @example
   * ca1eb85f5d99c7d6a97e6****
   */
  nextToken?: string;
  /**
   * @remarks
   * Optional. Filters documents by exact status match. Valid values:
   * 
   * - UPLOADING: uploading
   * - PENDING: pending processing
   * - PROCESSING: processing
   * - COMPLETED: completed
   * - FAILED: failed
   * - DELETING: deleting
   * 
   * If this parameter is not specified, no filtering is applied.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
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

