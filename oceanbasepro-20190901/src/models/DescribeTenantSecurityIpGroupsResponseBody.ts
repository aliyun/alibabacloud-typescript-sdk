// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantSecurityIpGroupsResponseBodySecurityIpGroups } from "./DescribeTenantSecurityIpGroupsResponseBodySecurityIpGroups";


export class DescribeTenantSecurityIpGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469**-AA6F-4D**-B3DB-A***********
   */
  requestId?: string;
  /**
   * @remarks
   * The list of the whitelist groups.
   */
  securityIpGroups?: DescribeTenantSecurityIpGroupsResponseBodySecurityIpGroups[];
  /**
   * @remarks
   * The total number of the whitelist groups.
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
      securityIpGroups: { 'type': 'array', 'itemType': DescribeTenantSecurityIpGroupsResponseBodySecurityIpGroups },
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

