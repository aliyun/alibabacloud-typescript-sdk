// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs. The list consists of one or more application IDs. An application ID is the value of the AppId parameter returned by the [CreateAppInfo](https://help.aliyun.com/document_detail/113266.html) or [GetAppInfos](https://help.aliyun.com/document_detail/114000.html) operation.
   * - A maximum of 10 IDs are supported.
   * - Separate multiple IDs with commas (,).
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

