// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCustomScenePolicyResponseBody extends $dara.Model {
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
   * 65C66B7B-671A-8297-9187-2R5477247B76
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

