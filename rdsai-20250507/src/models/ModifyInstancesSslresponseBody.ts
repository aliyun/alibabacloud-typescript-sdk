// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstancesSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs of AI applications that were successfully modified.
   * 
   * @example
   * [
   *     "ra-supabase-xxx",
   *     "ra-supabase-xxx"
   *   ]
   */
  instanceNames?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32DEFB4A-xxxx-ADD5-918E4FD7AB8C
   */
  requestId?: string;
  SSLExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      instanceNames: 'InstanceNames',
      requestId: 'RequestId',
      SSLExpiredTime: 'SSLExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      SSLExpiredTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceNames)) {
      $dara.Model.validateArray(this.instanceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

