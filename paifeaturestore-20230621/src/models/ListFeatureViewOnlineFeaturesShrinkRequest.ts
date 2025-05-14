// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewOnlineFeaturesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  joinIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      joinIdsShrink: 'JoinIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

