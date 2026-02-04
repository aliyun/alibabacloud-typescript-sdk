// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyConfigParametersParameter extends $dara.Model {
  /**
   * @remarks
   * The check code that indicates the valid values of the parameter.
   * 
   * @example
   * [0|1]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the instance must be restarted for the modifications to take effect. Valid values:
   * 
   * *   **True**: The instance must be restarted for the modifications to take effect.
   * *   **False**: The instance does not need to be restarted for the modifications to take effect. Modifications immediately take effect.
   * 
   * @example
   * true
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * Indicates whether the parameter can be reset. Valid values:
   * 
   * *   **False**: The parameter cannot be reset.
   * *   **True**: The parameter can be reset.
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
   * Check all keys passed in the KEYS array map to the same slot.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * script_check_enable
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 1
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
   * The check code that indicates the valid values of the parameter.
   * 
   * @example
   * [0|1]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the instance must be restarted for the modifications to take effect. Valid values:
   * 
   * *   **True**: The instance must be restarted for the modifications to take effect.
   * *   **False**: The instance does not need to be restarted for the modifications to take effect. Modifications immediately take effect.
   * 
   * @example
   * true
   */
  forceRestart?: string;
  /**
   * @remarks
   * Indicates whether the parameter can be reset. Valid values:
   * 
   * *   **False**: The parameter cannot be reset.
   * *   **True**: The parameter can be reset.
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
   * You can disable some dangerous commands, for example \\"keys,flushdb,flushall\\", the commands must be in [flushall,flushdb,keys,hgetall,eval,evalsha,script].
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * #no_loose_disabled-commands
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * keys,flushall,flushdb
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
   * The configuration parameters that have not taken effect.
   */
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  /**
   * @remarks
   * The database engine that the instance runs.
   * 
   * @example
   * redis
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
   * The ID of the request.
   * 
   * @example
   * 9C1338BE-8DE8-4890-A900-E1BC06BF****
   */
  requestId?: string;
  /**
   * @remarks
   * The running parameters.
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

