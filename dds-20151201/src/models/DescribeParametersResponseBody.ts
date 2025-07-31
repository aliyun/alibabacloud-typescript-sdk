// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyConfigParametersParameter extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [0-65536]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether a restart is required for parameter modifications to take effect. Valid values:
   * 
   * *   **false**: A restart is not required. Modifications take effect immediately.
   * *   **true**: A restart is required for parameter modifications to take effect.
   * 
   * @example
   * true
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * Indicates whether the parameter value can be modified. Valid values:
   * 
   * *   **false**: The parameter value cannot be modified.
   * *   **true**: The parameter value can be modified.
   * 
   * @example
   * true
   */
  modifiableStatus?: boolean;
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
   * operationProfiling.slowOpThresholdMs
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 200
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceRestart: 'ForceRestart',
      modifiableStatus: 'ModifiableStatus',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceRestart: 'boolean',
      modifiableStatus: 'boolean',
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

export class DescribeParametersResponseBodyConfigParameters extends $dara.Model {
  parameter?: DescribeParametersResponseBodyConfigParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersParameter },
    };
  }

  validate() {
    if(Array.isArray(this.parameter)) {
      $dara.Model.validateArray(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParametersParameter extends $dara.Model {
  /**
   * @remarks
   * 实例的角色类型，取值说明：
   * 
   * - **db**：shard角色。
   * - **cs**：config server角色。
   * - **mongos**：mongos角色。
   * 
   * @example
   * db
   */
  characterType?: string;
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [33554432-268435456]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether a restart is required for parameter modifications to take effect. Valid values:
   * 
   * *   **false**: A restart is not required. Modifications take effect immediately.
   * *   **true**: A restart is required for parameter modifications to take effect.
   * 
   * @example
   * false
   */
  forceRestart?: string;
  /**
   * @remarks
   * Indicates whether the parameter value can be modified. Valid values:
   * 
   * *   **false**: The parameter value cannot be modified.
   * *   **true**: The parameter value can be modified.
   * 
   * @example
   * true
   */
  modifiableStatus?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * The maximum memory bytes that sort stage may use, default is 33554432(i.e. 32MB)
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * setParameter.internalQueryExecMaxBlockingSortBytes
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 33554432
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      checkingCode: 'CheckingCode',
      forceRestart: 'ForceRestart',
      modifiableStatus: 'ModifiableStatus',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      checkingCode: 'string',
      forceRestart: 'string',
      modifiableStatus: 'string',
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

export class DescribeParametersResponseBodyRunningParameters extends $dara.Model {
  parameter?: DescribeParametersResponseBodyRunningParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersParameter },
    };
  }

  validate() {
    if(Array.isArray(this.parameter)) {
      $dara.Model.validateArray(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter settings in the configuration template.
   */
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  /**
   * @remarks
   * The database engine of the instance. Default value: **mongodb**.
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
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3ADD0C7D-2D2A-4F15-88FF-E7AC9B9FDCC8
   */
  requestId?: string;
  /**
   * @remarks
   * The settings of the parameters that have taken effect.
   */
  runningParameters?: DescribeParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: DescribeParametersResponseBodyConfigParameters,
      engine: 'string',
      engineVersion: 'string',
      requestId: 'string',
      runningParameters: DescribeParametersResponseBodyRunningParameters,
    };
  }

  validate() {
    if(this.configParameters && typeof (this.configParameters as any).validate === 'function') {
      (this.configParameters as any).validate();
    }
    if(this.runningParameters && typeof (this.runningParameters as any).validate === 'function') {
      (this.runningParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

