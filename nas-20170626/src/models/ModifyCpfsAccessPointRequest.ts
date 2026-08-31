// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCpfsAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The access point ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The description of the access point.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`, for example, cpfs-125487\\*\\*\\*\\*.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, for example, bmcpfs-0015\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      description: 'string',
      fileSystemId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

