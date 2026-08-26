// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of AI applications bound to the knowledge base.
   * 
   * @example
   * 2
   */
  bindingAppCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * testDesc
   */
  description?: string;
  /**
   * @remarks
   * The unique identifier of the knowledge base.
   * 
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The type of the knowledge base. Valid values:
   * - PUBLIC
   * - PERSONAL
   * 
   * @example
   * PUBLIC
   */
  knowledgeBaseType?: string;
  /**
   * @remarks
   * The ID of the knowledge space.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * testName
   */
  name?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E56531A4-E552-40BA-9C58-137B80******
   */
  requestId?: string;
  /**
   * @remarks
   * The search mode. Valid values:
   * * balanced (default)
   * * precise
   * * semantic
   * * knn
   * * rrf
   * 
   * @example
   * balanced
   */
  searchMode?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 15
   */
  shardCount?: number;
  /**
   * @remarks
   * The status of the knowledge base.
   * 
   * @example
   * Activation
   */
  status?: string;
  /**
   * @remarks
   * The total number of documents.
   * 
   * @example
   * 1
   */
  totalDocs?: number;
  /**
   * @remarks
   * The total size in bytes.
   * 
   * @example
   * 318881
   */
  totalSizeBytes?: number;
  static names(): { [key: string]: string } {
    return {
      bindingAppCount: 'BindingAppCount',
      creationTime: 'CreationTime',
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeBaseType: 'KnowledgeBaseType',
      knowledgeSpaceId: 'KnowledgeSpaceId',
      name: 'Name',
      requestId: 'RequestId',
      searchMode: 'SearchMode',
      shardCount: 'ShardCount',
      status: 'Status',
      totalDocs: 'TotalDocs',
      totalSizeBytes: 'TotalSizeBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingAppCount: 'number',
      creationTime: 'string',
      description: 'string',
      knowledgeBaseId: 'string',
      knowledgeBaseType: 'string',
      knowledgeSpaceId: 'string',
      name: 'string',
      requestId: 'string',
      searchMode: 'string',
      shardCount: 'number',
      status: 'string',
      totalDocs: 'number',
      totalSizeBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

