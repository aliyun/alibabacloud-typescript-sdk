// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet } from "./DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet";


export class DescribePhysicalConnectionsResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  physicalConnectionSet?: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalConnectionSet: 'PhysicalConnectionSet',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      physicalConnectionSet: DescribePhysicalConnectionsResponseBodyPhysicalConnectionSet,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.physicalConnectionSet && typeof (this.physicalConnectionSet as any).validate === 'function') {
      (this.physicalConnectionSet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

