// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortRangeListAssociationsResponseBodyPortRangeListAssociations } from "./DescribePortRangeListAssociationsResponseBodyPortRangeListAssociations";


export class DescribePortRangeListAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If the return value is empty, no more data is returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The resources that are associated with the port list.
   */
  portRangeListAssociations?: DescribePortRangeListAssociationsResponseBodyPortRangeListAssociations[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      portRangeListAssociations: 'PortRangeListAssociations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      portRangeListAssociations: { 'type': 'array', 'itemType': DescribePortRangeListAssociationsResponseBodyPortRangeListAssociations },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portRangeListAssociations)) {
      $dara.Model.validateArray(this.portRangeListAssociations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

