// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters extends $dara.Model {
  /**
   * @remarks
   * The value range of the parameter.
   * 
   * @example
   * [utf8|latin1|gbk|utf8mb4]
   */
  checkingCode?: string;
  /**
   * @remarks
   * The data type of the parameter value. Valid values:
   * 
   * - **INT**: integer
   * 
   * - **STRING**: string
   * 
   * - **B**: byte
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
   * The divisibility factor. For parameters of the integer and byte types, the parameter value must not only fall within the valid range but also be a multiple of the factor (which cannot be 0).
   * 
   * @example
   * 20
   */
  factor?: string;
  /**
   * @remarks
   * Specifies whether a restart is required for the parameter to take effect. Valid values:
   * 
   * - **false**: no
   * 
   * - **true**: yes
   * 
   * @example
   * true
   */
  forceRestart?: boolean;
  /**
   * @remarks
   * Specifies whether the parameter is modifiable. Valid values:
   * 
   * - **false**: not modifiable
   * 
   * - **true**: modifiable
   * 
   * @example
   * true
   */
  isModifiable?: boolean;
  /**
   * @remarks
   * Specifies whether the parameter is a global parameter. Valid values:
   * 
   * - **0**: The parameter is a global parameter. Parameter modifications have a default application to other nodes and cannot be canceled.
   * 
   * - **1**: The parameter is not a global parameter. You can specify the nodes to which modifications to this parameter are applied.
   * 
   * @example
   * 1
   */
  isNodeAvailable?: string;
  /**
   * @remarks
   * The parameter dependency.
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
   * - **normal**: normal
   *  
   * - **modifying**: modifying
   * 
   * @example
   * normal
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

export class DescribeDBNodesParametersResponseBodyDBNodeIds extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-bp1r4qe3s534*****
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The list of running parameters for the current node.
   */
  runningParameters?: DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters },
    };
  }

  validate() {
    if(Array.isArray(this.runningParameters)) {
      $dara.Model.validateArray(this.runningParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodesParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node IDs.
   */
  DBNodeIds?: DescribeDBNodesParametersResponseBodyDBNodeIds[];
  /**
   * @remarks
   * The database type. The value is fixed as **MySQL**.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The MySQL version. Valid values:
   * 
   * - **5.6**
   * 
   * - **5.7**
   * 
   * - **8.0**
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
   * The request ID.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeIds: 'DBNodeIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeIds: { 'type': 'array', 'itemType': DescribeDBNodesParametersResponseBodyDBNodeIds },
      DBType: 'string',
      DBVersion: 'string',
      engine: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeIds)) {
      $dara.Model.validateArray(this.DBNodeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

