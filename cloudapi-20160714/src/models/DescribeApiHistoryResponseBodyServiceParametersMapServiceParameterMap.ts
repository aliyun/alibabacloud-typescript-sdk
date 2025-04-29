// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiHistoryResponseBodyServiceParametersMapServiceParameterMap extends $dara.Model {
  /**
   * @remarks
   * The corresponding frontend parameter name. The value must be contained in RequestParametersObject and match RequestParam.ApiParameterName.
   * 
   * @example
   * sex
   */
  requestParameterName?: string;
  /**
   * @remarks
   * The mapped parameter name in the backend service.
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

