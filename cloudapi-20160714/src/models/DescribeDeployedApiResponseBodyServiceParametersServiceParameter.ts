// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApiResponseBodyServiceParametersServiceParameter extends $dara.Model {
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
   * The data type of the back-end service parameter.
   * 
   * @example
   * String
   */
  parameterType?: string;
  /**
   * @remarks
   * The name of the backend service parameter.
   * 
   * @example
   * clientIp
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'Location',
      parameterType: 'ParameterType',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      parameterType: 'string',
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

