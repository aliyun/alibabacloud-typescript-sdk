// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeObjectResponseBodyDataContentDocument extends $dara.Model {
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

export class UpdateKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields extends $dara.Model {
  /**
   * @remarks
   * The data type of the field. This parameter is required for publicly available model fields and is not inferred by the server.
   * 
   * @example
   * DECIMAL
   */
  dataType?: string;
  /**
   * @remarks
   * The business description of the field. This parameter is optional.
   * 
   * @example
   * Actual paid amount
   */
  description?: string;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * pay_amount
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

export class UpdateKnowledgeObjectResponseBodyDataContentSemanticModelDatasets extends $dara.Model {
  /**
   * @remarks
   * The business description of the dataset. This parameter is optional.
   * 
   * @example
   * Actual paid amount
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
   * The defined and publicly available fields of the dataset. This is an empty array if no field definitions are provided.
   */
  fields?: UpdateKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields[];
  /**
   * @remarks
   * The name of the dataset within the model, used for relationship positioning within the model.
   * 
   * @example
   * orders
   */
  name?: string;
  /**
   * @remarks
   * The explicitly declared primary key field name. This parameter is optional. Each item must exist in the Fields of this dataset.
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
      fields: { 'type': 'array', 'itemType': UpdateKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields },
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

export class UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects extends $dara.Model {
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
   * SUM(pay_amount - refund_amount)
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

export class UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression extends $dara.Model {
  /**
   * @remarks
   * The expressions for the same metric in different SQL dialects. At least one item is required. Dialects cannot be duplicated.
   */
  dialects?: UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects[];
  static names(): { [key: string]: string } {
    return {
      dialects: 'Dialects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialects: { 'type': 'array', 'itemType': UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects },
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

export class UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the associated SemanticDataset. This must be locatable within the Datasets of this model.
   * 
   * @example
   * orders
   */
  datasetName?: string;
  /**
   * @remarks
   * The description of the metric calculation logic. This parameter is optional.
   * 
   * @example
   * Actual paid amount minus refund amount
   */
  description?: string;
  /**
   * @remarks
   * The executable expression. This must include at least one dialect version and is not auto-generated by the model.
   */
  expression?: UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * Net sales
   */
  name?: string;
  /**
   * @remarks
   * The explicitly declared unit of the metric. This parameter is optional and is not returned if no reliable source is available.
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
      expression: UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression,
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

export class UpdateKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys extends $dara.Model {
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

export class UpdateKnowledgeObjectResponseBodyDataContentSemanticModelRelationships extends $dara.Model {
  /**
   * @remarks
   * The name of the source SemanticDataset.
   * 
   * @example
   * orders
   */
  fromDataset?: string;
  /**
   * @remarks
   * The equi-join key pairs for the fields at both ends. At least one item is required. Composite joins are listed item by item.
   */
  joinKeys?: UpdateKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys[];
  /**
   * @remarks
   * The name of the relationship within the model.
   * 
   * @example
   * orders
   */
  name?: string;
  /**
   * @remarks
   * The name of the target SemanticDataset.
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
      joinKeys: { 'type': 'array', 'itemType': UpdateKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys },
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

export class UpdateKnowledgeObjectResponseBodyDataContentSemanticModel extends $dara.Model {
  /**
   * @remarks
   * The logical datasets included in the model. An empty array is returned if no public datasets are available.
   */
  datasets?: UpdateKnowledgeObjectResponseBodyDataContentSemanticModelDatasets[];
  /**
   * @remarks
   * The executable metrics in the model. This is an empty array if no metrics are available. Metrics with only candidate formulas are not included.
   */
  metrics?: UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetrics[];
  /**
   * @remarks
   * The defined relationships in the model expressed by field pairs. This is an empty array if no relationships are available. Relationships are not inferred from graph paths.
   */
  relationships?: UpdateKnowledgeObjectResponseBodyDataContentSemanticModelRelationships[];
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      metrics: 'Metrics',
      relationships: 'Relationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': UpdateKnowledgeObjectResponseBodyDataContentSemanticModelDatasets },
      metrics: { 'type': 'array', 'itemType': UpdateKnowledgeObjectResponseBodyDataContentSemanticModelMetrics },
      relationships: { 'type': 'array', 'itemType': UpdateKnowledgeObjectResponseBodyDataContentSemanticModelRelationships },
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

export class UpdateKnowledgeObjectResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The document content. This property exists only when Type is set to DOCUMENT.
   */
  document?: UpdateKnowledgeObjectResponseBodyDataContentDocument;
  /**
   * @remarks
   * The semantic model content. This property exists only when Type is set to SEMANTIC_MODEL.
   */
  semanticModel?: UpdateKnowledgeObjectResponseBodyDataContentSemanticModel;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      semanticModel: 'SemanticModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: UpdateKnowledgeObjectResponseBodyDataContentDocument,
      semanticModel: UpdateKnowledgeObjectResponseBodyDataContentSemanticModel,
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

export class UpdateKnowledgeObjectResponseBodyDataDownloadFiles extends $dara.Model {
  /**
   * @remarks
   * The temporary download URL for the single-file YAML specification. This field is optional.
   * 
   * @example
   * https://example.invalid/short-lived-result-download
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The original file name of the uploaded document. This field is read-only. Renaming the object does not change this value. This field is not returned for external documents and semantic models.
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

export class UpdateKnowledgeObjectResponseBodyDataSourceReferences extends $dara.Model {
  /**
   * @remarks
   * The source ID of the registered KnowledgeSource in the current knowledge base. This field exists only when the type is KNOWLEDGE_SOURCE.
   * 
   * @example
   * src-001
   */
  sourceId?: string;
  /**
   * @remarks
   * The category of the source reference. The structure retains KNOWLEDGE_SOURCE. The SourceReferences array is currently empty.
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

export class UpdateKnowledgeObjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current valid typed knowledge content. The document or semantic model structure is returned based on the type.
   */
  content?: UpdateKnowledgeObjectResponseBodyDataContent;
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
   * The description of the knowledge object. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Actual paid amount
   */
  description?: string;
  /**
   * @remarks
   * The complete specification shards for multi-file models. Each item includes FileName and DownloadUrl. This field is optional.
   */
  downloadFiles?: UpdateKnowledgeObjectResponseBodyDataDownloadFiles[];
  /**
   * @remarks
   * The temporary download URL for the single-file YAML specification. This field is optional.
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
   * The validity period of the download URL, in seconds. This field is optional.
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
   * The ID of the associated knowledge base.
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
   * obj-model-001
   */
  knowledgeObjectId?: string;
  /**
   * @remarks
   * The time when the object was last modified, in milliseconds. This value is used for conditional updates of DOCUMENT content. This field does not indicate that optimistic locking updates are supported for semantic models.
   * 
   * @example
   * 1791789000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user-facing name of the knowledge object. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * orders
   */
  name?: string;
  /**
   * @remarks
   * The size of the original uploaded file in bytes. This field is read-only and does not represent the length of the edited content.
   * 
   * @example
   * 1024
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The array of source references. An empty array is currently returned.
   */
  sourceReferences?: UpdateKnowledgeObjectResponseBodyDataSourceReferences[];
  /**
   * @remarks
   * The knowledge object type. The current values are SEMANTIC_MODEL and DOCUMENT. More types may be added in the future.
   * 
   * @example
   * SEMANTIC_MODEL
   */
  type?: string;
  /**
   * @remarks
   * The version of the model that is saved and read in the current operation.
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
      content: UpdateKnowledgeObjectResponseBodyDataContent,
      createTime: 'number',
      description: 'string',
      downloadFiles: { 'type': 'array', 'itemType': UpdateKnowledgeObjectResponseBodyDataDownloadFiles },
      downloadUrl: 'string',
      editable: 'boolean',
      expiresIn: 'number',
      fileName: 'string',
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
      modifyTime: 'number',
      name: 'string',
      sizeBytes: 'number',
      sourceReferences: { 'type': 'array', 'itemType': UpdateKnowledgeObjectResponseBodyDataSourceReferences },
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

export class UpdateKnowledgeObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. You can use this code to determine the error type when the request fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
   */
  data?: UpdateKnowledgeObjectResponseBodyData;
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
      data: UpdateKnowledgeObjectResponseBodyData,
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

