// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLangfuseUserResponseBodyData extends $dara.Model {
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

export class DeleteLangfuseUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response result.
   */
  data?: DeleteLangfuseUserResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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
      data: DeleteLangfuseUserResponseBodyData,
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

