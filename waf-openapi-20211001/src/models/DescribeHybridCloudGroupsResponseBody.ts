// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridCloudGroupsResponseBodyGroups } from "./DescribeHybridCloudGroupsResponseBodyGroups";


export class DescribeHybridCloudGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node groups.
   */
  groups?: DescribeHybridCloudGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 045660E7-C4C6-5CD7-8182-7B337D95****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 146
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeHybridCloudGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

