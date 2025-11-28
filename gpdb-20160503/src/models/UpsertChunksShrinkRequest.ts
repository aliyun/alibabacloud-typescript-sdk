// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertChunksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Based on the Filter input specified under TextChunks, this parameter controls whether data insertion is allowed when a Filter is provided.
   * 
   * If AllowInsertWithFilter = true, the insert operation is performed when the filter does not match any data.
   * 
   * If AllowInsertWithFilter = false, no action is performed if the filter does not match any data.
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
   * > You can call the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation to create a document collection and call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to query a list of document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The file name of the document.
   * 
   * > When a non-empty filename is specified, the system will decide whether to overwrite the data associated with that filename based on the value of the ShouldReplaceFile parameter. If you leave this parameter empty, the data of chunks is appended to the document collection.
   * 
   * @example
   * mydoc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The name of the namespace. Default value: public.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace and call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to query a list of namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
   * 
   * > The value of this parameter is specified when you call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
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
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the data associated with the file name specified by the FileName parameter.
   * 
   * If you set ShouldReplaceFile to true, the system deletes all data associated with the file name and then inserts new data.
   * 
   * If you set ShouldReplaceFile to false, the system does not delete the data associated with the file name, but inserts or updates the data of chunks based on the TextChunks parameter.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  shouldReplaceFile?: boolean;
  /**
   * @remarks
   * List of document chunks after splitting.
   */
  textChunksShrink?: string;
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
      textChunksShrink: 'TextChunks',
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
      textChunksShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

