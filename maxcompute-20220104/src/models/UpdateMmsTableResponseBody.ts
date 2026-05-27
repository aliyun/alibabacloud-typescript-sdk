// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsTableResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  data?: number;
  /**
   * @example
   * EA1320AB-7766-5EC7-B0F6-8B20E2298567
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

