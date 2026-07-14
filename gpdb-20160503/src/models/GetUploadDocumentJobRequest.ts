// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadDocumentJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the document collection.
   * 
   * > A document collection is created by calling the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to view existing document collections.
   * 
   * This parameter is required.
   * 
   * @example
   * document
   */
  collection?: string;
  /**
   * @remarks
   * The ID of the instance that has the vector engine optimization feature enabled.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the details of all AnalyticDB for PostgreSQL instances in a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The ID of the document upload task, which is obtained from the UploadDocumentAsync operation.
   * 
   * This parameter is required.
   * 
   * @example
   * bf8f7bc4-9276-44f7-9c22-1d06edc8dfd1
   */
  jobId?: string;
  /**
   * @remarks
   * The namespace, which is used for tenant isolation. Default value: public.
   * 
   * > You can create a namespace by calling [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) and view the list of namespaces by calling [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html).
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
   * 
   * > This value is specified by the CreateNamespace operation.
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
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      jobId: 'JobId',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

