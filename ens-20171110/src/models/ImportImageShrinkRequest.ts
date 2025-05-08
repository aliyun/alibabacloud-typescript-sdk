// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportImageShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ens_vm
   */
  computeType?: string;
  diskDeviceMappingShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qcow2
   */
  imageFormat?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  imageName?: string;
  /**
   * @example
   * tmp-hybrid
   */
  OSSBucket?: string;
  /**
   * @example
   * image-test
   */
  OSSObject?: string;
  /**
   * @example
   * cn-beijing
   */
  OSSRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @example
   * 6.8
   */
  OSVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * centos
   */
  platform?: string;
  /**
   * @example
   * cn-beijing
   */
  targetOSSRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      computeType: 'ComputeType',
      diskDeviceMappingShrink: 'DiskDeviceMapping',
      imageFormat: 'ImageFormat',
      imageName: 'ImageName',
      OSSBucket: 'OSSBucket',
      OSSObject: 'OSSObject',
      OSSRegion: 'OSSRegion',
      OSType: 'OSType',
      OSVersion: 'OSVersion',
      platform: 'Platform',
      targetOSSRegionId: 'TargetOSSRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      computeType: 'string',
      diskDeviceMappingShrink: 'string',
      imageFormat: 'string',
      imageName: 'string',
      OSSBucket: 'string',
      OSSObject: 'string',
      OSSRegion: 'string',
      OSType: 'string',
      OSVersion: 'string',
      platform: 'string',
      targetOSSRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

