// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateEstimateCostRequestParameters extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * Name
   */
  parameterKey?: string;
  /**
   * @remarks
   * Details of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * DemoEip
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterKey: 'ParameterKey',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterKey: 'string',
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

