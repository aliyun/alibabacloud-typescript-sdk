// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEaisEiResponseBody extends $dara.Model {
  /**
   * @example
   * eais-hzu00xufs1c8j5nn****
   */
  eiInstanceId?: string;
  /**
   * @example
   * F5FEB9AA-C108-577C-AB3D-D13524AF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eiInstanceId: 'EiInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

