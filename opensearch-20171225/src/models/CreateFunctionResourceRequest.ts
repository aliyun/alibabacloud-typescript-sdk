// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFunctionResourceRequestDataGeneratorsInputFeatures extends $dara.Model {
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * system_item_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the feature.
   * 
   * Valid values:
   * 
   * *   item
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   user
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * item
   */
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

export class CreateFunctionResourceRequestDataGeneratorsInput extends $dara.Model {
  /**
   * @remarks
   * The input features.
   */
  features?: CreateFunctionResourceRequestDataGeneratorsInputFeatures[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': CreateFunctionResourceRequestDataGeneratorsInputFeatures },
    };
  }

  validate() {
    if(Array.isArray(this.features)) {
      $dara.Model.validateArray(this.features);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResourceRequestDataGenerators extends $dara.Model {
  /**
   * @remarks
   * The type of the feature generator.
   * 
   * Valid values:
   * 
   * *   lookup
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   sequence
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   overlap
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   raw
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   combo
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   id
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * id
   */
  generator?: string;
  /**
   * @remarks
   * The input.
   */
  input?: CreateFunctionResourceRequestDataGeneratorsInput;
  /**
   * @remarks
   * The name of the output feature.
   * 
   * @example
   * item_id_feature
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      generator: 'Generator',
      input: 'Input',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generator: 'string',
      input: CreateFunctionResourceRequestDataGeneratorsInput,
      output: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResourceRequestData extends $dara.Model {
  /**
   * @remarks
   * The content of the file that corresponds to a resource of the raw_file type.
   * 
   * @example
   * "abc"
   */
  content?: string;
  /**
   * @remarks
   * The feature generators that correspond to resources of the feature_generator type.
   */
  generators?: CreateFunctionResourceRequestDataGenerators[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generators: 'Generators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generators: { 'type': 'array', 'itemType': CreateFunctionResourceRequestDataGenerators },
    };
  }

  validate() {
    if(Array.isArray(this.generators)) {
      $dara.Model.validateArray(this.generators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource data. The data structure varies with the resource type.
   */
  data?: CreateFunctionResourceRequestData;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * ""
   */
  description?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * fg_jsoon
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * 
   * *   feature_generator
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   raw_file
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * feature_generator
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      description: 'Description',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateFunctionResourceRequestData,
      description: 'string',
      resourceName: 'string',
      resourceType: 'string',
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

