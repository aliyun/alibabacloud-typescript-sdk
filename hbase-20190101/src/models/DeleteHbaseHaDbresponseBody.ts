// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHBaseHaDBResponseBody extends $dara.Model {
  /**
   * @example
   * B409CF51-E01F-4551-BE40-123678FA9026
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

