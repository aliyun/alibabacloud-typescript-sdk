// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeObjectRequestContentDocument extends $dara.Model {
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

export class UpdateKnowledgeObjectRequestContentSemanticModelDatasetsFields extends $dara.Model {
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

export class UpdateKnowledgeObjectRequestContentSemanticModelDatasets extends $dara.Model {
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
  fields?: UpdateKnowledgeObjectRequestContentSemanticModelDatasetsFields[];
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
      fields: { 'type': 'array', 'itemType': UpdateKnowledgeObjectRequestContentSemanticModelDatasetsFields },
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

export class UpdateKnowledgeObjectRequestContentSemanticModelMetricsExpressionDialects extends $dara.Model {
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

export class UpdateKnowledgeObjectRequestContentSemanticModelMetricsExpression extends $dara.Model {
  /**
   * @remarks
   * The expressions for the same metric in different SQL dialects. At least one item is required. Dialects cannot be duplicated.
   */
  dialects?: UpdateKnowledgeObjectRequestContentSemanticModelMetricsExpressionDialects[];
  static names(): { [key: string]: string } {
    return {
      dialects: 'Dialects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialects: { 'type': 'array', 'itemType': UpdateKnowledgeObjectRequestContentSemanticModelMetricsExpressionDialects },
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

export class UpdateKnowledgeObjectRequestContentSemanticModelMetrics extends $dara.Model {
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
  expression?: UpdateKnowledgeObjectRequestContentSemanticModelMetricsExpression;
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
      expression: UpdateKnowledgeObjectRequestContentSemanticModelMetricsExpression,
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

export class UpdateKnowledgeObjectRequestContentSemanticModelRelationshipsJoinKeys extends $dara.Model {
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

export class UpdateKnowledgeObjectRequestContentSemanticModelRelationships extends $dara.Model {
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
  joinKeys?: UpdateKnowledgeObjectRequestContentSemanticModelRelationshipsJoinKeys[];
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
      joinKeys: { 'type': 'array', 'itemType': UpdateKnowledgeObjectRequestContentSemanticModelRelationshipsJoinKeys },
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

export class UpdateKnowledgeObjectRequestContentSemanticModel extends $dara.Model {
  /**
   * @remarks
   * The logical datasets contained in the model. This is an empty array if no public datasets are available.
   */
  datasets?: UpdateKnowledgeObjectRequestContentSemanticModelDatasets[];
  /**
   * @remarks
   * The executable metrics in the model. This is an empty array if no metrics are available. Metrics with only candidate formulas are not included.
   */
  metrics?: UpdateKnowledgeObjectRequestContentSemanticModelMetrics[];
  /**
   * @remarks
   * The defined relationships in the model expressed by field pairs. This is an empty array if no relationships are available. Relationships are not inferred from graph paths.
   */
  relationships?: UpdateKnowledgeObjectRequestContentSemanticModelRelationships[];
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      metrics: 'Metrics',
      relationships: 'Relationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': UpdateKnowledgeObjectRequestContentSemanticModelDatasets },
      metrics: { 'type': 'array', 'itemType': UpdateKnowledgeObjectRequestContentSemanticModelMetrics },
      relationships: { 'type': 'array', 'itemType': UpdateKnowledgeObjectRequestContentSemanticModelRelationships },
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

export class UpdateKnowledgeObjectRequestContent extends $dara.Model {
  /**
   * @remarks
   * The document content. This property exists only when Type is set to DOCUMENT.
   */
  document?: UpdateKnowledgeObjectRequestContentDocument;
  /**
   * @remarks
   * The semantic model content. This property exists only when Type is set to SEMANTIC_MODEL.
   */
  semanticModel?: UpdateKnowledgeObjectRequestContentSemanticModel;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      semanticModel: 'SemanticModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: UpdateKnowledgeObjectRequestContentDocument,
      semanticModel: UpdateKnowledgeObjectRequestContentSemanticModel,
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

export class UpdateKnowledgeObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The client token. This parameter is supported only for DOCUMENT. Model updates do not guarantee exactly-once remote save notifications.
   * 
   * @example
   * edit-document-text-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The typed content update. Object properties are submitted as needed. Arrays are replaced in their entirety when submitted. Unspecified properties are retained.
   */
  content?: UpdateKnowledgeObjectRequestContent;
  /**
   * @remarks
   * The new description. An empty string clears the description. If this parameter is not specified, the original value is retained.
   * 
   * @example
   * Actual paid amount
   */
  description?: string;
  /**
   * @remarks
   * The expected modification time. This parameter is supported only for DOCUMENT. It is required when modifying the body text and optional when modifying metadata.
   * 
   * @example
   * 1790200800000
   */
  expectedModifyTime?: number;
  /**
   * @remarks
   * The ID of the knowledge base to which the object belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The stable knowledge object ID returned by the Get or List operation.
   * 
   * This parameter is required.
   * 
   * @example
   * obj-model-001
   */
  knowledgeObjectId?: string;
  /**
   * @remarks
   * The new name. This parameter cannot be empty. If this parameter is not specified, the original value is retained.
   * 
   * @example
   * orders
   */
  name?: string;
  /**
   * @remarks
   * The upload ID. This parameter is supported only for SEMANTIC_MODEL. It replaces the public model content with a complete YAML file and is mutually exclusive with Content.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abd
   */
  uploadId?: string;
  /**
   * @remarks
   * The version number. This parameter is required when updating Content or UploadId for SEMANTIC_MODEL. Use the VersionNo returned by the Get operation. This is not an optimistic lock.
   * 
   * @example
   * 1
   */
  versionNo?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      description: 'Description',
      expectedModifyTime: 'ExpectedModifyTime',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeObjectId: 'KnowledgeObjectId',
      name: 'Name',
      uploadId: 'UploadId',
      versionNo: 'VersionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: UpdateKnowledgeObjectRequestContent,
      description: 'string',
      expectedModifyTime: 'number',
      knowledgeBaseId: 'string',
      knowledgeObjectId: 'string',
      name: 'string',
      uploadId: 'string',
      versionNo: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

