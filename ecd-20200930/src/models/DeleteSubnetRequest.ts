// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSubnetRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      subnetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

