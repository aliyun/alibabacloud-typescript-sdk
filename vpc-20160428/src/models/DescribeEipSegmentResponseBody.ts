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

export class DescribeEipSegmentResponseBodyEipSegments extends $dara.Model {
  eipSegment?: DescribeEipSegmentResponseBodyEipSegmentsEipSegment[];
  static names(): { [key: string]: string } {
    return {
      eipSegment: 'EipSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipSegment: { 'type': 'array', 'itemType': DescribeEipSegmentResponseBodyEipSegmentsEipSegment },
    };
  }

  validate() {
    if(Array.isArray(this.eipSegment)) {
      $dara.Model.validateArray(this.eipSegment);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEipSegmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the contiguous EIP group.
   */
  eipSegments?: DescribeEipSegmentResponseBodyEipSegments;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7A6301A-64BA-41EC-8284-8F4838C15D1F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eipSegments: 'EipSegments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipSegments: DescribeEipSegmentResponseBodyEipSegments,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.eipSegments && typeof (this.eipSegments as any).validate === 'function') {
      (this.eipSegments as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

