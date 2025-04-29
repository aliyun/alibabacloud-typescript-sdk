// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTerminalSessionsResponseBodySessionsSession } from "./DescribeTerminalSessionsResponseBodySessionsSession";


export class DescribeTerminalSessionsResponseBodySessions extends $dara.Model {
  session?: DescribeTerminalSessionsResponseBodySessionsSession[];
  static names(): { [key: string]: string } {
    return {
      session: 'Session',
    };
  }

  static types(): { [key: string]: any } {
    return {
      session: { 'type': 'array', 'itemType': DescribeTerminalSessionsResponseBodySessionsSession },
    };
  }

  validate() {
    if(Array.isArray(this.session)) {
      $dara.Model.validateArray(this.session);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

