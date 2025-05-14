// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPermissionRequestOption extends $dara.Model {
  /**
   * @example
   * 3600
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

