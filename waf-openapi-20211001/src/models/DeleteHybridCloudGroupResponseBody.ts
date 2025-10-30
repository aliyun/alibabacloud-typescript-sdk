// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHybridCloudGroupResponseBody extends $dara.Model {
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-*****60D5EB0
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

