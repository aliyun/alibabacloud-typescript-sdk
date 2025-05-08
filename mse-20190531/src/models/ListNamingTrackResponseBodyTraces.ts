// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNamingTrackResponseBodyTraces extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 120.40.32.235
   */
  clientIp?: string;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * prod
   */
  group?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceSize?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * mse-197*****-167083******-reg-center-0-0
   */
  nodeName?: string;
  /**
   * @remarks
   * The push time.
   * 
   * @example
   * 2022-12-16 11:48:07
   */
  pushTime?: string;
  /**
   * @remarks
   * The total push time.
   * 
   * @example
   * 628ms
   */
  pushTimeAll?: string;
  /**
   * @remarks
   * The push time for the network.
   * 
   * @example
   * 37ms
   */
  pushTimeNetwork?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * fpx-xms-baseinfo
   */
  serverName?: string;
  /**
   * @remarks
   * The duration that is specified in the service-level agreement (SLA).
   * 
   * @example
   * 628ms
   */
  slaTime?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      group: 'Group',
      instanceSize: 'InstanceSize',
      nodeName: 'NodeName',
      pushTime: 'PushTime',
      pushTimeAll: 'PushTimeAll',
      pushTimeNetwork: 'PushTimeNetwork',
      serverName: 'ServerName',
      slaTime: 'SlaTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      group: 'string',
      instanceSize: 'string',
      nodeName: 'string',
      pushTime: 'string',
      pushTimeAll: 'string',
      pushTimeNetwork: 'string',
      serverName: 'string',
      slaTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

