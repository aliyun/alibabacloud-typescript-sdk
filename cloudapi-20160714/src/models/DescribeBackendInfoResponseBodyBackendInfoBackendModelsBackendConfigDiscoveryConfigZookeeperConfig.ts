// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigDiscoveryConfigZookeeperConfig extends $dara.Model {
  /**
   * @remarks
   * The connection URL of the ZooKeeper server.
   * 
   * @example
   * http://192.168.1.xxx:2181
   */
  connectString?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * provider
   */
  namespace?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * service
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      connectString: 'ConnectString',
      namespace: 'Namespace',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectString: 'string',
      namespace: 'string',
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

