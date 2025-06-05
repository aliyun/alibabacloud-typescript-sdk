// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroups } from "./DescribeContainerGroupsResponseBodyContainerGroups";


export class DescribeContainerGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the queried elastic container instances.
   */
  containerGroups?: DescribeContainerGroupsResponseBodyContainerGroups[];
  /**
   * @remarks
   * The token that determines the start point of the query.
   * 
   * @example
   * d78f2dd8-5979-42fe-****-b16db43be5bc
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request. The value is unique.
   * 
   * @example
   * 89945DD3-9072-47D0-A318-353284CFC7B3
   */
  requestId?: string;
  /**
   * @remarks
   * The number of queried instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      containerGroups: 'ContainerGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroups: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroups },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.containerGroups)) {
      $dara.Model.validateArray(this.containerGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

