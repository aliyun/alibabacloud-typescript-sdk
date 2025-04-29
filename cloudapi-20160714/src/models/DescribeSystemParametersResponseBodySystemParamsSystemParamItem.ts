// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSystemParametersResponseBodySystemParamsSystemParamItem extends $dara.Model {
  /**
   * @remarks
   * Examples
   * 
   * @example
   * 192.168.1.1
   */
  demoValue?: string;
  /**
   * @remarks
   * The description of a parameter.
   * 
   * @example
   * Client IP Address
   */
  description?: string;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * CaClientIp
   */
  paramName?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * string
   */
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      paramName: 'ParamName',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      paramName: 'string',
      paramType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

