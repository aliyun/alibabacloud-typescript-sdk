// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePerspectiveResponseBody extends $dara.Model {
  /**
   * @example
   * 3001
   */
  perspectiveId?: string;
  /**
   * @example
   * F285D735-D580-18A8-B97F-B2E72B00F101
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      perspectiveId: 'PerspectiveId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perspectiveId: 'string',
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

