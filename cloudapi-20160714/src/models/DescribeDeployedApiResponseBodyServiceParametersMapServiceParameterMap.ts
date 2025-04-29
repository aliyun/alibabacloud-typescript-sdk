// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployedApiResponseBodyServiceParametersMapServiceParameterMap extends $dara.Model {
  /**
   * @remarks
   * The name of the front-end input parameter.
   * 
   * @example
   * sex
   */
  requestParameterName?: string;
  /**
   * @remarks
   * The name of the backend service parameter.
   * 
   * @example
   * sex
   */
  serviceParameterName?: string;
  static names(): { [key: string]: string } {
    return {
      requestParameterName: 'RequestParameterName',
      serviceParameterName: 'ServiceParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestParameterName: 'string',
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

