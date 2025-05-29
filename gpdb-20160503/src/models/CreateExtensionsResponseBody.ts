// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExtensionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the extension that you want to install. Multiple extension names are separated with commas (,).
   * 
   * @example
   * citext, dblink
   */
  extensions?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      extensions: 'Extensions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extensions: 'string',
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

