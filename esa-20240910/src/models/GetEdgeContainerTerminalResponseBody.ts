// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerTerminalResponseBody extends $dara.Model {
  cluster?: string;
  container?: string;
  namespace?: string;
  pod?: string;
  requestId?: string;
  sessionId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      container: 'Container',
      namespace: 'Namespace',
      pod: 'Pod',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      container: 'string',
      namespace: 'string',
      pod: 'string',
      requestId: 'string',
      sessionId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

