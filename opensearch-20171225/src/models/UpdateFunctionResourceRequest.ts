// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFunctionResourceRequestDataGeneratorsInputFeatures extends $dara.Model {
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

export class UpdateFunctionResourceRequestDataGeneratorsInput extends $dara.Model {
  /**
   * @remarks
   * The input features.
   */
  features?: UpdateFunctionResourceRequestDataGeneratorsInputFeatures[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': UpdateFunctionResourceRequestDataGeneratorsInputFeatures },
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

export class UpdateFunctionResourceRequestDataGenerators extends $dara.Model {
  /**
   * @remarks
   * The type of the feature generator.
   * 
   * @example
   * combo
   */
  generator?: string;
  /**
   * @remarks
   * The input.
   */
  input?: UpdateFunctionResourceRequestDataGeneratorsInput;
  /**
   * @remarks
   * The name of the output feature.
   * 
   * @example
   * feature1
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
      input: UpdateFunctionResourceRequestDataGeneratorsInput,
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

export class UpdateFunctionResourceRequestData extends $dara.Model {
  /**
   * @remarks
   * The content of the file that corresponds to a resource of the raw_file type.
   * 
   * @example
   * abc
   */
  content?: string;
  /**
   * @remarks
   * The feature generators that correspond to resources of the feature_generator type.
   */
  generators?: UpdateFunctionResourceRequestDataGenerators[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generators: 'Generators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generators: { 'type': 'array', 'itemType': UpdateFunctionResourceRequestDataGenerators },
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

export class UpdateFunctionResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource data. The data structure varies with the resource type.
   */
  data?: UpdateFunctionResourceRequestData;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * updated description
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateFunctionResourceRequestData,
      description: 'string',
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

