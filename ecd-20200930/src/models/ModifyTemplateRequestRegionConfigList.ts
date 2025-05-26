// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTemplateRequestRegionConfigList extends $dara.Model {
  /**
   * @example
   * cn-hangzhou+dir-709****
   */
  officeSiteId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * eds.enterprise_office.8c16g
   */
  resourceInstanceType?: string;
  /**
   * @example
   * sp-35fvn8m2*****
   */
  snapshotPolicyId?: string;
  /**
   * @example
   * vsw-adjrehad1****
   */
  subnetId?: string;
  /**
   * @example
   * false
   */
  volumeEncryptionEnable?: boolean;
  /**
   * @example
   * a7b3c0c8-b3a2-4876-b1cc-116dddc9****
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

