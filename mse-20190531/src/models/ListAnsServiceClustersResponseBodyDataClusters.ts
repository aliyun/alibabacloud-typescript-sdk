// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnsServiceClustersResponseBodyDataClusters extends $dara.Model {
  /**
   * @remarks
   * The default port used for a health check.
   * 
   * @example
   * 80
   */
  defaultCheckPort?: number;
  /**
   * @remarks
   * The default port.
   * 
   * @example
   * 80
   */
  defaultPort?: number;
  /**
   * @remarks
   * The type of the health check.
   * 
   * @example
   * Heartbeat Reporting
   */
  healthCheckerType?: string;
  /**
   * @remarks
   * The metadata of the cluster.
   * 
   * @example
   * 111
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The full name of the service.
   * 
   * @example
   * DEFAULT_GROUP@@nacos.test.3
   */
  serviceName?: string;
  /**
   * @remarks
   * Indicates whether an end-to-end health check was initiated by the server. This parameter is valid only if the service is not a temporary service.
   * 
   * @example
   * true
   */
  useIPPort4Check?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultCheckPort: 'DefaultCheckPort',
      defaultPort: 'DefaultPort',
      healthCheckerType: 'HealthCheckerType',
      metadata: 'Metadata',
      name: 'Name',
      serviceName: 'ServiceName',
      useIPPort4Check: 'UseIPPort4Check',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCheckPort: 'number',
      defaultPort: 'number',
      healthCheckerType: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      serviceName: 'string',
      useIPPort4Check: 'boolean',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

