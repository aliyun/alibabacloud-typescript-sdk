// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHostsForUserGroupResponseBodyHosts } from "./ListHostsForUserGroupResponseBodyHosts";


export class ListHostsForUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The hosts returned.
   */
  hosts?: ListHostsForUserGroupResponseBodyHosts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of hosts returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hosts: 'Hosts',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: { 'type': 'array', 'itemType': ListHostsForUserGroupResponseBodyHosts },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.hosts)) {
      $dara.Model.validateArray(this.hosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

