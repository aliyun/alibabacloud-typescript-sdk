// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDrivePermissionsRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the created enterprise cloud drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-82414*****
   */
  cdsId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
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

