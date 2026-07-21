// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveFotaUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The image version. You can call [DescribeImages](https://help.aliyun.com/document_detail/188895.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.1-D-20220513.143129
   */
  appVersion?: string;
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-138dsptkrt00u****
   */
  desktopId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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

