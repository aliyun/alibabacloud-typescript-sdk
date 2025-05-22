// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChannelAccountResponseBody extends $dara.Model {
  dynamicCode?: string;
  dynamicMessage?: string;
  errCode?: string;
  errMessage?: string;
  httpStatusCode?: number;
  password?: string;
  requestId?: string;
  success?: boolean;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      password: 'Password',
      requestId: 'RequestId',
      success: 'Success',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      password: 'string',
      requestId: 'string',
      success: 'boolean',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

