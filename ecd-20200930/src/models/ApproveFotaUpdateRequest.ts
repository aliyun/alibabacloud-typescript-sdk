// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveFotaUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * Mirror version.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.1-D-20220513.143129
   */
  appVersion?: string;
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-138dsptkrt00u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      desktopId: 'DesktopId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      desktopId: 'string',
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

