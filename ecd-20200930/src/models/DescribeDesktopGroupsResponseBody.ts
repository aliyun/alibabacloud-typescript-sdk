// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDesktopGroupsResponseBodyDesktopGroups } from "./DescribeDesktopGroupsResponseBodyDesktopGroups";


export class DescribeDesktopGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cloud computer shares.
   */
  desktopGroups?: DescribeDesktopGroupsResponseBodyDesktopGroups[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      desktopGroups: 'DesktopGroups',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroups: { 'type': 'array', 'itemType': DescribeDesktopGroupsResponseBodyDesktopGroups },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopGroups)) {
      $dara.Model.validateArray(this.desktopGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

