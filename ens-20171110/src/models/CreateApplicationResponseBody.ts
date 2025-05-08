// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. This is the unique identifier of the edge application.
   * 
   * @example
   * d0639abf-789a-4527-b420-031d2cd9ad9b
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

