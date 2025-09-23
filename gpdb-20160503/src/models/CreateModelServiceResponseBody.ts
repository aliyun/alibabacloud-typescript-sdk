// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelServiceResponseBody extends $dara.Model {
  /**
   * @example
   * ms-xxxxxxxxx
   */
  modelServiceId?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelServiceId: 'ModelServiceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelServiceId: 'string',
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

