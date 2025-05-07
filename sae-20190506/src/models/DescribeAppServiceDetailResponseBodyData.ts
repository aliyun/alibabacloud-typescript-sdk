// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAppServiceDetailResponseBodyDataMethods } from "./DescribeAppServiceDetailResponseBodyDataMethods";


export class DescribeAppServiceDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the Dubbo application.
   * 
   * @example
   * service-consumer
   */
  dubboApplicationName?: string;
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
   * The metadata. Example: `{side: "provider", port: "18081", preserved: {register: {source: "SPRING_CLOUD"}},…}`.
   * 
   * @example
   * {side: "provider", port: "18081", preserved: {register: {source: "SPRING_CLOUD"}},…}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The methods.
   */
  methods?: DescribeAppServiceDetailResponseBodyDataMethods[];
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * service-provider
   */
  serviceName?: string;
  /**
   * @remarks
   * The port used by the service.
   */
  servicePorts?: number[];
  /**
   * @remarks
   * The protocol used by the service.
   * 
   * @example
   * HTTP
   */
  serviceProtocol?: string;
  /**
   * @remarks
   * The tag of the service.
   */
  serviceTags?: string[];
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   **dubbo**
   * *   **springCloud**
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The name of the Spring Cloud application.
   * 
   * @example
   * service-provider
   */
  springApplicationName?: string;
  /**
   * @remarks
   * The version of the service. You can create a custom version.
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
      serviceName: 'ServiceName',
      servicePorts: 'ServicePorts',
      serviceProtocol: 'ServiceProtocol',
      serviceTags: 'ServiceTags',
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
      methods: { 'type': 'array', 'itemType': DescribeAppServiceDetailResponseBodyDataMethods },
      serviceName: 'string',
      servicePorts: { 'type': 'array', 'itemType': 'number' },
      serviceProtocol: 'string',
      serviceTags: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.servicePorts)) {
      $dara.Model.validateArray(this.servicePorts);
    }
    if(Array.isArray(this.serviceTags)) {
      $dara.Model.validateArray(this.serviceTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

