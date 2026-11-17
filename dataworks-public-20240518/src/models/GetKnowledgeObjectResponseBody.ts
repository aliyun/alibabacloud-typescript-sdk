// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeObjectResponseBodyDataContentDocument extends $dara.Model {
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
   * Updated full text
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

export class GetKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields extends $dara.Model {
  /**
   * @remarks
   * The data type of the field. This field is required for publicly accessible model fields and is not inferred by the server.
   * 
   * @example
   * BIGINT
   */
  dataType?: string;
  /**
   * @remarks
   * The business description of the field. This field is optional.
   * 
   * @example
   * Actual payment amount
   */
  description?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * customer_id
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

export class GetKnowledgeObjectResponseBodyDataContentSemanticModelDatasets extends $dara.Model {
  /**
   * @remarks
   * The business description of the dataset. This field is optional.
   * 
   * @example
   * Actual payment amount
   */
  description?: string;
  /**
   * @remarks
   * The DataWorks Data Map table entity ID. This field is returned when a reliable association exists. If the ID is omitted for an existing dataset of the same name, the existing ID is retained. Submitted values are processed according to the semantic layer rules for saving data.
   * 
   * @example
   * maxcompute-table:::project_name:schema_name:table_name
   */
  entityId?: string;
  /**
   * @remarks
   * The defined and publicly accessible fields of the dataset. An empty array is returned if no field definitions are provided.
   */
  fields?: GetKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields[];
  /**
   * @remarks
   * The name of the dataset within the model. This name is used to locate relationships within the model.
   * 
   * @example
   * orders
   */
  name?: string;
  /**
   * @remarks
   * The explicitly declared primary key field names. This field is optional. Each field must exist in the Fields array of the dataset.
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
      fields: { 'type': 'array', 'itemType': GetKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields },
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

export class GetKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects extends $dara.Model {
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

export class GetKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression extends $dara.Model {
  /**
   * @remarks
   * The expressions of the metric in different SQL dialects. At least one item is required. Duplicate dialects are not allowed.
   */
  dialects?: GetKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects[];
  static names(): { [key: string]: string } {
    return {
      dialects: 'Dialects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialects: { 'type': 'array', 'itemType': GetKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects },
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

export class GetKnowledgeObjectResponseBodyDataContentSemanticModelMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the dataset to which the metric belongs. This name must match a dataset in the Datasets array of the model.
   * 
   * @example
   * orders
   */
  datasetName?: string;
  /**
   * @remarks
   * The definition of the metric. This field is optional.
   * 
   * @example
   * Sales order analysis model
   */
  description?: string;
  /**
   * @remarks
   * The executable expression. This field must contain at least one dialect version and is not auto-generated by the model.
   */
  expression?: GetKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * Sales amount
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
      expression: GetKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression,
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

export class GetKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys extends $dara.Model {
  /**
   * @remarks
   * The field name in FromDataset.Fields.
   * 
   * @example
   * customer_id
   */
  fromField?: string;
  /**
   * @remarks
   * The field name in ToDataset.Fields.
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

export class GetKnowledgeObjectResponseBodyDataContentSemanticModelRelationships extends $dara.Model {
  /**
   * @remarks
   * The name of the source dataset.
   * 
   * @example
   * orders
   */
  fromDataset?: string;
  /**
   * @remarks
   * The equi-join key pairs for the fields at both ends. At least one pair is required. Composite joins are listed as individual pairs.
   */
  joinKeys?: GetKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys[];
  /**
   * @remarks
   * The name of the relationship within the model.
   * 
   * @example
   * orders_to_customers
   */
  name?: string;
  /**
   * @remarks
   * The name of the target dataset.
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
      joinKeys: { 'type': 'array', 'itemType': GetKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys },
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

export class GetKnowledgeObjectResponseBodyDataContentSemanticModel extends $dara.Model {
  /**
   * @remarks
   * The logical datasets included in the model. An empty array is returned if no public datasets are available.
   */
  datasets?: GetKnowledgeObjectResponseBodyDataContentSemanticModelDatasets[];
  /**
   * @remarks
   * The executable metrics in the model. An empty array is returned if no metrics are available. Metrics with only candidate formulas are not included.
   */
  metrics?: GetKnowledgeObjectResponseBodyDataContentSemanticModelMetrics[];
  /**
   * @remarks
   * The defined relationships expressed by field pairs in the model. An empty array is returned if no relationships are defined. Relationships are not inferred from graph paths.
   */
  relationships?: GetKnowledgeObjectResponseBodyDataContentSemanticModelRelationships[];
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      metrics: 'Metrics',
      relationships: 'Relationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': GetKnowledgeObjectResponseBodyDataContentSemanticModelDatasets },
      metrics: { 'type': 'array', 'itemType': GetKnowledgeObjectResponseBodyDataContentSemanticModelMetrics },
      relationships: { 'type': 'array', 'itemType': GetKnowledgeObjectResponseBodyDataContentSemanticModelRelationships },
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

export class GetKnowledgeObjectResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The document content. This field is present only when the type is DOCUMENT.
   */
  document?: GetKnowledgeObjectResponseBodyDataContentDocument;
  /**
   * @remarks
   * The semantic model content. This field is present only when the type is SEMANTIC_MODEL.
   */
  semanticModel?: GetKnowledgeObjectResponseBodyDataContentSemanticModel;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      semanticModel: 'SemanticModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: GetKnowledgeObjectResponseBodyDataContentDocument,
      semanticModel: GetKnowledgeObjectResponseBodyDataContentSemanticModel,
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

export class GetKnowledgeObjectResponseBodyDataDownloadFiles extends $dara.Model {
  /**
   * @remarks
   * The temporary HTTPS download URL of the shard. The validity period is specified by the ExpiresIn field.
   * 
   * @example
   * https://example.invalid/current-model-yaml
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file name of the specification YAML shard. Multiple shards form the complete model and do not represent the object identity.
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

export class GetKnowledgeObjectResponseBodyDataSourceReferences extends $dara.Model {
  /**
   * @remarks
   * The source ID registered in the knowledge base. This field is present only when the type is KNOWLEDGE_SOURCE.
   * 
   * @example
   * src-001
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the source reference. The structure reserves KNOWLEDGE_SOURCE. Currently, the SourceReferences array is empty.
   * 
   * @example
   * SEMANTIC_MODEL
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

export class GetKnowledgeObjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current valid typed knowledge content. The structure returned is a document or semantic model based on the object type.
   */
  content?: GetKnowledgeObjectResponseBodyDataContent;
  /**
   * @remarks
   * The time when the object was first created. This field is not returned for existing objects whose creation time cannot be reliably determined.
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
   * Sales order analysis model
   */
  description?: string;
  /**
   * @remarks
   * The complete shards returned for multi-file specification snapshots. Each item contains a FileName and a DownloadUrl. For single-file snapshots, use the DownloadUrl field.
   */
  downloadFiles?: GetKnowledgeObjectResponseBodyDataDownloadFiles[];
  /**
   * @remarks
   * The temporary download URL of the uploaded original file for documents. For semantic models, this is the temporary download URL of the complete specification YAML for the current version.
   * 
   * @example
   * https://example.invalid/current-model-yaml
   */
  downloadUrl?: string;
  /**
   * @remarks
   * Indicates whether the current caller has full content editing permissions. The value is true for OWNER and ADMIN and false for VIEWER. Authorization is checked again for write operations.
   */
  editable?: boolean;
  /**
   * @remarks
   * The validity period of the download URL, in seconds. The value is fixed at 300.
   * 
   * @example
   * 300
   */
  expiresIn?: number;
  /**
   * @remarks
   * The original file name of the uploaded document. This field is read-only. Renaming the object does not change this value. This field is not returned for external documents and semantic models.
   * 
   * @example
   * policy.md
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the knowledge base.
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
   * The time when the object was last modified, in milliseconds. This value is used for conditional updates of the document body. This field does not indicate that the semantic model supports optimistic locking.
   * 
   * @example
   * 1790200800000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user-facing name of the object. This field is editable. Renaming the object does not change the knowledge object ID.
   * 
   * @example
   * Sales subject model
   */
  name?: string;
  /**
   * @remarks
   * The size of the uploaded original file in bytes. This field is read-only and does not reflect the length of the edited text.
   * 
   * @example
   * 1024
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The array of source references. An empty array is currently returned.
   */
  sourceReferences?: GetKnowledgeObjectResponseBodyDataSourceReferences[];
  /**
   * @remarks
   * The object type. Current valid values are SEMANTIC_MODEL and DOCUMENT. This field may be extended in the future.
   * 
   * @example
   * SEMANTIC_MODEL
   */
  type?: string;
  /**
   * @remarks
   * The version of the semantic model read in this request. This version is used to specify the target version for subsequent saves and is not an optimistic lock.
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
      content: GetKnowledgeObjectResponseBodyDataContent,
      createTime: 'number',
      description: 'string',
      downloadFiles: { 'type': 'array', 'itemType': GetKnowledgeObjectResponseBodyDataDownloadFiles },
      downloadUrl: 'string',
      editable: 'boolean',
      expiresIn: 'number',
      fileName: 'string',
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
      modifyTime: 'number',
      name: 'string',
      sizeBytes: 'number',
      sourceReferences: { 'type': 'array', 'itemType': GetKnowledgeObjectResponseBodyDataSourceReferences },
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

export class GetKnowledgeObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. You can use this code to determine the error type when a request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: GetKnowledgeObjectResponseBodyData;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * The request parameters are invalid
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use this ID to troubleshoot issues.
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetKnowledgeObjectResponseBodyData,
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

