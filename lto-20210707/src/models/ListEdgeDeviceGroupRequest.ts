// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeDeviceGroupRequest extends $dara.Model {
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
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      num: 'Num',
      regionId: 'RegionId',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      num: 'number',
      regionId: 'string',
      size: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

