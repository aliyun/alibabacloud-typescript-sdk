// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrafficPolicy } from "./TrafficPolicy";


export class GatewayService extends $dara.Model {
  /**
   * @remarks
   * The traffic policy of the service.
   */
  gatewayTrafficPolicy?: TrafficPolicy;
  /**
   * @remarks
   * The unique ID of the gateway.
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The name of the group to which the service belongs.
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the service.
   */
  id?: number;
  /**
   * @remarks
   * The metadata of the service.
   */
  metaInfo?: string;
  /**
   * @remarks
   * The name of the service.
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the service belongs.
   */
  namespace?: string;
  /**
   * @remarks
   * The source type of the service.
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayTrafficPolicy: 'GatewayTrafficPolicy',
      gatewayUniqueId: 'GatewayUniqueId',
      groupName: 'GroupName',
      id: 'Id',
      metaInfo: 'MetaInfo',
      name: 'Name',
      namespace: 'Namespace',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayTrafficPolicy: TrafficPolicy,
      gatewayUniqueId: 'string',
      groupName: 'string',
      id: 'number',
      metaInfo: 'string',
      name: 'string',
      namespace: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(this.gatewayTrafficPolicy && typeof (this.gatewayTrafficPolicy as any).validate === 'function') {
      (this.gatewayTrafficPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

