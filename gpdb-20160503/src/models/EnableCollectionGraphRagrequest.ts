// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCollectionGraphRAGRequest extends $dara.Model {
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
   * The list of entity types.
   * 
   * > This parameter is required when knowledge graph construction is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Location
   */
  entityTypes?: string[];
  /**
   * @remarks
   * The name of the large language model (LLM).
   * 
   * > Valid values:
   * > - knowledge-extract-standard: Default value.
   * > - knowledge-extract-mini
   * 
   * > This parameter takes effect only when knowledge graph construction is enabled.
   * 
   * @example
   * knowledge-extract-standard
   */
  LLMModel?: string;
  /**
   * @remarks
   * The language used to construct the knowledge graph. Valid values:
   * - Simplified Chinese: Simplified Chinese. Default value.
   * - English: English.
   * 
   * > This parameter takes effect only when knowledge graph construction is enabled.
   * 
   * @example
   * Simplified Chinese
   */
  language?: string;
  /**
   * @remarks
   * The name of the administrator account that has the rds_superuser permission.
   * 
   * > You can call the [CreateAccount](https://help.aliyun.com/document_detail/2361789.html) operation to create an account.
   * 
   * This parameter is required.
   * 
   * @example
   * testaccount
   */
  managerAccount?: string;
  /**
   * @remarks
   * The password of the administrator account.
   * 
   * This parameter is required.
   * 
   * @example
   * testpassword
   */
  managerAccountPassword?: string;
  /**
   * @remarks
   * The namespace. Default value: public.
   * 
   * > You can call the CreateNamespace operation to create a namespace and call the ListNamespaces operation to view the namespace list.
   * 
   * @example
   * mynamespace
   */
  namespace?: string;
  /**
   * @remarks
   * The password for the namespace.
   * 
   * > This value is specified when you call the [CreateNamespace](https://help.aliyun.com/document_detail/2401495.html) operation.
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
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of relationship edge types.
   * 
   * > This parameter is required when knowledge graph construction is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * Occurred
   */
  relationshipTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      DBInstanceId: 'DBInstanceId',
      entityTypes: 'EntityTypes',
      LLMModel: 'LLMModel',
      language: 'Language',
      managerAccount: 'ManagerAccount',
      managerAccountPassword: 'ManagerAccountPassword',
      namespace: 'Namespace',
      namespacePassword: 'NamespacePassword',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      relationshipTypes: 'RelationshipTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      DBInstanceId: 'string',
      entityTypes: { 'type': 'array', 'itemType': 'string' },
      LLMModel: 'string',
      language: 'string',
      managerAccount: 'string',
      managerAccountPassword: 'string',
      namespace: 'string',
      namespacePassword: 'string',
      ownerId: 'number',
      regionId: 'string',
      relationshipTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.entityTypes)) {
      $dara.Model.validateArray(this.entityTypes);
    }
    if(Array.isArray(this.relationshipTypes)) {
      $dara.Model.validateArray(this.relationshipTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

