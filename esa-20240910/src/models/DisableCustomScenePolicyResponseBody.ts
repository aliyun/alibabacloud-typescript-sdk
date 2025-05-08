// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableCustomScenePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the disabled policy.
   * 
   * @example
   * 100001
   */
  policyId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
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

