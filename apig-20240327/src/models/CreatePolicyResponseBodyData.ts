// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * p-cq7l5s5lhtgi6qasr***
   */
  policyId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'policyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

