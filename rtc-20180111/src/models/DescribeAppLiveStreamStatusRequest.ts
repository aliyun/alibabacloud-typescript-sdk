// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppLiveStreamStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can create and query the application ID in the console. You can specify only one application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac7N****
   */
  appId?: string;
  /**
   * @remarks
   * A parameter that ensures the idempotence of the request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

