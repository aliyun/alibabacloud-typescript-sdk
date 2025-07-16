// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFeatureViewRequestFieldsTransformInput extends $dara.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  input?: CreateFeatureViewRequestFieldsTransformInput[];
  LLMConfigId?: number;
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
  attributes?: string[];
  /**
   * @example
   * age
   */
  name?: string;
  transform?: CreateFeatureViewRequestFieldsTransform[];
  /**
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
   * @example
   * {"save_original_field":true}
   */
  config?: string;
  /**
   * @example
   * 4
   */
  featureEntityId?: string;
  fields?: CreateFeatureViewRequestFields[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FeatureView1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @example
   * 5
   */
  registerDatasourceId?: string;
  /**
   * @example
   * table1
   */
  registerTable?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  syncOnlineTable?: boolean;
  /**
   * @example
   * 90
   */
  TTL?: number;
  tags?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Batch
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  writeMethod?: string;
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

