// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Load balancer ID.
   * 
   * @example
   * 99867648760****
   */
  id?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

