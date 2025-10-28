// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindEcsSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can query the application ID by calling the ListApplication operation. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 93fdd228-*****-ed2ae98de18d
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance group whose application you want to bind. You can call the ListDeployGroup operation to query the group ID. For more information, see [ListDeployGroup](https://help.aliyun.com/document_detail/62077.html).
   * 
   * @example
   * 577f4c50-16ee-43d8-****-****
   */
  deployGroupId?: string;
  /**
   * @remarks
   * The health check URL.
   * 
   * @example
   * /_ehc.html
   */
  listenerHealthCheckUrl?: string;
  /**
   * @remarks
   * The listener port for the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol for the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tcp
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-uf6j54m3a****cj01jx8
   */
  slbId?: string;
  /**
   * @remarks
   * The forwarding rule of the SLB listener.
   * 
   * @example
   * example.com/forwarding
   */
  VForwardingUrlRule?: string;
  /**
   * @remarks
   * The ID of the vServer group for the SLB instance.
   * 
   * @example
   * rsp-2ze****6l*****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The name of the vServer group.
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deployGroupId: 'DeployGroupId',
      listenerHealthCheckUrl: 'ListenerHealthCheckUrl',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      slbId: 'SlbId',
      VForwardingUrlRule: 'VForwardingUrlRule',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deployGroupId: 'string',
      listenerHealthCheckUrl: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      slbId: 'string',
      VForwardingUrlRule: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

