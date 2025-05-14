// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGlobalDataNetworkResponseBody extends $dara.Model {
  /**
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
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

