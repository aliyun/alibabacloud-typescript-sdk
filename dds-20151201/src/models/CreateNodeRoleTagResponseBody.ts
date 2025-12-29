// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeRoleTagResponseBody extends $dara.Model {
  /**
   * @example
   * B0B7DE3E-xxxx-xxxx-xxxx-0B16F8834E0B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

