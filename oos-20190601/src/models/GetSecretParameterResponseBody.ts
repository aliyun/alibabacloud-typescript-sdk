// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSecretParameterResponseBodyParameter } from "./GetSecretParameterResponseBodyParameter";


export class GetSecretParameterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the encryption parameter.
   */
  parameter?: GetSecretParameterResponseBodyParameter;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7F14FB7C-C9BE-44AE-92ED-21ACC02FBFD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: GetSecretParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameter && typeof (this.parameter as any).validate === 'function') {
      (this.parameter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

