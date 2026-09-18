// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkerResourceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned by the request.
   * 
   * @example
   * []
   */
  data?: any;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request, which can be used for troubleshooting and diagnostics.
   * 
   * @example
   * 12345678-1234-1234-1234-123456789ABC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
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

