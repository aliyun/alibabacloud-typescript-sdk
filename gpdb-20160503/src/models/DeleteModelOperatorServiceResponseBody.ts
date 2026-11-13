// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelOperatorServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the model operator service for which the release is accepted. The return of this field does not indicate that the cleanup of underlying resources is complete.
   * 
   * @example
   * adbpg-mo-123456789abc
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

