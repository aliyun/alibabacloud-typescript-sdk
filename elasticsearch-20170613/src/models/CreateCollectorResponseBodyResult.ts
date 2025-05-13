// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCollectorResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ct-cn-4135is2tj194p****
   */
  resId?: string;
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

