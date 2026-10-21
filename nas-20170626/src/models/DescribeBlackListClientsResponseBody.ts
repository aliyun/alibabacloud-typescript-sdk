// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlackListClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The eviction status of clients. The value is a JSON string in the map format: `{"client1": "EVICTING","client2":"EVICTED"}`.
   * 
   * Valid values for client eviction status:
   * 
   * - EVICTING: The client is being evicted.
   * - EVICTED: The client has been evicted.
   * - ACCEPTING: The client is being resumed. 
   * - ACCEPTABLE: The client has been resumed.
   * 
   * @example
   * {"client1": "EVICTING","client2":"EVICTED"}
   */
  clients?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A70BEE5D-76D3-49FB-B58F-1F398211A5C3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

