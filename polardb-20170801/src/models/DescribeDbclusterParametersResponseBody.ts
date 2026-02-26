// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterParametersResponseBodyParametersParameters extends $dara.Model {
  isEqual?: string;
  isInstancePolarDBKey?: string;
  isInstanceRdsKey?: string;
  isPolarDBKey?: string;
  isRdsKey?: string;
  distParameterDescription?: string;
  distParameterName?: string;
  distParameterOptional?: string;
  distParameterValue?: string;
  rdsParameterDescription?: string;
  rdsParameterName?: string;
  rdsParameterOptional?: string;
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
  checkingCode?: string;
  dataType?: string;
  defaultParameterValue?: string;
  factor?: string;
  forceRestart?: boolean;
  isModifiable?: boolean;
  isNodeAvailable?: string;
  paramRelyRule?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterStatus?: string;
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
  parameters?: DescribeDBClusterParametersResponseBodyParameters;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
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

