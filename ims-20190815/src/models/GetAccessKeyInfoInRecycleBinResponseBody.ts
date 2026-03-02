// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccessKeyInfoInRecycleBinResponseBodyAccessKey extends $dara.Model {
  accessKeyId?: string;
  createDate?: string;
  deleteDate?: string;
  recycleDate?: string;
  userId?: string;
  userPrincipalName?: string;
  userRecycled?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
      deleteDate: 'DeleteDate',
      recycleDate: 'RecycleDate',
      userId: 'UserId',
      userPrincipalName: 'UserPrincipalName',
      userRecycled: 'UserRecycled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      createDate: 'string',
      deleteDate: 'string',
      recycleDate: 'string',
      userId: 'string',
      userPrincipalName: 'string',
      userRecycled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccessKeyInfoInRecycleBinResponseBody extends $dara.Model {
  accessKey?: GetAccessKeyInfoInRecycleBinResponseBodyAccessKey;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: GetAccessKeyInfoInRecycleBinResponseBodyAccessKey,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessKey && typeof (this.accessKey as any).validate === 'function') {
      (this.accessKey as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

