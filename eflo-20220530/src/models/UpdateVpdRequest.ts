// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateVpdRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPD instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpd-omqutbff
   */
  vpdId?: string;
  /**
   * @remarks
   * The name of the VPD instance.
   * 
   * @example
   * vpd-lingjun
   */
  vpdName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vpdId: 'VpdId',
      vpdName: 'VpdName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vpdId: 'string',
      vpdName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

