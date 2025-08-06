// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of applications. You can obtain application IDs from the response to the [CreateAppInfo](https://help.aliyun.com/document_detail/113266.html) or [ListAppInfo](https://help.aliyun.com/document_detail/114000.html) operation.
   * 
   * *   You can specify a maximum of 10 application IDs.
   * *   Separate application IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * app-****
   */
  appIds?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'AppIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

