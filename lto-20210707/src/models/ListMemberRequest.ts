// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMemberRequest extends $dara.Model {
  contactor?: string;
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  num?: number;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  size?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      contactor: 'Contactor',
      name: 'Name',
      num: 'Num',
      regionId: 'RegionId',
      size: 'Size',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactor: 'string',
      name: 'string',
      num: 'number',
      regionId: 'string',
      size: 'number',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

