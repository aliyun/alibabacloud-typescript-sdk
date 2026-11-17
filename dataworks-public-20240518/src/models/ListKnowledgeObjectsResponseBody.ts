// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeObjectsResponseBodyDataObjectsContentDocument extends $dara.Model {
  /**
   * @remarks
   * The content format. This field is required when Text is provided. Initially, the supported values are MARKDOWN and TEXT.
   * 
   * @example
   * MARKDOWN
   */
  contentFormat?: string;
  /**
   * @remarks
   * The current document body that can be provided to the caller. This field is optional. It is omitted if parsing is incomplete, access is not authorized, or the full document cannot be provided securely. A single retrieved snippet does not stand in for the entire document.
   * 
   * @example
   * Updated full body text
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      contentFormat: 'ContentFormat',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentFormat: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelDatasetsFields extends $dara.Model {
  /**
   * @remarks
   * The data type of the field. This field must be provided for publicly accessible model fields and is not inferred by the server.
   * 
   * @example
   * BIGINT
   */
  dataType?: string;
  /**
   * @remarks
   * The brief description of the object. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The user-facing name of the object. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Sales policy
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelDatasets extends $dara.Model {
  /**
   * @remarks
   * The brief description of the object. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The metadata entity ID returned by Data Map. Clients must pass this value as is and must not concatenate it.
   * 
   * @example
   * maxcompute-table:::project_name:schema_name:table_name
   */
  entityId?: string;
  /**
   * @remarks
   * The defined and publicly accessible fields of the dataset. An empty array is returned if no field definitions are provided.
   */
  fields?: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelDatasetsFields[];
  /**
   * @remarks
   * The user-facing name of the object. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Sales policy
   */
  name?: string;
  /**
   * @remarks
   * The explicitly declared primary key field name. This field is optional. Each item must exist in the Fields of the current dataset.
   */
  primaryKey?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      entityId: 'EntityId',
      fields: 'Fields',
      name: 'Name',
      primaryKey: 'PrimaryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      entityId: 'string',
      fields: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelDatasetsFields },
      name: 'string',
      primaryKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.primaryKey)) {
      $dara.Model.validateArray(this.primaryKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetricsExpressionDialects extends $dara.Model {
  /**
   * @remarks
   * The SQL dialect, such as MaxCompute or ANSI_SQL.
   * 
   * @example
   * MaxCompute
   */
  dialect?: string;
  /**
   * @remarks
   * The non-empty calculation expression in the specified dialect. This is not a complete query statement.
   * 
   * @example
   * SUM(pay_amount)
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      dialect: 'Dialect',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialect: 'string',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetricsExpression extends $dara.Model {
  /**
   * @remarks
   * The expressions of the same metric in different SQL dialects. At least one item is required. Dialects are not duplicated.
   */
  dialects?: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetricsExpressionDialects[];
  static names(): { [key: string]: string } {
    return {
      dialects: 'Dialects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialects: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetricsExpressionDialects },
    };
  }

  validate() {
    if(Array.isArray(this.dialects)) {
      $dara.Model.validateArray(this.dialects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the semantic dataset to which the metric belongs. This value must be locatable in the Datasets of the current model.
   * 
   * @example
   * orders
   */
  datasetName?: string;
  /**
   * @remarks
   * The brief description of the object. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The executable expression. It must contain at least one dialect version and is not auto-generated by the model.
   */
  expression?: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetricsExpression;
  /**
   * @remarks
   * The user-facing name of the object. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Sales policy
   */
  name?: string;
  /**
   * @remarks
   * The explicitly declared unit of the metric. This field is optional and is not returned if no reliable source is available.
   * 
   * @example
   * CNY
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      description: 'Description',
      expression: 'Expression',
      name: 'Name',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      description: 'string',
      expression: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetricsExpression,
      name: 'string',
      unit: 'string',
    };
  }

  validate() {
    if(this.expression && typeof (this.expression as any).validate === 'function') {
      (this.expression as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelRelationshipsJoinKeys extends $dara.Model {
  /**
   * @remarks
   * The name of the field in the starting dataset that participates in the relationship. This field must be defined in the Fields of the dataset corresponding to FromDataset.
   * 
   * @example
   * customer_id
   */
  fromField?: string;
  /**
   * @remarks
   * The name of the field in the ending dataset that participates in the relationship. This field must be defined in the Fields of the dataset corresponding to ToDataset.
   * 
   * @example
   * id
   */
  toField?: string;
  static names(): { [key: string]: string } {
    return {
      fromField: 'FromField',
      toField: 'ToField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromField: 'string',
      toField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelRelationships extends $dara.Model {
  /**
   * @remarks
   * The name of the starting semantic dataset.
   * 
   * @example
   * orders
   */
  fromDataset?: string;
  /**
   * @remarks
   * The equi-join pairs of fields at both ends of the relationship. For composite relationships, fields are paired one by one.
   */
  joinKeys?: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelRelationshipsJoinKeys[];
  /**
   * @remarks
   * The user-facing name of the object. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Sales policy
   */
  name?: string;
  /**
   * @remarks
   * The name of the ending semantic dataset.
   * 
   * @example
   * customers
   */
  toDataset?: string;
  static names(): { [key: string]: string } {
    return {
      fromDataset: 'FromDataset',
      joinKeys: 'JoinKeys',
      name: 'Name',
      toDataset: 'ToDataset',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromDataset: 'string',
      joinKeys: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelRelationshipsJoinKeys },
      name: 'string',
      toDataset: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.joinKeys)) {
      $dara.Model.validateArray(this.joinKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModel extends $dara.Model {
  /**
   * @remarks
   * The logical datasets included in the model. An empty array is returned if no public datasets are available.
   */
  datasets?: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelDatasets[];
  /**
   * @remarks
   * The executable metrics in the model. An empty array is returned if no metrics are available. Metrics with only candidate formulas are not included.
   */
  metrics?: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetrics[];
  /**
   * @remarks
   * The defined relationships in the model expressed by field pairs. An empty array is returned if no relationships are available. Relationships are not inferred from graph paths.
   */
  relationships?: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelRelationships[];
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      metrics: 'Metrics',
      relationships: 'Relationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelDatasets },
      metrics: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelMetrics },
      relationships: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModelRelationships },
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(Array.isArray(this.relationships)) {
      $dara.Model.validateArray(this.relationships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsContent extends $dara.Model {
  /**
   * @remarks
   * The document content. This field exists only when Type is set to DOCUMENT.
   */
  document?: ListKnowledgeObjectsResponseBodyDataObjectsContentDocument;
  /**
   * @remarks
   * The semantic model content. This field exists only when Type is set to SEMANTIC_MODEL.
   */
  semanticModel?: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModel;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      semanticModel: 'SemanticModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: ListKnowledgeObjectsResponseBodyDataObjectsContentDocument,
      semanticModel: ListKnowledgeObjectsResponseBodyDataObjectsContentSemanticModel,
    };
  }

  validate() {
    if(this.document && typeof (this.document as any).validate === 'function') {
      (this.document as any).validate();
    }
    if(this.semanticModel && typeof (this.semanticModel as any).validate === 'function') {
      (this.semanticModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsDownloadFiles extends $dara.Model {
  /**
   * @remarks
   * The temporary download URL of the specification YAML file. The validity period is subject to ExpiresIn.
   * 
   * @example
   * https://example.invalid/short-lived-result-download
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The original file name of the uploaded document. This field is read-only. Renaming the Name field does not change this value. This field is not returned for external documents and semantic models.
   * 
   * @example
   * policy.md
   */
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'DownloadUrl',
      fileName: 'FileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      fileName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjectsSourceReferences extends $dara.Model {
  /**
   * @remarks
   * The source ID. This field exists only when the type is KNOWLEDGE_SOURCE. It represents the SourceId of the KnowledgeSource registered in the current knowledge base.
   * 
   * @example
   * src-001
   */
  sourceId?: string;
  /**
   * @remarks
   * The category of the source reference. The structure retains KNOWLEDGE_SOURCE. Currently, SourceReferences is an empty array.
   * 
   * @example
   * DOCUMENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'SourceId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyDataObjects extends $dara.Model {
  /**
   * @remarks
   * The typed content of the knowledge object. The semantic model content or document content is returned based on the Type.
   */
  content?: ListKnowledgeObjectsResponseBodyDataObjectsContent;
  /**
   * @remarks
   * The time when the object was first created.
   * 
   * @example
   * 1790200800000
   */
  createTime?: number;
  /**
   * @remarks
   * The brief description of the object. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Sales metrics and policy documents
   */
  description?: string;
  /**
   * @remarks
   * The download items for multi-file specification YAMLs, including file names and temporary download URLs.
   */
  downloadFiles?: ListKnowledgeObjectsResponseBodyDataObjectsDownloadFiles[];
  /**
   * @remarks
   * The temporary download URL of the specification YAML file. The validity period is subject to ExpiresIn.
   * 
   * @example
   * https://example.invalid/short-lived-result-download
   */
  downloadUrl?: string;
  /**
   * @remarks
   * Indicates whether the current caller has full content editing permissions. The value is true for OWNER and ADMIN and false for VIEWER. Authorization is checked again for write operations.
   */
  editable?: boolean;
  /**
   * @remarks
   * The validity period of the knowledge object download URL in seconds. The current value is 300 seconds.
   * 
   * @example
   * 300
   */
  expiresIn?: number;
  /**
   * @remarks
   * The original file name of the uploaded document. This field is read-only. Renaming the Name field does not change this value. This field is not returned for external documents and semantic models.
   * 
   * @example
   * policy.md
   */
  fileName?: string;
  /**
   * @remarks
   * The knowledge base to which the object belongs.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The ID of the knowledge object. For semantic models, use the model ID from the semantic layer. For documents, use the stable ID from the local document table. Callers must treat the ID as opaque and must not use a retrieval ID in its place.
   * 
   * @example
   * obj-001
   */
  knowledgeObjectId?: string;
  /**
   * @remarks
   * The time when the current content was last updated.
   * 
   * @example
   * 1790200800000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user-facing name of the object. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Sales policy
   */
  name?: string;
  /**
   * @remarks
   * The size of the uploaded original file in bytes. This field is read-only and does not represent the length of the edited body text.
   * 
   * @example
   * 1024
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The array of source references. Currently, an empty array is returned.
   */
  sourceReferences?: ListKnowledgeObjectsResponseBodyDataObjectsSourceReferences[];
  /**
   * @remarks
   * The knowledge object type. The current values are SEMANTIC_MODEL and DOCUMENT. More types may be added in the future.
   * 
   * @example
   * DOCUMENT
   */
  type?: string;
  /**
   * @remarks
   * The current version of the SEMANTIC_MODEL being read. Pass this value when updating content. The version can be edited in place.
   * 
   * @example
   * 1
   */
  versionNo?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      description: 'Description',
      downloadFiles: 'DownloadFiles',
      downloadUrl: 'DownloadUrl',
      editable: 'Editable',
      expiresIn: 'ExpiresIn',
      fileName: 'FileName',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeObjectId: 'KnowledgeObjectId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      sizeBytes: 'SizeBytes',
      sourceReferences: 'SourceReferences',
      type: 'Type',
      versionNo: 'VersionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListKnowledgeObjectsResponseBodyDataObjectsContent,
      createTime: 'number',
      description: 'string',
      downloadFiles: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjectsDownloadFiles },
      downloadUrl: 'string',
      editable: 'boolean',
      expiresIn: 'number',
      fileName: 'string',
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
      modifyTime: 'number',
      name: 'string',
      sizeBytes: 'number',
      sourceReferences: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjectsSourceReferences },
      type: 'string',
      versionNo: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    if(Array.isArray(this.downloadFiles)) {
      $dara.Model.validateArray(this.downloadFiles);
    }
    if(Array.isArray(this.sourceReferences)) {
      $dara.Model.validateArray(this.sourceReferences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cursor for the next page. The value is null if there is no next page.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @remarks
   * The knowledge objects that the caller has permission to read on the current page.
   */
  objects?: ListKnowledgeObjectsResponseBodyDataObjects[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      objects: 'Objects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      objects: { 'type': 'array', 'itemType': ListKnowledgeObjectsResponseBodyDataObjects },
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code, which is used to determine the error type when a request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: ListKnowledgeObjectsResponseBodyData;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The secure error message returned when a request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request, which can be used to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListKnowledgeObjectsResponseBodyData,
      maxResults: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

