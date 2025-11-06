// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetadataResponseBodyData extends $dara.Model {
  endpoint?: string;
  hasPretendPermission?: boolean;
  internalEndpoint?: string;
  pretendUserId?: string;
  userStatus?: number;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      hasPretendPermission: 'HasPretendPermission',
      internalEndpoint: 'InternalEndpoint',
      pretendUserId: 'PretendUserId',
      userStatus: 'UserStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      hasPretendPermission: 'boolean',
      internalEndpoint: 'string',
      pretendUserId: 'string',
      userStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetadataResponseBody extends $dara.Model {
  code?: number;
  data?: MetadataResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: MetadataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

