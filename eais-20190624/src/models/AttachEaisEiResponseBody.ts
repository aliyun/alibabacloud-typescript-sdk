// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * i-bp14ws9hbt1oe0u9****
   */
  clientInstanceId?: string;
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * C3BCB7DA-BEB6-4982-A765-6EA61EC8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientInstanceId: 'ClientInstanceId',
      eiInstanceId: 'EiInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientInstanceId: 'string',
      eiInstanceId: 'string',
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

