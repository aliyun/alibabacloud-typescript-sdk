// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [ROW|STATEMENT|MIXED]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the parameter setting can be modified. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  forceModify?: string;
  /**
   * @remarks
   * Indicates whether a cluster restart is required to make the parameter modification take effect. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  forceRestart?: string;
  /**
   * @remarks
   * Indicates whether the parameter is a global parameter. Valid values:
   * 
   * *   **0**: yes. The modified parameter value is synchronized to other nodes by default.
   * *   **1**: no. You can customize the nodes to which the modified parameter value can be synchronized.
   * 
   * @example
   * 1
   */
  isNodeAvailable?: string;
  /**
   * @remarks
   * The parameter dependencies.
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
   * What form of binary logging the master will use.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * binlog_format
   */
  parameterName?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * ROW
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceModify: 'ForceModify',
      forceRestart: 'ForceRestart',
      isNodeAvailable: 'IsNodeAvailable',
      paramRelyRule: 'ParamRelyRule',
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
      isNodeAvailable: 'string',
      paramRelyRule: 'string',
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

