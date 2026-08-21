// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Set this parameter to the value of AppId returned by the [CreateApp](https://help.aliyun.com/document_detail/113266.html) or [ListApps](https://help.aliyun.com/document_detail/114000.html) operation.
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

