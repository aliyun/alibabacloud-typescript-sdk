// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpdRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region in which the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Lingjun CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-zr0farea
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

