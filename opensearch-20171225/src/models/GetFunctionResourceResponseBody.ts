// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionResourceResponseBodyResultDataGeneratorsInputFeatures extends $dara.Model {
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * system_item_id
   */
  name?: string;
  /**
   * @remarks
   * The feature type.
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

export class GetFunctionResourceResponseBodyResultDataGeneratorsInput extends $dara.Model {
  /**
   * @remarks
   * The list of input features.
   */
  features?: GetFunctionResourceResponseBodyResultDataGeneratorsInputFeatures[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': GetFunctionResourceResponseBodyResultDataGeneratorsInputFeatures },
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

export class GetFunctionResourceResponseBodyResultDataGenerators extends $dara.Model {
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
  input?: GetFunctionResourceResponseBodyResultDataGeneratorsInput;
  /**
   * @remarks
   * The name of the output feature.
   * 
   * @example
   * output_feature_name
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
      input: GetFunctionResourceResponseBodyResultDataGeneratorsInput,
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

export class GetFunctionResourceResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The content of the file for a resource of the raw_file type.
   * 
   * @example
   * abc
   */
  content?: string;
  /**
   * @remarks
   * The list of feature generators for a resource of the feature_generator type.
   */
  generators?: GetFunctionResourceResponseBodyResultDataGenerators[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generators: 'Generators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generators: { 'type': 'array', 'itemType': GetFunctionResourceResponseBodyResultDataGenerators },
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

export class GetFunctionResourceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the resource was created. Unit: milliseconds.
   * 
   * @example
   * 1234
   */
  createTime?: number;
  /**
   * @remarks
   * The resource data. The structure of the data varies based on the resourceType.
   */
  data?: GetFunctionResourceResponseBodyResultData;
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
   * The feature name.
   * 
   * @example
   * rank
   */
  functionName?: string;
  /**
   * @remarks
   * The time when the resource was last modified. Unit: milliseconds.
   * 
   * @example
   * 1234
   */
  modifyTime?: number;
  /**
   * @remarks
   * The list of referenced algorithm instance names.
   */
  referencedInstances?: string[];
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * fg_json
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * raw_file
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      data: 'Data',
      description: 'Description',
      functionName: 'FunctionName',
      modifyTime: 'ModifyTime',
      referencedInstances: 'ReferencedInstances',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      data: GetFunctionResourceResponseBodyResultData,
      description: 'string',
      functionName: 'string',
      modifyTime: 'number',
      referencedInstances: { 'type': 'array', 'itemType': 'string' },
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.referencedInstances)) {
      $dara.Model.validateArray(this.referencedInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error code. This is empty if no error occurred.
   * 
   * @example
   * Resource.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed by the API request. Unit: milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Resource not exist.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E215C843-0795-5293-AC9A-14FE0723E890
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetFunctionResourceResponseBodyResult;
  /**
   * @remarks
   * The status code.
   * 
   * - OK: The request was successful.
   * 
   * - FAIL: The request failed.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionResourceResponseBodyResult,
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

