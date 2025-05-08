// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateGatewayRouteRequestServicesHttpDubboTranscoder } from "./UpdateGatewayRouteRequestServicesHttpDubboTranscoder";


export class UpdateGatewayRouteRequestServices extends $dara.Model {
  /**
   * @remarks
   * The type of the protocol. Valid values:
   * 
   * @example
   * DUBBO
   */
  agreementType?: string;
  /**
   * @remarks
   * The name of the group to which the service belongs.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The transcoder of the Dubbo protocol.
   */
  httpDubboTranscoder?: UpdateGatewayRouteRequestServicesHttpDubboTranscoder;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * web
   */
  name?: string;
  /**
   * @remarks
   * The namespace in which the service resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The percentage.
   * 
   * @example
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * The Dubbo port number.
   * 
   * @example
   * 20880
   */
  servicePort?: number;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agreementType: 'AgreementType',
      groupName: 'GroupName',
      httpDubboTranscoder: 'HttpDubboTranscoder',
      name: 'Name',
      namespace: 'Namespace',
      percent: 'Percent',
      serviceId: 'ServiceId',
      servicePort: 'ServicePort',
      sourceType: 'SourceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementType: 'string',
      groupName: 'string',
      httpDubboTranscoder: UpdateGatewayRouteRequestServicesHttpDubboTranscoder,
      name: 'string',
      namespace: 'string',
      percent: 'number',
      serviceId: 'number',
      servicePort: 'number',
      sourceType: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.httpDubboTranscoder && typeof (this.httpDubboTranscoder as any).validate === 'function') {
      (this.httpDubboTranscoder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

