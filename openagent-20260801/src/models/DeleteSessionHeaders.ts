// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSessionHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The idempotency key of the request. Subsequent calls after deletion, including those using the same key, return 404 Session.NotFound.
   * 
   * @example
   * delete-session-example-001
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

