// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListVirtualHostsResponseBodyDataVirtualHosts } from "./ListVirtualHostsResponseBodyDataVirtualHosts";


export class ListVirtualHostsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, all data is retrieved.
   * 
   * @example
   * caebacccb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The vhosts.
   */
  virtualHosts?: ListVirtualHostsResponseBodyDataVirtualHosts[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      virtualHosts: 'VirtualHosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      virtualHosts: { 'type': 'array', 'itemType': ListVirtualHostsResponseBodyDataVirtualHosts },
    };
  }

  validate() {
    if(Array.isArray(this.virtualHosts)) {
      $dara.Model.validateArray(this.virtualHosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

