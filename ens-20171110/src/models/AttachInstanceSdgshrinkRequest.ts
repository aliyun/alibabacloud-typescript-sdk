// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstanceSDGShrinkRequest extends $dara.Model {
  diskAccessProtocol?: string;
  diskType?: string;
  /**
   * @remarks
   * The IDs of the instances.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  loadOptShrink?: string;
  /**
   * @remarks
   * The ID of the SDG.
   * 
   * This parameter is required.
   * 
   * @example
   * sdg-xxxx
   */
  SDGId?: string;
  static names(): { [key: string]: string } {
    return {
      diskAccessProtocol: 'DiskAccessProtocol',
      diskType: 'DiskType',
      instanceIdsShrink: 'InstanceIds',
      loadOptShrink: 'LoadOpt',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskAccessProtocol: 'string',
      diskType: 'string',
      instanceIdsShrink: 'string',
      loadOptShrink: 'string',
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

