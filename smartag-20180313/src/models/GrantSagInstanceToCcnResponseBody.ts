// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantSagInstanceToCcnResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the permission policy.
   * 
   * @example
   * sgc-6z21oj0vjjrx6s****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6E1674AC-083C-4031-B047-7A66E418E0C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

