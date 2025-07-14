// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessPointsResponseBodyAccessPointSetAccessPointType extends $dara.Model {
  accessPointId?: string;
  attachedRegionNo?: string;
  description?: string;
  hostOperator?: string;
  location?: string;
  name?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accessPointId: 'AccessPointId',
      attachedRegionNo: 'AttachedRegionNo',
      description: 'Description',
      hostOperator: 'HostOperator',
      location: 'Location',
      name: 'Name',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointId: 'string',
      attachedRegionNo: 'string',
      description: 'string',
      hostOperator: 'string',
      location: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBodyAccessPointSet extends $dara.Model {
  accessPointType?: DescribeAccessPointsResponseBodyAccessPointSetAccessPointType[];
  static names(): { [key: string]: string } {
    return {
      accessPointType: 'AccessPointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointType: { 'type': 'array', 'itemType': DescribeAccessPointsResponseBodyAccessPointSetAccessPointType },
    };
  }

  validate() {
    if(Array.isArray(this.accessPointType)) {
      $dara.Model.validateArray(this.accessPointType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccessPointsResponseBody extends $dara.Model {
  accessPointSet?: DescribeAccessPointsResponseBodyAccessPointSet;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessPointSet: 'AccessPointSet',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessPointSet: DescribeAccessPointsResponseBodyAccessPointSet,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.accessPointSet && typeof (this.accessPointSet as any).validate === 'function') {
      (this.accessPointSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

