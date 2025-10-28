// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHealthCheckUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * c627c157-560d-43ff-***************
   */
  appId?: string;
  /**
   * @remarks
   * The health check URL of the application. The URL must start with `http://`, and can be up to 255 characters in length. Example: `http://127.0.0.1:8080/_ehc.html`. If this parameter is not specified, the health check URL of the application is not changed.
   * 
   * @example
   * http://127.0.0.1:8080/_ehc.html
   */
  hcURL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      hcURL: 'hcURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      hcURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

