// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class UpsertCollectionDataAsyncAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the collection.
   * 
   * >  You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to query a list of collections.
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
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The Internet-accessible vector data file URL.
   * 
   * > 
   * 
   * *   The file content must be in the JSONL format. Each line consists of a list of JSON data, which specifies a set of vector data.
   * 
   * *   Data format of each line: `{String Id; Map<String, Object> Metadata; List<Double> Vector}`. Example: `{"Id":"myid", "Metadata": {"my_meta_key": "my_meta_value"}, "Vector": [1.234, -0.123]}`.
   * 
   * *   We recommend that you use SDKs to call this operation. SDKs encapsulate the UpsertCollectionDataAsyncAdvance method to upload on-premises files as data sources.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xx/vectors.jsonl
   */
  fileUrlObject?: Readable;
  /**
   * @remarks
   * The name of the namespace. Default value: public.
   * 
   * >  You can call the CreateNamespace operation to create a namespace and call the ListNamespaces operation to query a list of namespaces.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
   * 
   * >  The value of this parameter is specified when you call the CreateNamespace operation.
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
   * The ID of the Workspace composed of multiple database instances. This parameter and the DBInstanceId parameter cannot both be empty. When both are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileUrlObject: 'FileUrl',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      fileUrlObject: 'Readable',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

