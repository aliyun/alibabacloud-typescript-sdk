// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOperationHostsResponseBodyHosts } from "./ListOperationHostsResponseBodyHosts";


export class ListOperationHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The hosts returned.
   */
  hosts?: ListOperationHostsResponseBodyHosts[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F6C075F-FC86-476E-943B-097BD4E12948
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of hosts returned.
   * 
   * @example
   * 5
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
      hosts: { 'type': 'array', 'itemType': ListOperationHostsResponseBodyHosts },
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

