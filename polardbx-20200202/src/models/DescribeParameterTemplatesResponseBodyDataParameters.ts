// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesResponseBodyDataParameters extends $dara.Model {
  /**
   * @example
   * [0|1]
   */
  checkingCode?: string;
  /**
   * @example
   * 0
   */
  dynamic?: number;
  /**
   * @example
   * polarx hatp addition param
   */
  parameterDescription?: string;
  /**
   * @example
   * loose_enable_gts
   */
  parameterName?: string;
  /**
   * @example
   * 1
   */
  parameterValue?: string;
  /**
   * @example
   * 0
   */
  revisable?: number;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      dynamic: 'Dynamic',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      revisable: 'Revisable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      dynamic: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      revisable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

