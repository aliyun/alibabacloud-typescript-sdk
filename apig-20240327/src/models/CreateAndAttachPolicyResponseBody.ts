// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Attachment } from "./Attachment";


export class CreateAndAttachPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The association information of the policy.
   */
  attachment?: Attachment;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * p-cq7l5s5lhtgi6qasrdc0
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      attachment: 'attachment',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachment: Attachment,
      policyId: 'string',
    };
  }

  validate() {
    if(this.attachment && typeof (this.attachment as any).validate === 'function') {
      (this.attachment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAndAttachPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CreateAndAttachPolicyResponseBodyData;
  /**
   * @remarks
   * The response message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to trace the call link.
   * 
   * @example
   * 585657D2-1C20-5B8A-AF17-D727C6490BE4
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
      data: CreateAndAttachPolicyResponseBodyData,
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

