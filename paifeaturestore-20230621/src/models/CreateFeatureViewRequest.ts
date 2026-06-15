// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureViewRequestFieldsTransformInput extends $dara.Model {
  /**
   * @remarks
   * The modality of the input, such as text or image.
   */
  modality?: string;
  /**
   * @remarks
   * The name of the input field.
   * 
   * @example
   * f1
   */
  name?: string;
  /**
   * @remarks
   * The data type of the input field.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      modality: 'Modality',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modality: 'string',
      name: 'string',
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

export class CreateFeatureViewRequestFieldsTransform extends $dara.Model {
  /**
   * @remarks
   * The input for feature generation.
   */
  input?: CreateFeatureViewRequestFieldsTransformInput[];
  /**
   * @remarks
   * The ID of the large language model (LLM) configuration.
   * 
   * @example
   * 1
   */
  LLMConfigId?: number;
  /**
   * @remarks
   * The type of the feature generation.
   * 
   * @example
   * LLMEmbedding
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      LLMConfigId: 'LLMConfigId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: { 'type': 'array', 'itemType': CreateFeatureViewRequestFieldsTransformInput },
      LLMConfigId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.input)) {
      $dara.Model.validateArray(this.input);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureViewRequestFields extends $dara.Model {
  /**
   * @remarks
   * The attributes of the field. Valid values:
   * 
   * - `Partition`: partition field.
   * 
   * - `PrimaryKey`: primary key.
   * 
   * - `EventTime`: event time.
   */
  attributes?: string[];
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * age
   */
  name?: string;
  /**
   * @remarks
   * The feature generation configurations.
   */
  transform?: CreateFeatureViewRequestFieldsTransform[];
  /**
   * @remarks
   * The data type of the field. Valid values:
   * 
   * - INT32
   * 
   * - INT64
   * 
   * - FLOAT
   * 
   * - DOUBLE
   * 
   * - STRING
   * 
   * - BOOLEAN
   * 
   * - TIMESTAMP
   * 
   * @example
   * INT32
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
      transform: 'Transform',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      transform: { 'type': 'array', 'itemType': CreateFeatureViewRequestFieldsTransform },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    if(Array.isArray(this.transform)) {
      $dara.Model.validateArray(this.transform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFeatureViewRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the feature view.
   * 
   * @example
   * {"save_original_field":true}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the feature entity.
   * 
   * @example
   * 4
   */
  featureEntityId?: string;
  /**
   * @remarks
   * The fields.
   */
  fields?: CreateFeatureViewRequestFields[];
  /**
   * @remarks
   * The name of the feature view.
   * 
   * This parameter is required.
   * 
   * @example
   * FeatureView1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The ID of the data source to which the table to be registered belongs. You can call the ListDatasources operation to obtain the data source ID.
   * 
   * @example
   * 5
   */
  registerDatasourceId?: string;
  /**
   * @remarks
   * The name of the table to register.
   * 
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @remarks
   * Specifies whether to synchronize the online feature table. Valid values:
   * 
   * - `true`: Synchronizes the online feature table.
   * 
   * - `false`: Does not synchronize the online feature table.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  syncOnlineTable?: boolean;
  /**
   * @remarks
   * The time-to-live (TTL) of the feature view, in days.
   * 
   * @example
   * 90
   */
  TTL?: number;
  /**
   * @remarks
   * The tags of the feature view.
   */
  tags?: string[];
  /**
   * @remarks
   * The type of the feature view. Valid values:
   * 
   * - `Batch`: Offline feature.
   * 
   * - `Stream`: Real-time feature.
   * 
   * This parameter is required.
   * 
   * @example
   * Batch
   */
  type?: string;
  /**
   * @remarks
   * The write method. Valid values:
   * 
   * - `ByReadyMadeTable`: Registers the feature view by using an existing table.
   * 
   * - `Custom`: Defines a custom table structure.
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  writeMethod?: string;
  /**
   * @remarks
   * Specifies whether to write data to the online feature store. Valid values:
   * 
   * - `true`: Writes data to the online feature store.
   * 
   * - `false`: Does not write data to the online feature store.
   * 
   * @example
   * false
   */
  writeToFeatureDB?: boolean;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      featureEntityId: 'FeatureEntityId',
      fields: 'Fields',
      name: 'Name',
      projectId: 'ProjectId',
      registerDatasourceId: 'RegisterDatasourceId',
      registerTable: 'RegisterTable',
      syncOnlineTable: 'SyncOnlineTable',
      TTL: 'TTL',
      tags: 'Tags',
      type: 'Type',
      writeMethod: 'WriteMethod',
      writeToFeatureDB: 'WriteToFeatureDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      featureEntityId: 'string',
      fields: { 'type': 'array', 'itemType': CreateFeatureViewRequestFields },
      name: 'string',
      projectId: 'string',
      registerDatasourceId: 'string',
      registerTable: 'string',
      syncOnlineTable: 'boolean',
      TTL: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
      writeMethod: 'string',
      writeToFeatureDB: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

