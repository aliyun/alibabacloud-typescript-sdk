// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The current value of the configuration parameter.
   * 
   * @example
   * 10800000
   */
  currentValue?: string;
  /**
   * @remarks
   * Indicates whether a restart is required for parameter modifications to take effect. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  forceRestartInstance?: string;
  /**
   * @remarks
   * Indicates whether the configuration parameter can be modified. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isChangeableConfig?: string;
  /**
   * @remarks
   * The valid values of the configuration parameter.
   * 
   * @example
   * [0-2147483647]
   */
  optionalRange?: string;
  /**
   * @remarks
   * The description of the configuration parameter.
   * 
   * @example
   * Sets the maximum allowed duration of any statement, A value of 0 turns off the timeout.
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the configuration parameter.
   * 
   * @example
   * statement_timeout
   */
  parameterName?: string;
  /**
   * @remarks
   * The default value of the configuration parameter.
   * 
   * @example
   * 10800000
   */
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'CurrentValue',
      forceRestartInstance: 'ForceRestartInstance',
      isChangeableConfig: 'IsChangeableConfig',
      optionalRange: 'OptionalRange',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'string',
      forceRestartInstance: 'string',
      isChangeableConfig: 'string',
      optionalRange: 'string',
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

export class DescribeParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried configuration parameters.
   */
  parameters?: DescribeParametersResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62506167-D284-562A-B7C2-0A**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyParameters },
      requestId: 'string',
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

