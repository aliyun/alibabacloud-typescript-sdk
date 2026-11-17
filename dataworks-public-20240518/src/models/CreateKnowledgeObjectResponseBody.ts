// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeObjectResponseBodyDataContentDocument extends $dara.Model {
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

export class CreateKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields extends $dara.Model {
  /**
   * @remarks
   * The data type of the field. This must be provided for publicly available model fields and is not guessed by the server.
   * 
   * @example
   * BIGINT
   */
  dataType?: string;
  /**
   * @remarks
   * The description. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Sales metrics and policy document
   */
  description?: string;
  /**
   * @remarks
   * The user-facing name. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Business description
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

export class CreateKnowledgeObjectResponseBodyDataContentSemanticModelDatasets extends $dara.Model {
  /**
   * @remarks
   * The description. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Sales metrics and policy document
   */
  description?: string;
  /**
   * @remarks
   * The metadata entity ID returned by Data Map. The client passes this ID as-is without concatenating it.
   * 
   * @example
   * maxcompute-table:::project_name:schema_name:table_name
   */
  entityId?: string;
  /**
   * @remarks
   * The defined and publicly available fields of the dataset. If no field definitions are provided, this is an empty array.
   */
  fields?: CreateKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields[];
  /**
   * @remarks
   * The user-facing name. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Business description
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
      fields: { 'type': 'array', 'itemType': CreateKnowledgeObjectResponseBodyDataContentSemanticModelDatasetsFields },
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

export class CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects extends $dara.Model {
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
   * The non-empty calculation expression in the specified dialect. It is not a complete query statement.
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

export class CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression extends $dara.Model {
  /**
   * @remarks
   * The expressions of the same metric in different SQL dialects. At least one item is required. The same dialect is not repeated.
   */
  dialects?: CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects[];
  static names(): { [key: string]: string } {
    return {
      dialects: 'Dialects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialects: { 'type': 'array', 'itemType': CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpressionDialects },
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

export class CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetrics extends $dara.Model {
  /**
   * @remarks
   * The SemanticDataset.Name to which the metric belongs. It must be locatable in the Datasets of this model.
   * 
   * @example
   * orders
   */
  datasetName?: string;
  /**
   * @remarks
   * The description. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Sales metrics and policy document
   */
  description?: string;
  /**
   * @remarks
   * The executable expression. It must include at least one dialect version and is not auto-completed by the model.
   */
  expression?: CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression;
  /**
   * @remarks
   * The user-facing name. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Business description
   */
  name?: string;
  /**
   * @remarks
   * The explicitly declared unit of the metric. This parameter is optional. It is not returned when no reliable source is available.
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
      expression: CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetricsExpression,
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

export class CreateKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys extends $dara.Model {
  /**
   * @remarks
   * The name of the field in the starting dataset that participates in the relationship. It must be defined in the Fields of the dataset corresponding to FromDataset.
   * 
   * @example
   * customer_id
   */
  fromField?: string;
  /**
   * @remarks
   * The name of the field in the ending dataset that participates in the relationship. It must be defined in the Fields of the dataset corresponding to ToDataset.
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

export class CreateKnowledgeObjectResponseBodyDataContentSemanticModelRelationships extends $dara.Model {
  /**
   * @remarks
   * The SemanticDataset.Name of the starting point.
   * 
   * @example
   * orders
   */
  fromDataset?: string;
  /**
   * @remarks
   * The equi-join pairs of fields at both ends of the relationship. For composite relationships, fields are paired item by item.
   */
  joinKeys?: CreateKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys[];
  /**
   * @remarks
   * The user-facing name. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Business description
   */
  name?: string;
  /**
   * @remarks
   * The SemanticDataset.Name of the ending point.
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
      joinKeys: { 'type': 'array', 'itemType': CreateKnowledgeObjectResponseBodyDataContentSemanticModelRelationshipsJoinKeys },
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

export class CreateKnowledgeObjectResponseBodyDataContentSemanticModel extends $dara.Model {
  /**
   * @remarks
   * The logical datasets included in the model. An empty array is returned if no public datasets are available.
   */
  datasets?: CreateKnowledgeObjectResponseBodyDataContentSemanticModelDatasets[];
  /**
   * @remarks
   * The executable metrics in the model. If no metrics exist, this is an empty array. Metrics with only candidate formulas are not included.
   */
  metrics?: CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetrics[];
  /**
   * @remarks
   * The defined relationships in the model expressed by field pairs. If no relationships exist, this is an empty array. Relationships are not guessed from graph paths.
   */
  relationships?: CreateKnowledgeObjectResponseBodyDataContentSemanticModelRelationships[];
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      metrics: 'Metrics',
      relationships: 'Relationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': CreateKnowledgeObjectResponseBodyDataContentSemanticModelDatasets },
      metrics: { 'type': 'array', 'itemType': CreateKnowledgeObjectResponseBodyDataContentSemanticModelMetrics },
      relationships: { 'type': 'array', 'itemType': CreateKnowledgeObjectResponseBodyDataContentSemanticModelRelationships },
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

export class CreateKnowledgeObjectResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * This operation returns only the document content.
   */
  document?: CreateKnowledgeObjectResponseBodyDataContentDocument;
  /**
   * @remarks
   * The semantic model. This field exists only when Type is set to SEMANTIC_MODEL.
   */
  semanticModel?: CreateKnowledgeObjectResponseBodyDataContentSemanticModel;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      semanticModel: 'SemanticModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: CreateKnowledgeObjectResponseBodyDataContentDocument,
      semanticModel: CreateKnowledgeObjectResponseBodyDataContentSemanticModel,
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

export class CreateKnowledgeObjectResponseBodyDataDownloadFiles extends $dara.Model {
  /**
   * @remarks
   * The temporary download URL for the specification YAML file. The validity period is specified by ExpiresIn.
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
   * Business_Description.pdf
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

export class CreateKnowledgeObjectResponseBodyDataSourceReferences extends $dara.Model {
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

export class CreateKnowledgeObjectResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current valid typed knowledge content. Returns the document or semantic model structure based on the Type.
   */
  content?: CreateKnowledgeObjectResponseBodyDataContent;
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
   * The description. This field is editable. Pass an empty string to clear the description.
   * 
   * @example
   * Sales metrics and policy document
   */
  description?: string;
  /**
   * @remarks
   * The download items for multi-file specification YAMLs, including file names and temporary download URLs.
   */
  downloadFiles?: CreateKnowledgeObjectResponseBodyDataDownloadFiles[];
  /**
   * @remarks
   * The temporary download URL for the original uploaded file of the DOCUMENT or the current specification YAML of the SEMANTIC_MODEL returned by GetKnowledgeObject. This is not a persistent property.
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
   * The validity period of the download URL, in seconds. This field is returned together with DownloadUrl.
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
   * Business_Description.pdf
   */
  fileName?: string;
  /**
   * @remarks
   * The ID of the knowledge base to which the object belongs.
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
   * obj-document-001
   */
  knowledgeObjectId?: string;
  /**
   * @remarks
   * The time when the object was last modified, in milliseconds. This value is used for conditional updates of the DOCUMENT body. This field does not indicate that optimistic locking updates are supported for semantic models.
   * 
   * @example
   * 1790200800000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The user-facing name. This field is editable. Renaming the object does not change the KnowledgeObjectId.
   * 
   * @example
   * Business description
   */
  name?: string;
  /**
   * @remarks
   * The size of the uploaded original file in bytes. This field is read-only and does not represent the length of the edited body.
   * 
   * @example
   * 10240
   */
  sizeBytes?: number;
  /**
   * @remarks
   * The array of source references. Currently, an empty array is returned.
   */
  sourceReferences?: CreateKnowledgeObjectResponseBodyDataSourceReferences[];
  /**
   * @remarks
   * The object type. The value is fixed to DOCUMENT.
   * 
   * @example
   * DOCUMENT
   */
  type?: string;
  /**
   * @remarks
   * The current version of the SEMANTIC_MODEL being read. Pass this value when updating the content to edit the version in place.
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
      content: CreateKnowledgeObjectResponseBodyDataContent,
      createTime: 'number',
      description: 'string',
      downloadFiles: { 'type': 'array', 'itemType': CreateKnowledgeObjectResponseBodyDataDownloadFiles },
      downloadUrl: 'string',
      editable: 'boolean',
      expiresIn: 'number',
      fileName: 'string',
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
      modifyTime: 'number',
      name: 'string',
      sizeBytes: 'number',
      sourceReferences: { 'type': 'array', 'itemType': CreateKnowledgeObjectResponseBodyDataSourceReferences },
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

export class CreateKnowledgeObjectResponseBody extends $dara.Model {
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
  data?: CreateKnowledgeObjectResponseBodyData;
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
      data: CreateKnowledgeObjectResponseBodyData,
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

