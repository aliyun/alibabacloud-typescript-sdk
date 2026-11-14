// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WarmPoolCurrentError extends $dara.Model {
  /**
   * @remarks
   * The error code of the current error.
   * 
   * @example
   * SourceNotFound
   */
  code?: string;
  /**
   * @remarks
   * The description of the current error.
   * 
   * @example
   * Source template does not exist
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

