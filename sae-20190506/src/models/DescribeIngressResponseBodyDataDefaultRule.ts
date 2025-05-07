// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIngressResponseBodyDataDefaultRule extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that is specified in the default rule.
   * 
   * @example
   * 395b60e4-0550-458d-9c54-a265d036****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application that is specified in the default rule.
   * 
   * @example
   * app1
   */
  appName?: string;
  /**
   * @remarks
   * The backend protocol. Valid values:
   * 
   * *   **http**: HTTP is suitable for applications that need to identify the transmitted data.
   * *   **https**: HTTP is suitable for applications that require encrypted data transmission.
   * *   **grpc**: GRPC is suitable for load balancing scenarios in which you want to deploy services in multi-language frameworks, such as the .NET framework.
   * 
   * This parameter is returned only if the**LoadBalanceType** parameter is set to **ALB** and the **ListenerProtocol** parameter **is set to HTTPS**.
   * 
   * @example
   * HTTP
   */
  backendProtocol?: string;
  /**
   * @remarks
   * The container port of the application that is specified in the default rule.
   * 
   * @example
   * 8080
   */
  containerPort?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backendProtocol: 'BackendProtocol',
      containerPort: 'ContainerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backendProtocol: 'string',
      containerPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

