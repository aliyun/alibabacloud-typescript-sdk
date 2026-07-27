// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUpdateDesensStatusListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The switch status. Valid values:
   * 1: enabled
   * 0: disabled
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  desensStatus?: number;
  /**
   * @remarks
   * The list of switch IDs.
   * 
   * This parameter is required.
   */
  idsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      desensStatus: 'DesensStatus',
      idsShrink: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensStatus: 'number',
      idsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

