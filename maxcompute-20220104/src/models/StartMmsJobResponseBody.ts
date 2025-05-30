// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMmsJobResponseBody extends $dara.Model {
  /**
   * @example
   * 88
   */
  data?: number;
  /**
   * @example
   * 5CA6292A-E301-5CD8-B4E2-AF060F99147B
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

