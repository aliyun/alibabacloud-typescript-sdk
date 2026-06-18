// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyDataConfigParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 存储节点私有协议开关(-1关闭，0开启)
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * CONN_POOL_XPROTO_STORAGE_DB_PORT
   */
  parameterName?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * -1
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

export class DescribeParametersResponseBodyDataRunningParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * 存储节点私有协议开关(-1关闭，0开启)
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * CONN_POOL_XPROTO_STORAGE_DB_PORT
   */
  parameterName?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * -1
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

export class DescribeParametersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of original parameters.
   */
  configParameters?: DescribeParametersResponseBodyDataConfigParameters[];
  DBInstanceId?: string;
  /**
   * @remarks
   * The engine. Default value: polarx.
   * 
   * @example
   * polarx
   */
  engine?: string;
  /**
   * @remarks
   * The DPI engine version. Default value: 2.0.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The list of running parameter details.
   */
  runningParameters?: DescribeParametersResponseBodyDataRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyDataConfigParameters },
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyDataRunningParameters },
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

export class DescribeParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter details.
   */
  data?: DescribeParametersResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeParametersResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

