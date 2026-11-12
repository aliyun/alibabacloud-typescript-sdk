// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertChunksRequestTextChunks extends $dara.Model {
  /**
   * @remarks
   * The document content.
   * 
   * This parameter is required.
   * 
   * @example
   * AnalyticDB for PostgreSQL provides a simple, fast, and cost-effective PB-level cloud data warehousing solution.
   */
  content?: string;
  /**
   * @remarks
   * The filter condition for the data to be updated, in the format of an SQL WHERE clause.
   * 
   * @example
   * title = \\"seagull\\"
   */
  filter?: string;
  /**
   * @remarks
   * The unique ID of the vector data.
   * 
   * @example
   * 273e3fc7-8f56-4167-a1bb-d35d2f3b9043
   */
  id?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"title":"test"}
   */
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      filter: 'Filter',
      id: 'Id',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      filter: 'string',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertChunksRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow data insertion when a filter is specified. This parameter takes effect only when the Filter parameter in TextChunks is specified.
   * 
   * If AllowInsertWithFilter is set to true, an insert operation is performed when the filter does not match any data.
   * 
   * If AllowInsertWithFilter is set to false, no operation is performed when the filter does not match any data.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  allowInsertWithFilter?: boolean;
  /**
   * @remarks
   * The name of the document collection.
   * 
   * > The document collection is created by calling the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to view the created document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a specific region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The file name.
   * 
   * > If this parameter is not empty, the system determines whether to overwrite the data associated with this file name based on the value of the ShouldReplaceFile parameter. If this parameter is empty, the chunk data is directly appended and uploaded to the document collection.
   * 
   * @example
   * mydoc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view the namespace list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * > This value is specified in the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  namespacePassword?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the data associated with the specified file name. This parameter takes effect only when the FileName parameter is specified.
   * 
   * If ShouldReplaceFile is set to true, all data associated with the file name is deleted before new data is inserted.
   * 
   * If ShouldReplaceFile is set to false, the data associated with the file name is not deleted. Instead, chunks are inserted or updated based on the specific TextChunks parameter.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  shouldReplaceFile?: boolean;
  /**
   * @remarks
   * The list of chunked documents.
   */
  textChunks?: UpsertChunksRequestTextChunks[];
  static names(): { [key: string]: string } {
    return {
      allowInsertWithFilter: 'AllowInsertWithFilter',
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      shouldReplaceFile: 'ShouldReplaceFile',
      textChunks: 'TextChunks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowInsertWithFilter: 'boolean',
      collection: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      shouldReplaceFile: 'boolean',
      textChunks: { 'type': 'array', 'itemType': UpsertChunksRequestTextChunks },
    };
  }

  validate() {
    if(Array.isArray(this.textChunks)) {
      $dara.Model.validateArray(this.textChunks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

