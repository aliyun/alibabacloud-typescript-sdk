// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContinueDBClusterMigrationResponseBody extends $dara.Model {
  /**
   * @example
   * D2056BBE-FF76-5825-AB63-5CB1ABB46218
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

