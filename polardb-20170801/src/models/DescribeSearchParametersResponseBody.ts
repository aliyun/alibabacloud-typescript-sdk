// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchParametersResponseBodyRunningParametersParameter extends $dara.Model {
  /**
   * @remarks
   * The value validation rule of the template. The rule can be a numeric range, an enumeration, or a regular expression, and must be interpreted in combination with the data type.
   * 
   * @example
   * [true\\|false]
   */
  checkingCode?: string;
  /**
   * @remarks
   * The data type of the parameter value. Valid values: INT, DOUBLE, B/BYTE, MEMORY, PERCENT, TIME, BOOLEAN, and STRING. The MEMORY type supports percentages or capacities with units.
   * 
   * @example
   * BOOLEAN
   */
  dataType?: string;
  /**
   * @remarks
   * The default value of the current active template. This value is independent of the value modified by the user.
   * 
   * @example
   * false
   */
  defaultParameterValue?: string;
  /**
   * @remarks
   * The divisibility factor. If the value is not zero, the numeric value parsed based on the template type must be a multiple of this factor.
   * 
   * @example
   * 0
   */
  factor?: string;
  /**
   * @remarks
   * Specifies whether a restart is required for the parameter to take effect. The value is true for static parameters and false for dynamic parameters.
   * 
   * @example
   * false
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * Specifies whether the parameter is modifiable.
   * 
   * @example
   * false
   */
  isModifiable?: boolean;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * Parameter description
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * prometheus.indices
   */
  parameterName?: string;
  /**
   * @remarks
   * The modification status of the parameter. A value of Normal indicates that no modifications are pending. A value of Modifying indicates that the modification task is not completed.
   * 
   * @example
   * false
   */
  parameterStatus?: string;
  /**
   * @remarks
   * The configuration value on the control plane. If a modification is in progress, the value to be applied is displayed. This value is not read from the kernel in real time.
   * 
   * @example
   * false
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      dataType: 'DataType',
      defaultParameterValue: 'DefaultParameterValue',
      factor: 'Factor',
      forceRestart: 'ForceRestart',
      isModifiable: 'IsModifiable',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterStatus: 'ParameterStatus',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      dataType: 'string',
      defaultParameterValue: 'string',
      factor: 'string',
      forceRestart: 'boolean',
      isModifiable: 'boolean',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterStatus: 'string',
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

export class DescribeSearchParametersResponseBodyRunningParameters extends $dara.Model {
  /**
   * @remarks
   * The list of parameters.
   */
  parameter?: DescribeSearchParametersResponseBodyRunningParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeSearchParametersResponseBodyRunningParametersParameter },
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

export class DescribeSearchParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB primary cluster.
   * 
   * @example
   * pc-2zex82f527he****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The Search engine version. This is not the MySQL version of the primary cluster.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The type of the Search engine.
   * 
   * @example
   * polardb_search
   */
  engine?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * e3a24663-eee5-4009-b635-2e9e8d052e74
   */
  requestId?: string;
  /**
   * @remarks
   * The visible parameters and their modification status.
   */
  runningParameters?: DescribeSearchParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBVersion: 'string',
      engine: 'string',
      requestId: 'string',
      runningParameters: DescribeSearchParametersResponseBodyRunningParameters,
    };
  }

  validate() {
    if(this.runningParameters && typeof (this.runningParameters as any).validate === 'function') {
      (this.runningParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

