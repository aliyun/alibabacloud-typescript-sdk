// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIDEEventResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Used for troubleshooting errors.
   * 
   * @example
   * 8abcb91f-d266-4073-b907-2ed670378ed1
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

