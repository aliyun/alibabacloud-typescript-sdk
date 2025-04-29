// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodySystemParametersSystemParameter extends $dara.Model {
  /**
   * @remarks
   * The sample value.
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
   * system parameters description
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
   * The system parameter. Valid values: CaClientIp, CaDomain, CaRequestHandleTime, CaAppId, CaRequestId, CaHttpSchema, and CaProxy.
   * 
   * @example
   * CaClientIp
   */
  parameterName?: string;
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

