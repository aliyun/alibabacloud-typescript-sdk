// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionResourceResponseBodyResultDataGeneratorsInputFeatures extends $dara.Model {
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

export class GetFunctionResourceResponseBodyResultDataGeneratorsInput extends $dara.Model {
  /**
   * @remarks
   * The input features.
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
   * The resource data. The data structure varies with the resource type.
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
   * The name of the feature.
   * 
   * @example
   * rank
   */
  functionName?: string;
  /**
   * @remarks
   * The time when the resource was modified. Unit: milliseconds.
   * 
   * @example
   * 1234
   */
  modifyTime?: number;
  /**
   * @remarks
   * The algorithm instances that are referenced.
   */
  referencedInstances?: string[];
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * fg_json
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource.
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
   * The error code returned. If no error occurs, this value is empty.
   * 
   * @example
   * Resource.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the API request. Unit: milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message returned.
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
   * The returned results.
   */
  result?: GetFunctionResourceResponseBodyResult;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   OK
   * *   FAIL
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

