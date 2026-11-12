// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCreateIndexJobRequest extends $dara.Model {
  /**
   * @remarks
   * The collection name.
   * 
   * > You can call the [ListCollections](https://help.aliyun.com/document_detail/2401503.html) operation to view the collection list.
   * 
   * This parameter is required.
   * 
   * @example
   * testcollection
   */
  collection?: string;
  /**
   * @remarks
   * The instance ID.
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the specified region, including instance IDs.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the index creation task, which is returned by the CreateIndex operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 231460f8-75dc-405e-a669-0c5204887e91
   */
  jobId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * > You can call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation to create a namespace, or call the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation to view the namespace list.
   * 
   * This parameter is required.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * 
   * > This value is specified when you call the CreateNamespace operation.
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
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the workspace that consists of multiple database instances. This parameter and the DBInstanceId parameter cannot be both empty. If both parameters are specified, this parameter takes precedence.
   * 
   * @example
   * gp-ws-*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      jobId: 'JobId',
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
      jobId: 'string',
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

