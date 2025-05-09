// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSecretParametersResponseBodyParameters } from "./GetSecretParametersResponseBodyParameters";


export class GetSecretParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Invalid encryption parameter.
   */
  invalidParameters?: string[];
  /**
   * @remarks
   * The information about the encryption parameter.
   */
  parameters?: GetSecretParametersResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A5320F1D-92D9-44BB-A416-5FC525ED6D57
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
      parameters: { 'type': 'array', 'itemType': GetSecretParametersResponseBodyParameters },
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

