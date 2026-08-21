// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiPolicyReference extends $dara.Model {
  /**
   * @remarks
   * The policy attachment ID.
   * 
   * @example
   * pa-3c8ayyy
   */
  policyAttachmentId?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * pol-9f2exxx
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyAttachmentId: 'policyAttachmentId',
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyAttachmentId: 'string',
      policyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

