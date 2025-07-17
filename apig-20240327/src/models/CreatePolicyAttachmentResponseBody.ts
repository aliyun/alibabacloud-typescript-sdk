// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyAttachmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Policy Mount ID
   * 
   * @example
   * pr-cqooju5lhtgquuj6***
   */
  policyAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      policyAttachmentId: 'policyAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * Response data.
   */
  data?: CreatePolicyAttachmentResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C64***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreatePolicyAttachmentResponseBodyData,
      message: 'string',
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

