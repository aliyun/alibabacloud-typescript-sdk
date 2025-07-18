// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertChunksRequestTextChunks extends $dara.Model {
  /**
   * @remarks
   * Document content.
   * 
   * This parameter is required.
   * 
   * @example
   * Cloud-native data warehouse AnalyticDB PostgreSQL Edition provides a simple, fast, and cost-effective PB-level cloud data warehouse solution.
   */
  content?: string;
  filter?: string;
  id?: string;
  /**
   * @remarks
   * Metadata.
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
  allowInsertWithFilter?: boolean;
  /**
   * @remarks
   * Document collection name.
   * 
   * > Created by the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) API. You can use the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) API to view the already created document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) API to view details of all AnalyticDB PostgreSQL instances in the target region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * File name.
   * 
   * > If a file name is specified and not empty, it will overwrite the data for this file name; if empty, the chunks data will be appended directly to the document collection.
   * 
   * @example
   * mydoc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * Namespace, default is public.
   * 
   * > You can create it using the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) API and view the list using the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) API.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * Password corresponding to the namespace.
   * 
   * > This value is specified by the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) API.
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
   * Region ID where the instance is located.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  shouldReplaceFile?: boolean;
  /**
   * @remarks
   * List of split documents.
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

