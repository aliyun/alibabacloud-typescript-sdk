// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiMcpServerResponseBody extends $dara.Model {
  /**
   * @example
   * 9BFC4AC1-6BE4-5405-BDEC-CA288D404812
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

