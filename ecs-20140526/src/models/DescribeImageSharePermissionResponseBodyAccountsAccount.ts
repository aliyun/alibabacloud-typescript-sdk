// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSharePermissionResponseBodyAccountsAccount extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1234567890
   */
  aliyunId?: string;
  /**
   * @remarks
   * The time when the image was shared. The time follows the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-01-01T12:05:00Z
   */
  sharedTime?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      sharedTime: 'SharedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'string',
      sharedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

