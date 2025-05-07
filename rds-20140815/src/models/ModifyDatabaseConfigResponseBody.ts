// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

