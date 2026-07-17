// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionResourcesResponseBodyResultDataGeneratorsInputFeatures extends $dara.Model {
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

export class ListFunctionResourcesResponseBodyResultDataGeneratorsInput extends $dara.Model {
  /**
   * @remarks
   * The list of input features.
   */
  features?: ListFunctionResourcesResponseBodyResultDataGeneratorsInputFeatures[];
  static names(): { [key: string]: string } {
    return {
      features: 'Features',
    };
  }

  static types(): { [key: string]: any } {
    return {
      features: { 'type': 'array', 'itemType': ListFunctionResourcesResponseBodyResultDataGeneratorsInputFeatures },
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

export class ListFunctionResourcesResponseBodyResultDataGenerators extends $dara.Model {
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
  input?: ListFunctionResourcesResponseBodyResultDataGeneratorsInput;
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
      input: ListFunctionResourcesResponseBodyResultDataGeneratorsInput,
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

export class ListFunctionResourcesResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * The content of the file that corresponds to the raw_file resource.
   * 
   * @example
   * "abc"
   */
  content?: string;
  /**
   * @remarks
   * The list of feature generators that correspond to the feature_generator resource.
   */
  generators?: ListFunctionResourcesResponseBodyResultDataGenerators[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      generators: 'Generators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      generators: { 'type': 'array', 'itemType': ListFunctionResourcesResponseBodyResultDataGenerators },
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

export class ListFunctionResourcesResponseBodyResult extends $dara.Model {
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
  data?: ListFunctionResourcesResponseBodyResultData;
  /**
   * @remarks
   * The description of the resource.
   * 
   * @example
   * resource description
   */
  description?: string;
  /**
   * @remarks
   * The function name.
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
   * The names of the referenced algorithm instances.
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
   * feature_generator
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
      data: ListFunctionResourcesResponseBodyResultData,
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

export class ListFunctionResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned error code. This parameter is empty if no error occurs.
   * 
   * @example
   * Resource.InvalidResourceName
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
   * The request latency. Unit: milliseconds.
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
   * Invalid resource name.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * "3A809095-C554-5CF5-8FCE-BE19D4673790"
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: ListFunctionResourcesResponseBodyResult[];
  /**
   * @remarks
   * The request status. Valid values: OK and FAIL.
   * 
   * @example
   * OK
   */
  status?: string;
  /**
   * @remarks
   * The total number of records that meet the requirements.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFunctionResourcesResponseBodyResult },
      status: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

