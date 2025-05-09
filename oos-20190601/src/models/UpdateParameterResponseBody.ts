// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateParameterResponseBodyParameter } from "./UpdateParameterResponseBodyParameter";


export class UpdateParameterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the common parameter.
   */
  parameter?: UpdateParameterResponseBodyParameter;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF1AE6DE-61C4-435E-8687-072CFACCCEC7
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
      parameter: UpdateParameterResponseBodyParameter,
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

