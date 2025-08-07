// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterParametersResponseBodyParametersParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the source and current parameters have the same value.
   * 
   * @example
   * true
   */
  isEqual?: string;
  /**
   * @remarks
   * Indicate whether the parameter is a primary parameter of the destination cluster. Valid values:
   * 
   * *   **1**: The parameter is a primary parameter of the destination cluster.
   * *   **0**: The parameter is not a primary parameter of the destination cluster.
   * 
   * @example
   * 1
   */
  isInstancePolarDBKey?: string;
  /**
   * @remarks
   * Indicate whether the parameter is a primary parameter of the source instance. Valid values:
   * 
   * *   **1**: The parameter is a primary parameter of the source instance.
   * *   **0**: The parameter is not a primary parameter of the source instance.
   * 
   * @example
   * 0
   */
  isInstanceRdsKey?: string;
  /**
   * @remarks
   * Indicate whether the parameter is a primary parameter of the destination cluster. Valid values:
   * 
   * *   **1**: The parameter is a primary parameter of the destination cluster.
   * *   **0**: The parameter is not a primary parameter of the destination cluster.
   * 
   * @example
   * 0
   */
  isPolarDBKey?: string;
  /**
   * @remarks
   * Indicate whether the parameter is a primary parameter of the source instance. Valid values:
   * 
   * *   **1**: The parameter is a primary parameter of the source instance.
   * *   **0**: The parameter is not a primary parameter of the source instance.
   * 
   * @example
   * 1
   */
  isRdsKey?: string;
  /**
   * @remarks
   * The description of the parameter of the destination cluster.
   * 
   * @example
   * The server\\"s default character set.
   */
  distParameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter of the destination cluster.
   * 
   * @example
   * character_set_server
   */
  distParameterName?: string;
  /**
   * @remarks
   * The valid values of the parameter of the destination cluster.
   * 
   * @example
   * - utf8
   * - gbk
   */
  distParameterOptional?: string;
  /**
   * @remarks
   * The value of the parameter of the destination cluster.
   * 
   * @example
   * utf8
   */
  distParameterValue?: string;
  /**
   * @remarks
   * The description of the parameter of the source instance.
   * 
   * @example
   * The server\\"s default character set.
   */
  rdsParameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter of the source instance.
   * 
   * @example
   * character_set_server
   */
  rdsParameterName?: string;
  /**
   * @remarks
   * The valid values of the parameter of the source instance.
   * 
   * @example
   * - utf8
   * - gbk
   */
  rdsParameterOptional?: string;
  /**
   * @remarks
   * The value of the parameter of the source instance.
   * 
   * @example
   * utf8
   */
  rdsParameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      isEqual: 'IsEqual',
      isInstancePolarDBKey: 'IsInstancePolarDBKey',
      isInstanceRdsKey: 'IsInstanceRdsKey',
      isPolarDBKey: 'IsPolarDBKey',
      isRdsKey: 'IsRdsKey',
      distParameterDescription: 'distParameterDescription',
      distParameterName: 'distParameterName',
      distParameterOptional: 'distParameterOptional',
      distParameterValue: 'distParameterValue',
      rdsParameterDescription: 'rdsParameterDescription',
      rdsParameterName: 'rdsParameterName',
      rdsParameterOptional: 'rdsParameterOptional',
      rdsParameterValue: 'rdsParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEqual: 'string',
      isInstancePolarDBKey: 'string',
      isInstanceRdsKey: 'string',
      isPolarDBKey: 'string',
      isRdsKey: 'string',
      distParameterDescription: 'string',
      distParameterName: 'string',
      distParameterOptional: 'string',
      distParameterValue: 'string',
      rdsParameterDescription: 'string',
      rdsParameterName: 'string',
      rdsParameterOptional: 'string',
      rdsParameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBodyParameters extends $dara.Model {
  parameters?: DescribeDBClusterParametersResponseBodyParametersParameters[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeDBClusterParametersResponseBodyParametersParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterParametersResponseBodyRunningParametersParameter extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [utf8|latin1|gbk|utf8mb4]
   */
  checkingCode?: string;
  /**
   * @remarks
   * The data type of the parameter value. Valid values:
   * 
   * *   **INT**
   * *   **STRING**
   * *   **B**
   * 
   * @example
   * INT
   */
  dataType?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * utf8
   */
  defaultParameterValue?: string;
  /**
   * @remarks
   * A divisor of the parameter. For a parameter of the integer or byte type, the valid values must be a multiple of Factor unless you set Factor to 0.
   * 
   * @example
   * 20
   */
  factor?: string;
  /**
   * @remarks
   * Indicates whether a cluster restart is required for the parameter modification to take effect. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * Indicates whether the parameter can be modified. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * true
   */
  isModifiable?: boolean;
  /**
   * @remarks
   * Indicates whether the parameter is a global parameter. Valid values:
   * 
   * *   **0**: The parameter is a global parameter. The modified parameter value is synchronized to other nodes.
   * *   **1**: The parameter is not a global parameter. You can specify the nodes to which the modified parameter value can be synchronized.
   * 
   * @example
   * 0
   */
  isNodeAvailable?: string;
  /**
   * @remarks
   * The dependencies of the parameter.
   * 
   * @example
   * utf8
   */
  paramRelyRule?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * The server\\"s default character set.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * character_set_server
   */
  parameterName?: string;
  /**
   * @remarks
   * The status of the parameter. Valid values:
   * 
   * *   **Normal**
   * *   **Modifying**
   * 
   * @example
   * Normal
   */
  parameterStatus?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * utf8
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
      isNodeAvailable: 'IsNodeAvailable',
      paramRelyRule: 'ParamRelyRule',
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
      isNodeAvailable: 'string',
      paramRelyRule: 'string',
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

export class DescribeDBClusterParametersResponseBodyRunningParameters extends $dara.Model {
  parameter?: DescribeDBClusterParametersResponseBodyRunningParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeDBClusterParametersResponseBodyRunningParametersParameter },
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

export class DescribeDBClusterParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine that the clusters runs. Valid values:
   * 
   * *   **MySQL**
   * *   **PostgreSQL**
   * *   **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine. 
   * 
   * - Valid values for the MySQL database engine:   
   *   - **5.6**
   *   - **5.7**
   *   - **8.0**
   * - Valid value for the PostgreSQL database engine:    
   *   - **11**
   *   - **14**
   * - Valid value for the Oracle database engine:  **11**
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The cluster engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The number of parameters.
   * 
   * @example
   * 1
   */
  parameterNumbers?: string;
  /**
   * @remarks
   * A comparison of parameters between the source RDS instance and the destination PolarDB cluster.
   */
  parameters?: DescribeDBClusterParametersResponseBodyParameters;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters of the PolarDB cluster.
   */
  runningParameters?: DescribeDBClusterParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      parameterNumbers: 'ParameterNumbers',
      parameters: 'Parameters',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      engine: 'string',
      parameterNumbers: 'string',
      parameters: DescribeDBClusterParametersResponseBodyParameters,
      requestId: 'string',
      runningParameters: DescribeDBClusterParametersResponseBodyRunningParameters,
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
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

