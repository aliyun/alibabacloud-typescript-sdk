// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can obtain the value from the AppId response parameter returned by the [Create an application](https://help.aliyun.com/document_detail/113266.html) or [List applications](https://help.aliyun.com/document_detail/114000.html) API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app-****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

