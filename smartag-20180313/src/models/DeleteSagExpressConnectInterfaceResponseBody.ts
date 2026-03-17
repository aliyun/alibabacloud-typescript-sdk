// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSagExpressConnectInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AFF7E5A6-6897-4FDC-A5A8-1978B5B3E545
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

