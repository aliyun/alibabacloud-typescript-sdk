// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyConfigParametersDBInstanceParameter extends $dara.Model {
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * This parameter sets the default fill factor value at the server scope. A fill factor is provided to optimize index data storage and performance.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * fill factor
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 50
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  DBInstanceParameter?: DescribeParametersResponseBodyConfigParametersDBInstanceParameter[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceParameter: 'DBInstanceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersDBInstanceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceParameter)) {
      $dara.Model.validateArray(this.DBInstanceParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyParamGroupInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * rpg-sys-01040401010200
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The description of the parameter template.
   * 
   * @example
   * sync_binlog=1000, innodb_flush_log_at_trx_commit=2, async
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * @example
   * mysql_innodb_8.0_basic_normal_high
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The type of the parameter template.
   * 
   * @example
   * 0
   */
  parameterGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      paramGroupId: 'ParamGroupId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramGroupId: 'string',
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParametersDBInstanceParameter extends $dara.Model {
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 100
   */
  parameterDefaultValue?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * This parameter sets the default fill factor value at the server scope. A fill factor is provided to optimize index data storage and performance.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * fill factor
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 0
   */
  parameterValue?: string;
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * 1~100
   */
  parameterValueRange?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDefaultValue: 'ParameterDefaultValue',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      parameterValueRange: 'ParameterValueRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDefaultValue: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      parameterValueRange: 'string',
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
  DBInstanceParameter?: DescribeParametersResponseBodyRunningParametersDBInstanceParameter[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceParameter: 'DBInstanceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersDBInstanceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceParameter)) {
      $dara.Model.validateArray(this.DBInstanceParameter);
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
   * The list of parameters that are being synchronized.
   * 
   * > After you modify and submit the parameters, you must wait for the parameters to be synchronized to the instance. After the synchronization, you can delete the parameters from the list.
   */
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 5.5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The information about the parameter template.
   */
  paramGroupInfo?: DescribeParametersResponseBodyParamGroupInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters that are in use.
   */
  runningParameters?: DescribeParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      paramGroupInfo: 'ParamGroupInfo',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: DescribeParametersResponseBodyConfigParameters,
      engine: 'string',
      engineVersion: 'string',
      paramGroupInfo: DescribeParametersResponseBodyParamGroupInfo,
      requestId: 'string',
      runningParameters: DescribeParametersResponseBodyRunningParameters,
    };
  }

  validate() {
    if(this.configParameters && typeof (this.configParameters as any).validate === 'function') {
      (this.configParameters as any).validate();
    }
    if(this.paramGroupInfo && typeof (this.paramGroupInfo as any).validate === 'function') {
      (this.paramGroupInfo as any).validate();
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

