// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseKmsInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
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

