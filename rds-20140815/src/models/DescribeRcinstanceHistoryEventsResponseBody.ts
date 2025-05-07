// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet } from "./DescribeRcinstanceHistoryEventsResponseBodyInstanceSystemEventSet";


export class DescribeRCInstanceHistoryEventsResponseBody extends $dara.Model {
  instanceSystemEventSet?: DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet[];
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceSystemEventSet: 'InstanceSystemEventSet',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSystemEventSet: { 'type': 'array', 'itemType': DescribeRCInstanceHistoryEventsResponseBodyInstanceSystemEventSet },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceSystemEventSet)) {
      $dara.Model.validateArray(this.instanceSystemEventSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

