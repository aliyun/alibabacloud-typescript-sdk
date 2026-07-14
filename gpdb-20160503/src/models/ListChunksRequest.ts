// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChunksRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the document collection.
   * 
   * > The document collection is created by calling the [CreateDocumentCollection](https://help.aliyun.com/document_detail/2618448.html) operation. You can call the [ListDocumentCollections](https://help.aliyun.com/document_detail/2618452.html) operation to query existing document collections.
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
   * The file name.
   * 
   * > The name of a previously uploaded file. You can call the [ListDocuments](https://help.aliyun.com/document_detail/2618453.html) operation to query the file list.
   * 
   * @example
   * mydoc.txt
   */
  fileName?: string;
  /**
   * @remarks
   * The filter condition for the data to query, in SQL WHERE clause format. The filter is an expression that returns a Boolean value (true or false). Conditions can be simple comparison operators such as equal to (=), not equal to (<> or !=), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=). You can also use logical operators (AND, OR, NOT) to combine more complex expressions, as well as conditions with the IN, BETWEEN, and LIKE keywords.
   * 
   * > 
   * > - For detailed syntax, refer to: https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-where/
   * 
   * @example
   * title = \\"test\\" AND name like \\"test%\\"
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return vectors. Default value: false.
   * > - **false**: Does not return vectors.
   * > - **true**: Returns vectors.
   * 
   * @example
   * true
   */
  includeVector?: boolean;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can create a namespace by calling the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation and query the list of namespaces by calling the [ListNamespaces](https://help.aliyun.com/document_detail/2401502.html) operation.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password of the namespace.
   * > This value is specified by the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  namespacePassword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Valid values:
   * 
   * - **20**
   * - **50**
   * - **100**
   * 
   * Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
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
      filter: 'Filter',
      includeVector: 'IncludeVector',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      fileName: 'string',
      filter: 'string',
      includeVector: 'boolean',
      namespace: 'string',
      namespacePassword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

