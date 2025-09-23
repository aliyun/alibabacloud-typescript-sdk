// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the request is successful. Other values indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * No business data is returned for this parameter.
   * 
   * @example
   * No business data is returned for this parameter.
   */
  data?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3488F1D-C444-17D0-BA4F-5374BA0F3562
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
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

