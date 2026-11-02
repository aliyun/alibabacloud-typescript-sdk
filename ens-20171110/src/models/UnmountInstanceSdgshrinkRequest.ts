// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnmountInstanceSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The SDG ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIdsShrink: 'InstanceIds',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdsShrink: 'string',
      SDGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

