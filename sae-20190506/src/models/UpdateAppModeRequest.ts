// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppModeRequest extends $dara.Model {
  /**
   * @example
   * 7171a6ca-d1cd-4928-8642-7d5cfe69****
   */
  appId?: string;
  /**
   * @example
   * true
   */
  enableIdle?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      enableIdle: 'EnableIdle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      enableIdle: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

