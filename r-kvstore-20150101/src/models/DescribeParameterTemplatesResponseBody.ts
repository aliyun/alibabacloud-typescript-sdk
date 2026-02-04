// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [yes|no]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the parameter can be reconfigured. Valid values:
   * 
   * *   **true**: The parameter can be reconfigured.
   * *   **false**: The parameter cannot be reconfigured.
   * 
   * @example
   * true
   */
  forceModify?: boolean;
  /**
   * @remarks
   * Indicates whether a restart of the instance is required after the parameter is reconfigured. Valid values:
   * 
   * *   **true**: After the parameter is reconfigured, you must restart the instance to make the new value of the parameter take effect.
   * *   **false**: After the parameter is reconfigured, the new value of the parameter immediately takes effect. You do not need to restart the instance.
   * 
   * @example
   * true
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * test description
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter. For more information about the parameters and the parameter settings, see [Parameters](https://help.aliyun.com/document_detail/259681.html).
   * 
   * @example
   * appendonly
   */
  parameterName?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * yes
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
   * The database engine that is run on the instance. The value **Redis** is returned for this parameter.
   * 
   * @example
   * redis
   */
  engine?: string;
  /**
   * @remarks
   * The major version of the instance.
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
   * 24
   */
  parameterCount?: string;
  /**
   * @remarks
   * An array that consists of the details about the parameters returned.
   */
  parameters?: DescribeParameterTemplatesResponseBodyParameters;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DA28D8E-514D-4F12-ADED-70A9C818****
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

