// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

