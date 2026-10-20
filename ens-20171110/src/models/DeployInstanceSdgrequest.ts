// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployInstanceSDGRequest extends $dara.Model {
  /**
   * @remarks
   * The SDG deployment type. Set the value to shared, which indicates read/write splitting shared deployment. In this mode, the SDG content is read-only, and data updates are written to the local storage of the instance.
   * 
   * This parameter is required. Currently, only the value shared is supported. If this parameter is not specified, the service returns a Parameter.Invalid error.
   * 
   * @example
   * shared
   */
  deploymentType?: string;
  /**
   * @remarks
   * The access protocol type of the cloud disk. Valid values:
   * 
   * - iscsi: the default protocol for standard cloud disks. Both RBD cloud disks and standard cloud disks support this protocol.
   * 
   * - rbd: the default protocol for RBD cloud disks. Only RBD cloud disks support this mount protocol.
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
   * - rbd: RBD cloud disk.
   * 
   * > 
   * > - If this parameter is not specified, a standard cloud disk is created by default.
   * > - An RBD shared cloud disk can be created only when the source disk type is RBD.
   * 
   * @example
   * standard
   */
  diskType?: string;
  /**
   * @remarks
   * The list of instance IDs. The value is a JSON array. A maximum of 100 IDs can be specified.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
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
      deploymentType: 'DeploymentType',
      diskAccessProtocol: 'DiskAccessProtocol',
      diskType: 'DiskType',
      instanceIds: 'InstanceIds',
      SDGId: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentType: 'string',
      diskAccessProtocol: 'string',
      diskType: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      SDGId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

