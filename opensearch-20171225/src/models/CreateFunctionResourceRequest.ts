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
   * The list of input features.
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
   * The file content. Use this for \\`raw_file\\` resources.
   * 
   * @example
   * "abc"
   */
  content?: string;
  /**
   * @remarks
   * A list of feature generators. Use this for \\`feature_generator\\` resources.
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
   * The resource data. Its structure depends on the \\`ResourceType\\` value.
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
   * The type of the resource.
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

