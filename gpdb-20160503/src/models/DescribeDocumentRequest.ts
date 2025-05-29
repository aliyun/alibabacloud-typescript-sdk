// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocumentRequest extends $dara.Model {
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
   * Document name.
   * 
   * > You can view the list of documents using the [ListDocuments](https://help.aliyun.com/document_detail/2618453.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * music.txt
   */
  fileName?: string;
  /**
   * @remarks
   * Namespace, default is public.
   * 
   * > You can create it via the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) API and view the list through the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) API.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * Password for the namespace.
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
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      fileName: 'FileName',
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
      fileName: 'string',
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

