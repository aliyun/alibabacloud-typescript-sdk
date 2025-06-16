// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipSegmentResponseBodyEipSegmentsEipSegment extends $dara.Model {
  /**
   * @remarks
   * The time when the contiguous EIP group was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2020-03-06T12:30:07Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the contiguous EIP group.
   * 
   * @example
   * MyEipSegment
   */
  descritpion?: string;
  /**
   * @remarks
   * The ID of the contiguous EIP group.
   * 
   * @example
   * eipsg-2zett8ba055tbsxme****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of EIPs in the contiguous EIP group.
   * 
   * @example
   * 16
   */
  ipCount?: string;
  /**
   * @remarks
   * The name of the contiguous EIP group.
   * 
   * @example
   * MyEipSegment
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region to which the contiguous EIP group belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The CIDR block and mask of the contiguous EIP group.
   * 
   * @example
   * 161.xx.xx.32/28
   */
  segment?: string;
  /**
   * @remarks
   * The status of the contiguous EIP group. Valid values:
   * 
   * *   **Allocating**
   * *   **Allocated**
   * *   **Releasing**
   * 
   * @example
   * Allocated
   */
  status?: string;
  /**
   * @remarks
   * The zone of the contiguous EIP group.
   * 
   * @example
   * cn-hangzhou-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      descritpion: 'Descritpion',
      instanceId: 'InstanceId',
      ipCount: 'IpCount',
      name: 'Name',
      regionId: 'RegionId',
      segment: 'Segment',
      status: 'Status',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      descritpion: 'string',
      instanceId: 'string',
      ipCount: 'string',
      name: 'string',
      regionId: 'string',
      segment: 'string',
      status: 'string',
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

