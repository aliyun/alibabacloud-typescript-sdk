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

