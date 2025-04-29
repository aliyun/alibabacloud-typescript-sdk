// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection } from "./DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection";


export class DescribeTerminalSessionsResponseBodySessionsSessionConnections extends $dara.Model {
  connection?: DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection[];
  static names(): { [key: string]: string } {
    return {
      connection: 'Connection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connection: { 'type': 'array', 'itemType': DescribeTerminalSessionsResponseBodySessionsSessionConnectionsConnection },
    };
  }

  validate() {
    if(Array.isArray(this.connection)) {
      $dara.Model.validateArray(this.connection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

