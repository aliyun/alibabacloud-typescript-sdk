// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. To obtain the application ID, call the ListApplication operation.
   * 
   * This parameter is required.
   * 
   * @example
   * d0639abf-789a-4527-b420-031d2cd9ad9b
   */
  appId?: string;
  /**
   * @remarks
   * The timeout period for the asynchronous release. Unit: seconds. Default value: 300.
   * 
   * @example
   * 1800
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

