// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayRouteDetailResponseBodyDataFallbackServices extends $dara.Model {
  /**
   * @remarks
   * The protocol type.
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
   * The name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the service belongs.
   * 
   * @example
   * namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The weight in the form of a percentage value.
   * 
   * @example
   * 80
   */
  percent?: number;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  serviceId?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * name
   */
  serviceName?: string;
  /**
   * @remarks
   * The port number of the service.
   * 
   * @example
   * 8848
   */
  servicePort?: number;
  /**
   * @remarks
   * The source type of the service.
   * 
   * @example
   * MSE
   */
  sourceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      agreementType: 'AgreementType',
      groupName: 'GroupName',
      name: 'Name',
      namespace: 'Namespace',
      percent: 'Percent',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
      sourceType: 'SourceType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreementType: 'string',
      groupName: 'string',
      name: 'string',
      namespace: 'string',
      percent: 'number',
      serviceId: 'number',
      serviceName: 'string',
      servicePort: 'number',
      sourceType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

