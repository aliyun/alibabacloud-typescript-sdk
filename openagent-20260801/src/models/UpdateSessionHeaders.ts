// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSessionHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The idempotency key for the request. Use the same value when you retry the same update request.
   * 
   * @example
   * update-session-example-001
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

