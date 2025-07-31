// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $dara.Model {
  /**
   * @remarks
   * The value range of modifiable parameters.
   * 
   * @example
   * [0-65536]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the parameter is modifiable.
   * 
   * *   **false**: The parameter cannot be modified.
   * *   **true**: The parameter can be modified.
   * 
   * @example
   * true
   */
  forceModify?: boolean;
  /**
   * @remarks
   * Indicates whether a restart is required for parameter modifications to take effect.
   * 
   * *   **false**: A restart is not required. Parameter modifications immediately take effect.
   * *   **true**: A restart is required for parameter modifications to take effect.
   * 
   * @example
   * false
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * The threshold in milliseconds at which the database profiler considers a query slow, default is 100.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * net.compression.compressors
   */
  parameterName?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 100
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceModify: 'boolean',
      forceRestart: 'boolean',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyParameters extends $dara.Model {
  templateRecord?: DescribeParameterTemplatesResponseBodyParametersTemplateRecord[];
  static names(): { [key: string]: string } {
    return {
      templateRecord: 'TemplateRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateRecord: { 'type': 'array', 'itemType': DescribeParameterTemplatesResponseBodyParametersTemplateRecord },
    };
  }

  validate() {
    if(Array.isArray(this.templateRecord)) {
      $dara.Model.validateArray(this.templateRecord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * mongodb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The number of parameters that are supported by the instance.
   * 
   * @example
   * 10
   */
  parameterCount?: string;
  /**
   * @remarks
   * Details about the parameter templates.
   */
  parameters?: DescribeParameterTemplatesResponseBodyParameters;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDA54203-9D61-54A3-A568-D281F785****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      parameterCount: 'ParameterCount',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      parameterCount: 'string',
      parameters: DescribeParameterTemplatesResponseBodyParameters,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

