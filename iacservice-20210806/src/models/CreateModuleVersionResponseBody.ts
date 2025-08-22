// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModuleVersionResponseBody extends $dara.Model {
  /**
   * @example
   * v1
   */
  moduleVersion?: string;
  /**
   * @example
   * B6ED9F71-7FA8-598E-B64D-4606FB3FCCC9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleVersion: 'moduleVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleVersion: 'string',
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

