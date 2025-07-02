// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableFunctionInvocationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to immediately terminate all ongoing requests.
   * 
   * @example
   * false
   */
  abortOngoingRequest?: boolean;
  /**
   * @remarks
   * The reason for disabling the function\\"s invocation.
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      abortOngoingRequest: 'abortOngoingRequest',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abortOngoingRequest: 'boolean',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

