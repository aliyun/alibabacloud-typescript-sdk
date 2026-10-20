// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOptimizeRunRequest extends $dara.Model {
  /**
   * @remarks
   * The extra parameters. To retry a failed artifact application, set application.action to retry and do not specify status. Do not specify this field when canceling a run.
   * 
   * @example
   * {"application":{"action":"retry"}}
   */
  extra?: { [key: string]: any };
  /**
   * @remarks
   * The status. Only Cancelled is supported when canceling a run. The execution status is maintained by the server. Do not specify this field when retrying an artifact application.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The idempotency token.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      status: 'status',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(this.extra) {
      $dara.Model.validateMap(this.extra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

