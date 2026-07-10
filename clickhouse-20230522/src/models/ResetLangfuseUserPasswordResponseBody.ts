// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetLangfuseUserPasswordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * john@company.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLangfuseUserPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response result.
   */
  data?: ResetLangfuseUserPasswordResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F75
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ResetLangfuseUserPasswordResponseBodyData,
      requestId: 'string',
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

