// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAvailableZonesResponseBodyZoneList extends $dara.Model {
  /**
   * @example
   * true
   */
  isInCluster?: boolean;
  /**
   * @example
   * cn-shanghai-g-z0,cn-shanghai-g-z1, cn-shanghai-g-z2
   */
  logicalZoneName?: string;
  /**
   * @example
   * 1
   */
  replicateZoneIndex?: string;
  /**
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      isInCluster: 'IsInCluster',
      logicalZoneName: 'LogicalZoneName',
      replicateZoneIndex: 'ReplicateZoneIndex',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isInCluster: 'boolean',
      logicalZoneName: 'string',
      replicateZoneIndex: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

