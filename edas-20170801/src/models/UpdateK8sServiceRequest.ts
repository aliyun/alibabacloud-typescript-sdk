// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateK8sServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
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
   * *   Local: local mode
   * *   Cluster: cluster mode
   * 
   * Default value: Local.
   * 
   * @example
   * Local
   */
  externalTrafficPolicy?: string;
  /**
   * @remarks
   * The name of the service in a Kubernetes cluster.
   * 
   * *   The name can contain lowercase letters, digits, and hyphens (-).
   * *   It must start with a letter and end with a letter or digit.
   * *   The name can be 2 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * service-http
   */
  name?: string;
  /**
   * @remarks
   * The mappings between service ports. Set this parameter to a JSON array. The following parameters are included in the configurations:
   * 
   * *   **protocol**: the protocol used by the service. Valid values: TCP and UDP. This parameter is required.
   * *   **port**: the frontend service port. Valid values: 1 to 65535. This parameter is required.
   * *   **targetPort**: the backend container port. Valid values: 1 to 65535. This parameter is required.
   * 
   * Example: `[{"protocol": "TCP", "port": 80, "targetPort": 8080},{"protocol": "TCP", "port": 81, "targetPort": 8081}]`
   * 
   * @example
   * [{"protocol":"TCP","port":80,"targetPort":8080}]
   */
  servicePorts?: string;
  /**
   * @remarks
   * The type of the service in a Kubernetes cluster. Set the value to ClusterIP.
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

