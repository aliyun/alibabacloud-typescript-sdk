// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackendModelResponseBody extends $dara.Model {
  /**
   * @example
   * c16a1880f5164d779f6a54f64d997cd9
   */
  operationId?: string;
  /**
   * @example
   * 19B89B04-418B-55EE-94A8-6B42CA06002A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'OperationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

