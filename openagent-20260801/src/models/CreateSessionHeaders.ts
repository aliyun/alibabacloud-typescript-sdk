// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSessionHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The request idempotency key. Use the same value and the same business parameters when retrying the same request.
   * 
   * @example
   * create-session-example-001
   */
  xOpenAgentIdempotencyKey?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xOpenAgentIdempotencyKey: 'X-OpenAgent-Idempotency-Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xOpenAgentIdempotencyKey: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

