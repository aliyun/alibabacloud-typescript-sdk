// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceCreatableZoneResponseBodyZoneList extends $dara.Model {
  fullCopyId?: string;
  /**
   * @example
   * true
   */
  isInCluster?: boolean;
  logicalZoneName?: string;
  replicateZoneIndex?: number;
  /**
   * @remarks
   * DescribeInstanceCreatableZone
   * 
   * @example
   * cn-hangzhou-i
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      fullCopyId: 'FullCopyId',
      isInCluster: 'IsInCluster',
      logicalZoneName: 'LogicalZoneName',
      replicateZoneIndex: 'ReplicateZoneIndex',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullCopyId: 'string',
      isInCluster: 'boolean',
      logicalZoneName: 'string',
      replicateZoneIndex: 'number',
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

