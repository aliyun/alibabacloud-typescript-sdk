// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipSegmentResponseBodyEipSegmentsEipSegment extends $dara.Model {
  creationTime?: string;
  descritpion?: string;
  instanceId?: string;
  ipCount?: string;
  name?: string;
  regionId?: string;
  segment?: string;
  status?: string;
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

