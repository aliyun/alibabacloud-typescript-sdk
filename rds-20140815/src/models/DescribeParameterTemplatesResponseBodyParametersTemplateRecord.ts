// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesResponseBodyParametersTemplateRecord extends $dara.Model {
  /**
   * @remarks
   * The valid values of the parameter.
   * 
   * @example
   * [0-1024]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the parameter can be modified. Valid values:
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
   * Indicates whether you must restart the instance for the modifications to take effect. Valid values:
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
   * The description of the parameter.
   * 
   * @example
   * Page numbers of multi blocks reading once in some ddl query.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * loose_multi_blocks_ddl_count
   */
  parameterName?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 0
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

