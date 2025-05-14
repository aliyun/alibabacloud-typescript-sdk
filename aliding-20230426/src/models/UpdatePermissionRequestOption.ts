// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePermissionRequestOption extends $dara.Model {
  /**
   * @example
   * 10
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

