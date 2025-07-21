// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirtualHostsResponseBodyDataVirtualHosts extends $dara.Model {
  /**
   * @remarks
   * The vhost name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListVirtualHostsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListVirtualHostsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF4DB019-DA4A-4CE3-B220-223BBC93F***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListVirtualHostsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

