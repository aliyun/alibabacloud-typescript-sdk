// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerTerminalResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * c497b44c2a59f4ae0bd2826edc40a2c6e
   */
  cluster?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * worker0
   */
  container?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * ns1
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the container group.
   * 
   * @example
   * 1775b9e0-8463-457e-89e8-fb7b6d125b2e
   */
  pod?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * af22f4xxxxxxxxxxxxxxxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * The information about the shared token.
   * 
   * @example
   * af22f4-xxxxx-xxxx-xxxx-xxxx
   */
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

