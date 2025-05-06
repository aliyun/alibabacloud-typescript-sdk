// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupResponseBodyParameterGroupParameterDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * back_log
   */
  paramName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 3000
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      paramValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

