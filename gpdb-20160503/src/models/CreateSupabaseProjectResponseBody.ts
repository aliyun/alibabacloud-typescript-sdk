// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupabaseProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The associated order ID.
   * 
   * @example
   * 278880417310796
   */
  orderId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * spb-xxxx
   */
  projectId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      projectId: 'ProjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      projectId: 'string',
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

