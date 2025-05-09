// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetParameterResponseBodyParameter } from "./GetParameterResponseBodyParameter";


export class GetParameterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the common parameter.
   */
  parameter?: GetParameterResponseBodyParameter;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BA326372-2A10-4C3B-BE3E-6439DB7557CC
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
      parameter: GetParameterResponseBodyParameter,
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

