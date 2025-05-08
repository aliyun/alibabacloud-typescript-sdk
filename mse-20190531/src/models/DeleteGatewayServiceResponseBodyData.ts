// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewayServiceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   */
  gatewayId?: number;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-7ea3da97b96543e19f6c597c****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2022-01-14 14:39:16
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2022-01-07T10:07:57.000+0000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * DEFAULT_GROUP
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 190
   */
  id?: number;
  /**
   * @remarks
   * IP
   */
  ips?: string[];
  /**
   * @remarks
   * The basic information about the service.
   * 
   * @example
   * {}
   */
  metaInfo?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the service registered with the service registry.
   * 
   * @example
   * test
   */
  serviceNameInRegistry?: string;
  /**
   * @remarks
   * The ID of the service source.
   * 
   * @example
   * 1
   */
  sourceId?: number;
  /**
   * @remarks
   * The source type of the service.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayUniqueId: 'GatewayUniqueId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      id: 'Id',
      ips: 'Ips',
      metaInfo: 'MetaInfo',
      name: 'Name',
      namespace: 'Namespace',
      serviceNameInRegistry: 'ServiceNameInRegistry',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'number',
      gatewayUniqueId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      groupName: 'string',
      id: 'number',
      ips: { 'type': 'array', 'itemType': 'string' },
      metaInfo: 'string',
      name: 'string',
      namespace: 'string',
      serviceNameInRegistry: 'string',
      sourceId: 'number',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

