// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelAppRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appItemId?: string;
  static names(): { [key: string]: string } {
    return {
      appItemId: 'AppItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

