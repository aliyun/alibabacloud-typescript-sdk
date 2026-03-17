// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmartAccessGatewayClientUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 09AD82DC-FE26-4B66-B526-2FA6BE82A4D3
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

