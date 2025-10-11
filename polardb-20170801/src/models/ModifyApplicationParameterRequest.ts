// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApplicationParameterRequestParameters extends $dara.Model {
  /**
   * @example
   * name
   */
  parameterName?: string;
  /**
   * @example
   * value
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyApplicationParameterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * name
   */
  parameterName?: string;
  /**
   * @example
   * value
   */
  parameterValue?: string;
  parameters?: ModifyApplicationParameterRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      parameters: { 'type': 'array', 'itemType': ModifyApplicationParameterRequestParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

