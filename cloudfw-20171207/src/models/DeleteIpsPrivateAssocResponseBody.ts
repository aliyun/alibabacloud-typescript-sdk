// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpsPrivateAssocResponseBody extends $dara.Model {
  /**
   * @example
   * 133173B9-8010-5DF5*****
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

