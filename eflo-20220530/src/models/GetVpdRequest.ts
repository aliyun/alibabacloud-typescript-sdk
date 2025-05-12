// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpdRequest extends $dara.Model {
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
   * vpd-ze3na0wf
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

