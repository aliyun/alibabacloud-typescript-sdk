// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstanceSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud disk access protocol type. Valid values:
   * 
   * - iscsi: the default protocol for standard cloud disks. Both rbd cloud disks and standard cloud disks support this protocol.
   * 
   *  - rbd: the default protocol for rbd cloud disks. Only rbd cloud disks support this mount protocol.
   * 
   * @example
   * iscsi
   */
  diskAccessProtocol?: string;
  /**
   * @remarks
   * The type of the shared cloud disk to be created. Valid values:
   * 
   * - standard: standard cloud disk.
   * - rbd: rbd cloud disk.
   * 
   * > 
   * > - If no shared cloud disk type is specified, a standard cloud disk is created by default.
   * > - An rbd shared cloud disk can be created only when the parent disk type is rbd.
   * 
   * @example
   * standard
   */
  diskType?: string;
  /**
   * @remarks
   * The list of instance IDs.
   * 
   * This parameter is required.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The file loading rate optimization parameter.
   */
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

