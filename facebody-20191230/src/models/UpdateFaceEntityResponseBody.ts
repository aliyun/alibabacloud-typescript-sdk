// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFaceEntityResponseBody extends $dara.Model {
  /**
   * @example
   * DA7CAFEB-0A37-4496-9CDF-E3DBB6309CB2
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

