// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppDeploymentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The information about the Deployment of the application. The value is a JSON string.
   * 
   * @example
   * {"metadata":{"name":"oambuild-group*","namespace":"default","selfLink":"/apis/apps/v1/namespaces/default/deployments/oambuil*","uid":"*-afc0-436e-9949-fb01994a9b63","resourceVersion":"969614832","generation":2,"creationTimestamp":"2021-04-06T11:38:46Z","labels":{"edas-domain":"edas-admin","edas.aliyun.oam.com/rollout-name":"oambuild-group-1","edas.aliyun.oam.com/rollout-namespace":"default","edas.aliyun.oam.com/rollout-revision":"3","edas.appid":"fc5e0f54-*-4cab-91a0-b7becb1f6174","edas.controlplane":"edas-oam","edas.oam.acname":"oambuild"...
   */
  data?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 03FD1520-0FD6-436A-****-265318D7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

