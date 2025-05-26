// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTemplateRequestRegionConfigList extends $dara.Model {
  /**
   * @example
   * cn-hangzhou+dir-709******
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceInstanceType?: string;
  /**
   * @example
   * sp-35fvn8m21pnx2****
   */
  snapshotPolicyId?: string;
  /**
   * @example
   * vsw-bp1yiu**********
   */
  subnetId?: string;
  /**
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
   * @example
   * a7b3c0c8-b3a2-4876-b1cc-*********
   */
  volumeEncryptionKey?: string;
  static names(): { [key: string]: string } {
    return {
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      resourceInstanceType: 'ResourceInstanceType',
      snapshotPolicyId: 'SnapshotPolicyId',
      subnetId: 'SubnetId',
      volumeEncryptionEnable: 'VolumeEncryptionEnable',
      volumeEncryptionKey: 'VolumeEncryptionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeSiteId: 'string',
      regionId: 'string',
      resourceInstanceType: 'string',
      snapshotPolicyId: 'string',
      subnetId: 'string',
      volumeEncryptionEnable: 'boolean',
      volumeEncryptionKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

