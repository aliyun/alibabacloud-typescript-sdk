// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseInstanceParametersResponseBodyConfigParameters extends $dara.Model {
  /**
   * @remarks
   * The value range of the parameter.
   * 
   * > The value range varies by parameter.
   * 
   * @example
   * [1-65535]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether you can modify the parameter value. Valid values:
   * 
   * - `true`: You can modify the parameter value.
   * 
   * - `false`: You cannot modify the parameter value.
   * 
   * @example
   * true
   */
  forceModify?: string;
  /**
   * @remarks
   * Indicates if the database must be restarted for a parameter modification to take effect. Valid values:
   * 
   * - `true`: A restart is required. To apply changes for a parameter that requires a restart, you must set the `ForceRestart` parameter to `true`.
   * 
   * - `false`: A restart is not required.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  forceRestart?: string;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * Auto-increment columns are incremented by this
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * auto_increment_increment
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * > The value varies by parameter.
   * 
   * @example
   * 1
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
      forceModify: 'string',
      forceRestart: 'string',
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

export class DescribeDatabaseInstanceParametersResponseBodyRunningParameters extends $dara.Model {
  /**
   * @remarks
   * The value range of the parameter.
   * 
   * > The value range varies by parameter.
   * 
   * @example
   * [ON|OFF]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether you can modify the parameter value. Valid values:
   * 
   * - `true`: You can modify the parameter value.
   * 
   * - `false`: You cannot modify the parameter value.
   * 
   * @example
   * true
   */
  forceModify?: string;
  /**
   * @remarks
   * Indicates if the database must be restarted for a parameter modification to take effect. Valid values:
   * 
   * - `true`: A restart is required. To apply changes for a parameter that requires a restart, you must set the `ForceRestart` parameter to `true`.
   * 
   * - `false`: A restart is not required.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  forceRestart?: string;
  /**
   * @remarks
   * The description of the running parameter.
   * 
   * @example
   * When this variable has a value of 1 (the default), the server automatically grants the EXECUTE and ALTER ROUTINE privileges to the creator of a stored routine, if the user cannot already execute and alter or drop the routine. (The ALTER ROUTINE privilege is required to drop the routine.) The server also automatically drops those privileges from the creator when the routine is dropped. If automatic_sp_privileges is 0, the server does not automatically add or drop these privileges.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * autocommit
   */
  parameterName?: string;
  /**
   * @remarks
   * The value of the running parameter.
   * 
   * @example
   * ON
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
      forceModify: 'string',
      forceRestart: 'string',
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

export class DescribeDatabaseInstanceParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of configuration parameters being synchronized. After you modify and submit parameters, the instance starts to synchronize them. Once synchronization is complete, these parameters are removed from this list.
   */
  configParameters?: DescribeDatabaseInstanceParametersResponseBodyConfigParameters[];
  /**
   * @remarks
   * The database engine. Currently, only `MySQL` is supported.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The engine version. Valid values:
   * 
   * - `5.7`: MySQL 5.7.
   * 
   * - `8.0`: MySQL 8.0.
   * 
   * @example
   * 5.5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  /**
   * @remarks
   * A list of running parameters.
   */
  runningParameters?: DescribeDatabaseInstanceParametersResponseBodyRunningParameters[];
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
      configParameters: { 'type': 'array', 'itemType': DescribeDatabaseInstanceParametersResponseBodyConfigParameters },
      engine: 'string',
      engineVersion: 'string',
      requestId: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeDatabaseInstanceParametersResponseBodyRunningParameters },
    };
  }

  validate() {
    if(Array.isArray(this.configParameters)) {
      $dara.Model.validateArray(this.configParameters);
    }
    if(Array.isArray(this.runningParameters)) {
      $dara.Model.validateArray(this.runningParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

