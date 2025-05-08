// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetServiceListResponseBodyDataMethods } from "./GetServiceListResponseBodyDataMethods";


export class GetServiceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the Dubbo application.
   * 
   * @example
   * dubbo-application
   */
  dubboApplicationName?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  edasAppName?: string;
  /**
   * @remarks
   * The group.
   * 
   * @example
   * dubbo
   */
  group?: string;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The methods.
   */
  methods?: GetServiceListResponseBodyDataMethods[];
  /**
   * @remarks
   * The type of the service registry.
   * 
   * @example
   * nacos
   */
  registryType?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * com.alibaba.xxx
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * dubbo
   */
  serviceType?: string;
  /**
   * @remarks
   * The name of the Spring application.
   * 
   * @example
   * spring-application
   */
  springApplicationName?: string;
  /**
   * @remarks
   * The version information.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dubboApplicationName: 'DubboApplicationName',
      edasAppName: 'EdasAppName',
      group: 'Group',
      metadata: 'Metadata',
      methods: 'Methods',
      registryType: 'RegistryType',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      springApplicationName: 'SpringApplicationName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dubboApplicationName: 'string',
      edasAppName: 'string',
      group: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      methods: { 'type': 'array', 'itemType': GetServiceListResponseBodyDataMethods },
      registryType: 'string',
      serviceName: 'string',
      serviceType: 'string',
      springApplicationName: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

