// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 8afff6c8c4c6447abb035812e4d66b65
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6C87A26A-6A18-4B8E-8099-705278381A2C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
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

