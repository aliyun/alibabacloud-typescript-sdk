// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogtailConfig } from "./LogtailConfig";


export class UpdateConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The body of the request.
   */
  body?: LogtailConfig;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: LogtailConfig,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

