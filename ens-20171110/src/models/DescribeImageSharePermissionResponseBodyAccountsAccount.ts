// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSharePermissionResponseBodyAccountsAccount extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account with which you share the image.
   * 
   * @example
   * 1515285523xxxx
   */
  aliyunUid?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

