// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCpfsAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bmcpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      fileSystemId: 'FileSystemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
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

