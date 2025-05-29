// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindDirectoryResponseBody extends $dara.Model {
  /**
   * @example
   * 3CB843A9-DD34-4881-B8D6-B0D539D111E4
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

