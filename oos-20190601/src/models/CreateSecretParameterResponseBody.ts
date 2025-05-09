// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSecretParameterResponseBodyParameter } from "./CreateSecretParameterResponseBodyParameter";


export class CreateSecretParameterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the encryption parameter.
   */
  parameter?: CreateSecretParameterResponseBodyParameter;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B419FF3-ABC6-4DF0-95E5-636DC8CBB8AF
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
      parameter: CreateSecretParameterResponseBodyParameter,
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

