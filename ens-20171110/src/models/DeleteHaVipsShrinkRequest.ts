// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHaVipsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  haVipIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      haVipIdsShrink: 'HaVipIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

