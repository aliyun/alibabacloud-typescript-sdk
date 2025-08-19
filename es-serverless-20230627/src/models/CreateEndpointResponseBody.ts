// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEndpointResponseBodyResult extends $dara.Model {
  /**
   * @example
   * essep-abd***dks
   */
  endpointId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'endpointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2C5DAA30-****-5181-9B87-9D6181016197
   */
  requestId?: string;
  result?: CreateEndpointResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateEndpointResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

