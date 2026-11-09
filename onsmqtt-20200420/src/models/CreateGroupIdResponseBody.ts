// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. This is a common parameter. Each request ID is unique.
   * 
   * @example
   * 2C7D722D-0F3D-4415-A9CD-A464D82C****
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

