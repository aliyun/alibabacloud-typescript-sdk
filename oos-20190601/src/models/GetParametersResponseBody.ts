// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetParametersResponseBodyParameters } from "./GetParametersResponseBodyParameters";


export class GetParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Invalid parameters.
   */
  invalidParameters?: string[];
  /**
   * @remarks
   * The information about the common parameters.
   */
  parameters?: GetParametersResponseBodyParameters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2597E94B-5346-42D1-BB58-D3333EDD0975
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invalidParameters: 'InvalidParameters',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidParameters: { 'type': 'array', 'itemType': 'string' },
      parameters: { 'type': 'array', 'itemType': GetParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.invalidParameters)) {
      $dara.Model.validateArray(this.invalidParameters);
    }
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

