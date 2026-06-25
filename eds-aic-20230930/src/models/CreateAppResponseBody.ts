// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 1234
   */
  appId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5138F7E-46B5-526A-8C99-82DEAE6B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
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

