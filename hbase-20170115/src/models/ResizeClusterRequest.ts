// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeClusterRequest extends $dara.Model {
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  cloudType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clusterId?: string;
  coldStorageSize?: string;
  coreDiskQuantity?: string;
  coreDiskSize?: string;
  coreDiskType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  coreInstanceQuantity?: string;
  coreInstanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  engine?: string;
  isColdStorage?: string;
  payType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  upgradeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cloudType: 'CloudType',
      clusterId: 'ClusterId',
      coldStorageSize: 'ColdStorageSize',
      coreDiskQuantity: 'CoreDiskQuantity',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceQuantity: 'CoreInstanceQuantity',
      coreInstanceType: 'CoreInstanceType',
      engine: 'Engine',
      isColdStorage: 'IsColdStorage',
      payType: 'PayType',
      regionId: 'RegionId',
      upgradeType: 'UpgradeType',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cloudType: 'string',
      clusterId: 'string',
      coldStorageSize: 'string',
      coreDiskQuantity: 'string',
      coreDiskSize: 'string',
      coreDiskType: 'string',
      coreInstanceQuantity: 'string',
      coreInstanceType: 'string',
      engine: 'string',
      isColdStorage: 'string',
      payType: 'string',
      regionId: 'string',
      upgradeType: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

