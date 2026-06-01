// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRayHistoryServerResponseBody extends $dara.Model {
  /**
   * @example
   * 78F6FCE2-278F-4C4A-A6B7-DD8ECEA9C456
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

