// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCustomScenePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1
   */
  policyId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5CC228B4-7A67-4016-9C9F-4A4133494A91
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
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

