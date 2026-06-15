// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBlackListClientsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of clients and the status of each client. This parameter contains a JSON object, for example, {"client1": "EVICTING","client2":"EVICTED"}.
   * 
   * Available client statuses include:
   * 
   * *   EVICTING indicates that a client is being removed
   * *   EVICTED indicates that a client is removed
   * *   ACCEPTING indicates that the write access to the file system is being granted to a client
   * *   ACCEPTABLE indicates that the write access to the file system is granted to a client
   * 
   * @example
   * {"client1": "EVICTING","client2":"EVICTED"}
   */
  clients?: string;
  /**
   * @remarks
   * The ID of the request.
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

