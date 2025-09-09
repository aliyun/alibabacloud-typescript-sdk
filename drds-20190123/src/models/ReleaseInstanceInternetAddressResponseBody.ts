// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseInstanceInternetAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned by the current API.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FD17CD3C-3355-49E8-9231-FE2DB0******
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
      data: 'boolean',
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

