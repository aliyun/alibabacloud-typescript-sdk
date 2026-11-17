// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeObjectRequestContentDocument extends $dara.Model {
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

export class CreateKnowledgeObjectRequestContentSemanticModelDatasetsFields extends $dara.Model {
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
   * The document description.
   * 
   * @example
   * Sales metrics and policy document
   */
  description?: string;
  /**
   * @remarks
   * The document name. Existing objects are not overwritten based on the name.
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

export class CreateKnowledgeObjectRequestContentSemanticModelDatasets extends $dara.Model {
  /**
   * @remarks
   * The document description.
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
  fields?: CreateKnowledgeObjectRequestContentSemanticModelDatasetsFields[];
  /**
   * @remarks
   * The document name. Existing objects are not overwritten based on the name.
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
      fields: { 'type': 'array', 'itemType': CreateKnowledgeObjectRequestContentSemanticModelDatasetsFields },
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

export class CreateKnowledgeObjectRequestContentSemanticModelMetricsExpressionDialects extends $dara.Model {
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

export class CreateKnowledgeObjectRequestContentSemanticModelMetricsExpression extends $dara.Model {
  /**
   * @remarks
   * The expressions of the same metric in different SQL dialects. At least one item is required. The same dialect is not repeated.
   */
  dialects?: CreateKnowledgeObjectRequestContentSemanticModelMetricsExpressionDialects[];
  static names(): { [key: string]: string } {
    return {
      dialects: 'Dialects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialects: { 'type': 'array', 'itemType': CreateKnowledgeObjectRequestContentSemanticModelMetricsExpressionDialects },
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

export class CreateKnowledgeObjectRequestContentSemanticModelMetrics extends $dara.Model {
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
   * The document description.
   * 
   * @example
   * Sales metrics and policy document
   */
  description?: string;
  /**
   * @remarks
   * The executable expression. It must include at least one dialect version and is not auto-completed by the model.
   */
  expression?: CreateKnowledgeObjectRequestContentSemanticModelMetricsExpression;
  /**
   * @remarks
   * The document name. Existing objects are not overwritten based on the name.
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
      expression: CreateKnowledgeObjectRequestContentSemanticModelMetricsExpression,
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

export class CreateKnowledgeObjectRequestContentSemanticModelRelationshipsJoinKeys extends $dara.Model {
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

export class CreateKnowledgeObjectRequestContentSemanticModelRelationships extends $dara.Model {
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
  joinKeys?: CreateKnowledgeObjectRequestContentSemanticModelRelationshipsJoinKeys[];
  /**
   * @remarks
   * The document name. Existing objects are not overwritten based on the name.
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
      joinKeys: { 'type': 'array', 'itemType': CreateKnowledgeObjectRequestContentSemanticModelRelationshipsJoinKeys },
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

export class CreateKnowledgeObjectRequestContentSemanticModel extends $dara.Model {
  /**
   * @remarks
   * The logical datasets included in the model. If no public datasets exist, this is an empty array.
   */
  datasets?: CreateKnowledgeObjectRequestContentSemanticModelDatasets[];
  /**
   * @remarks
   * The executable metrics in the model. If no metrics exist, this is an empty array. Metrics with only candidate formulas are not included.
   */
  metrics?: CreateKnowledgeObjectRequestContentSemanticModelMetrics[];
  /**
   * @remarks
   * The defined relationships in the model expressed by field pairs. If no relationships exist, this is an empty array. Relationships are not guessed from graph paths.
   */
  relationships?: CreateKnowledgeObjectRequestContentSemanticModelRelationships[];
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      metrics: 'Metrics',
      relationships: 'Relationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': CreateKnowledgeObjectRequestContentSemanticModelDatasets },
      metrics: { 'type': 'array', 'itemType': CreateKnowledgeObjectRequestContentSemanticModelMetrics },
      relationships: { 'type': 'array', 'itemType': CreateKnowledgeObjectRequestContentSemanticModelRelationships },
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

export class CreateKnowledgeObjectRequestContent extends $dara.Model {
  /**
   * @remarks
   * This operation returns only the document content.
   */
  document?: CreateKnowledgeObjectRequestContentDocument;
  /**
   * @remarks
   * This operation does not accept this branch. Use a build task to import YAML for new semantic models.
   */
  semanticModel?: CreateKnowledgeObjectRequestContentSemanticModel;
  static names(): { [key: string]: string } {
    return {
      document: 'Document',
      semanticModel: 'SemanticModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: CreateKnowledgeObjectRequestContentDocument,
      semanticModel: CreateKnowledgeObjectRequestContentSemanticModel,
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

export class CreateKnowledgeObjectRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token for the creation request. Keep the original request unchanged when retrying.
   * 
   * @example
   * create-document-001
   */
  clientToken?: string;
  /**
   * @remarks
   * Only Content.Document is supported. It includes Text and ContentFormat (MARKDOWN or TEXT).
   */
  content?: CreateKnowledgeObjectRequestContent;
  /**
   * @remarks
   * The document description.
   * 
   * @example
   * Sales metrics and policy document
   */
  description?: string;
  /**
   * @remarks
   * The ID of the target knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The document name. Existing objects are not overwritten based on the name.
   * 
   * This parameter is required.
   * 
   * @example
   * Business description
   */
  name?: string;
  /**
   * @remarks
   * The type of the object. For this operation, the value is fixed to DOCUMENT.
   * 
   * This parameter is required.
   * 
   * @example
   * DOCUMENT
   */
  type?: string;
  /**
   * @remarks
   * The ID of the completed PUT upload session for this knowledge base. This parameter is mutually exclusive with Content.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abd
   */
  uploadId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      description: 'Description',
      knowledgeBaseId: 'KnowledgeBaseId',
      name: 'Name',
      type: 'Type',
      uploadId: 'UploadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: CreateKnowledgeObjectRequestContent,
      description: 'string',
      knowledgeBaseId: 'string',
      name: 'string',
      type: 'string',
      uploadId: 'string',
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

