// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListenersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IP address of the listener.
   * 
   * @example
   * 119.23.84.102
   */
  addr?: string;
  /**
   * @remarks
   * The listener client version.
   * 
   * @example
   * Nacos-Java-Client:v2.1.1
   */
  agent?: string;
  /**
   * @remarks
   * The application name of the listener.
   * 
   * @example
   * app
   */
  app?: string;
  /**
   * @remarks
   * The name of the cluster to which the monitored service belongs.
   * 
   * @example
   * DEFAULT
   */
  cluster?: string;
  /**
   * @remarks
   * The IP address of the monitored service.
   * 
   * @example
   * 172.16.1.5
   */
  IP?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * 0ba53825-b183-414f-a6a0-288e4f1c467e
   */
  namespaceId?: string;
  /**
   * @remarks
   * The port number of the monitored service.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The name of the monitored service.
   * 
   * @example
   * zeekr-orderboss
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      addr: 'Addr',
      agent: 'Agent',
      app: 'App',
      cluster: 'Cluster',
      IP: 'IP',
      namespaceId: 'NamespaceId',
      port: 'Port',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addr: 'string',
      agent: 'string',
      app: 'string',
      cluster: 'string',
      IP: 'string',
      namespaceId: 'string',
      port: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

