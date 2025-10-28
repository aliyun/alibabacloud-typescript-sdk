// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateK8sServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5a166fbd-****-****-a286-781659d9f54c
   */
  appId?: string;
  /**
   * @remarks
   * The policy used for external traffic management. Valid values:
   * 
   * *   Local: The network traffic can be routed to pods on the node where the Service is deployed.
   * *   Cluster: The network traffic can be routed to pods on other nodes in the cluster.
   * 
   * Default value: Local.
   * 
   * @example
   * Local
   */
  externalTrafficPolicy?: string;
  /**
   * @remarks
   * The name of the Kubernetes Service.
   * 
   * This parameter is required.
   * 
   * @example
   * service-http
   */
  name?: string;
  /**
   * @remarks
   * The port mapping of the Kubernetes Service. Set this parameter to a JSON array. The following parameters are included in the configurations:
   * 
   * *   **protocol**: the protocol used by the Service. Valid values: TCP and UDP. This parameter is mandatory.
   * *   **port**: the frontend service port. Valid values: 1 to 65535. This parameter is mandatory.
   * *   **targetPort**: the backend container port. Valid values: 1 to 65535. This parameter is mandatory.
   * 
   * Example: `[{"protocol": "TCP", "port": 80, "targetPort": 8080},{"protocol": "TCP", "port": 81, "targetPort": 8081}]`
   * 
   * This parameter is required.
   * 
   * @example
   * [{"protocol":"TCP","port":80,"targetPort":8080}]
   */
  servicePorts?: string;
  /**
   * @remarks
   * The type of the Kubernetes Service. Set the value to ClusterIP.
   * 
   * This parameter is required.
   * 
   * @example
   * ClusterIP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      externalTrafficPolicy: 'ExternalTrafficPolicy',
      name: 'Name',
      servicePorts: 'ServicePorts',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      externalTrafficPolicy: 'string',
      name: 'string',
      servicePorts: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

