// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppServicesPageResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * hc4fs1****@98314c8790b****
   */
  edasAppId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * cn-zhangjiakou-micro-service-******
   */
  edasAppName?: string;
  /**
   * @remarks
   * The group to which the service belongs. You can create a custom group.
   * 
   * @example
   * springCloud
   */
  group?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceNum?: number;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * edas.service.provider
   */
  serviceName?: string;
  /**
   * @remarks
   * The version of a service. You can create a custom version.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppId: 'EdasAppId',
      edasAppName: 'EdasAppName',
      group: 'Group',
      instanceNum: 'InstanceNum',
      serviceName: 'ServiceName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppId: 'string',
      edasAppName: 'string',
      group: 'string',
      instanceNum: 'number',
      serviceName: 'string',
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

