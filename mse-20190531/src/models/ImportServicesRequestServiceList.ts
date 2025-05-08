// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportServicesRequestServiceList extends $dara.Model {
  dnsServerList?: string[];
  /**
   * @remarks
   * The group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The IP addresses of the service.
   */
  ips?: string[];
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
   * public
   */
  namespace?: string;
  saeAppId?: string;
  /**
   * @remarks
   * The port of the service.
   * 
   * @example
   * 8080
   */
  servicePort?: number;
  /**
   * @remarks
   * The protocol of the service.
   * 
   * @example
   * GRPC, HTTP
   */
  serviceProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      dnsServerList: 'DnsServerList',
      groupName: 'GroupName',
      ips: 'Ips',
      name: 'Name',
      namespace: 'Namespace',
      saeAppId: 'SaeAppId',
      servicePort: 'ServicePort',
      serviceProtocol: 'ServiceProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsServerList: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      namespace: 'string',
      saeAppId: 'string',
      servicePort: 'number',
      serviceProtocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsServerList)) {
      $dara.Model.validateArray(this.dnsServerList);
    }
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

