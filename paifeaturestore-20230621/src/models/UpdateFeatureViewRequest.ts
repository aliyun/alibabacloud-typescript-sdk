// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFeatureViewRequestFieldsTransformInput extends $dara.Model {
  /**
   * @example
   * NONE
   */
  modality?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class UpdateFeatureViewRequestFieldsTransform extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  input?: UpdateFeatureViewRequestFieldsTransformInput[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  LLMConfigId?: number;
  /**
   * @remarks
   * This parameter is required.
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
      input: { 'type': 'array', 'itemType': UpdateFeatureViewRequestFieldsTransformInput },
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

export class UpdateFeatureViewRequestFields extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_id
   */
  name?: string;
  transform?: UpdateFeatureViewRequestFieldsTransform[];
  /**
   * @remarks
   * This parameter is required.
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
      transform: { 'type': 'array', 'itemType': UpdateFeatureViewRequestFieldsTransform },
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

export class UpdateFeatureViewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  fields?: UpdateFeatureViewRequestFields[];
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': UpdateFeatureViewRequestFields },
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

