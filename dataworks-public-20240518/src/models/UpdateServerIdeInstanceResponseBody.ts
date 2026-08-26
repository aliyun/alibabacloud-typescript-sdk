// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerIdeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The personal development environment instance ID.
   * 
   * @example
   * 699573
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7D55162-4489-1619-AAF5-3F97D5FCA948
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

