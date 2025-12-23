// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveIpamMembersResponseBody extends $dara.Model {
  /**
   * @example
   * 3F814C37-B032-5477-AF5A-2925D0593CD4
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

