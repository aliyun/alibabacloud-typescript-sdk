// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApiResponseBodyCustomSystemParametersCustomSystemParameter extends $dara.Model {
  /**
   * @remarks
   * Example
   * 
   * @example
   * 192.168.1.1
   */
  demoValue?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 123
   */
  description?: string;
  /**
   * @remarks
   * The parameter location. Valid values: BODY, HEAD, QUERY, and PATH.
   * 
   * @example
   * HEAD
   */
  location?: string;
  /**
   * @remarks
   * The name of the custom system parameter.
   * 
   * @example
   * appid
   */
  parameterName?: string;
  /**
   * @remarks
   * The name of the corresponding backend parameter.
   * 
   * @example
   * clientIp
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      demoValue: 'DemoValue',
      description: 'Description',
      location: 'Location',
      parameterName: 'ParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      demoValue: 'string',
      description: 'string',
      location: 'string',
      parameterName: 'string',
      serviceParameterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

