// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityIpGroupsResponseBodySecurityIpGroups } from "./DescribeSecurityIpGroupsResponseBodySecurityIpGroups";


export class DescribeSecurityIpGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  securityIpGroups?: DescribeSecurityIpGroupsResponseBodySecurityIpGroups[];
  /**
   * @remarks
   * Example 1
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpGroups: 'SecurityIpGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpGroups: { 'type': 'array', 'itemType': DescribeSecurityIpGroupsResponseBodySecurityIpGroups },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityIpGroups)) {
      $dara.Model.validateArray(this.securityIpGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

