// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebLogEntry extends $dara.Model {
  /**
   * @remarks
   * The message returned. Valid values:
   * 
   * *   If the request was successful, a success message is returned.
   * *   If the request failed, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

