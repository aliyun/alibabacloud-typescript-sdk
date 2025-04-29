// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyServiceParametersServiceParameter extends $dara.Model {
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
   * The data type of the parameter. Valid values: STRING, NUMBER, and BOOLEAN.
   * 
   * @example
   * String
   */
  parameterType?: string;
  /**
   * @remarks
   * The mapped parameter name in the backend service.
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

