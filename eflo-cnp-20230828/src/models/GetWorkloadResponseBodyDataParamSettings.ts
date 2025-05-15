// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadResponseBodyDataParamSettings extends $dara.Model {
  /**
   * @remarks
   * Default Parameter Value
   * 
   * @example
   * 100
   */
  defaultValue?: string;
  /**
   * @remarks
   * Parameter Description
   * 
   * @example
   * number
   */
  paramDesc?: string;
  /**
   * @remarks
   * Parameter Name
   * 
   * @example
   * ITERATION
   */
  paramName?: string;
  /**
   * @remarks
   * Parameter Regular Expression
   * 
   * @example
   * [0-9]+
   */
  paramRegex?: string;
  /**
   * @remarks
   * Parameter type
   * 
   * @example
   * number
   */
  paramType?: string;
  /**
   * @remarks
   * Parameter Value
   * 
   * @example
   * 100
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      paramDesc: 'ParamDesc',
      paramName: 'ParamName',
      paramRegex: 'ParamRegex',
      paramType: 'ParamType',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      paramDesc: 'string',
      paramName: 'string',
      paramRegex: 'string',
      paramType: 'string',
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

