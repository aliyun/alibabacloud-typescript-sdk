// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachAndDeletePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy association ID.
   * 
   * @example
   * pr-cq7l5s5lhtgi6qasrdc0
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

