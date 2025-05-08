// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAssumeSlrRoleResponseBody extends $dara.Model {
  /**
   * @example
   * aliuid:xxx assumeOssRole not exist,serviceName:realtimelogpush.dcdnservices.aliyuncs.com
   */
  errorMsg?: string;
  /**
   * @example
   * true
   */
  isExist?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 34DCBC8A-****-****-****-6DAA11D7DDBD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      isExist: 'IsExist',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      isExist: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

