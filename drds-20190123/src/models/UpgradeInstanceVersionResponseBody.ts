// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeInstanceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the request.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4305162
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

