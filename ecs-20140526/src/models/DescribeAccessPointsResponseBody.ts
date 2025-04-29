// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessPointsResponseBodyAccessPointSet } from "./DescribeAccessPointsResponseBodyAccessPointSet";


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

