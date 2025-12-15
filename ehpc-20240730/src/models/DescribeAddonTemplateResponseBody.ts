// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddonNodeTemplate } from "./AddonNodeTemplate";


export class DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the EIP is automatically created.
   * 
   * @example
   * True
   */
  autoCreate?: boolean;
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  bandwidth?: string;
  /**
   * @remarks
   * The EIP ID.
   * 
   * @example
   * eip-bp1jwtsuoiif2qf90****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The billing method of the EIP. Valid values:
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * Default value: PostPaid
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The metering method of the EIP. Valid values:
   * 
   * *   PayByBandwidth: pay by bandwidth.
   * *   PayByTraffic: pay by data transfer.
   * 
   * Valid values of N: 1 to 10.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      bandwidth: 'Bandwidth',
      eipInstanceId: 'EipInstanceId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'string',
      eipInstanceId: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonResourcesSpec extends $dara.Model {
  /**
   * @remarks
   * The Elastic Compute Service (ECS) resource configurations of the addon.
   */
  ecsResources?: AddonNodeTemplate[];
  /**
   * @remarks
   * The Elastic IP Address (EIP) configurations of the service.
   */
  eipResource?: DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource;
  static names(): { [key: string]: string } {
    return {
      ecsResources: 'EcsResources',
      eipResource: 'EipResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsResources: { 'type': 'array', 'itemType': AddonNodeTemplate },
      eipResource: DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource,
    };
  }

  validate() {
    if(Array.isArray(this.ecsResources)) {
      $dara.Model.validateArray(this.ecsResources);
    }
    if(this.eipResource && typeof (this.eipResource as any).validate === 'function') {
      (this.eipResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams extends $dara.Model {
  /**
   * @remarks
   * The help information of the parameter.
   */
  helpText?: string;
  /**
   * @remarks
   * The parameter label.
   */
  label?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * This parameter is required.
   * 
   * @example
   * MYSQL_HOME
   */
  name?: string;
  /**
   * @remarks
   * The parameter type.
   * 
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * This parameter is required.
   * 
   * @example
   * usr/local/mysql
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      helpText: 'HelpText',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helpText: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL extends $dara.Model {
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * *   **TCP**: forwards TCP packets.
   * *   **UDP**: forwards UDP packets.
   * *   **Any**: forwards all packets.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * The port number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The source CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/12
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      port: 'Port',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      port: 'number',
      sourceCidrIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonServicesSpec extends $dara.Model {
  /**
   * @remarks
   * The parameter configurations of the service.
   */
  inputParams?: DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams[];
  /**
   * @remarks
   * The security group configurations of the service.
   */
  networkACL?: DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL[];
  /**
   * @remarks
   * The service access type.
   * 
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @remarks
   * The service access URL.
   * 
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      inputParams: 'InputParams',
      networkACL: 'NetworkACL',
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParams: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams },
      networkACL: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL },
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputParams)) {
      $dara.Model.validateArray(this.inputParams);
    }
    if(Array.isArray(this.networkACL)) {
      $dara.Model.validateArray(this.networkACL);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddon extends $dara.Model {
  /**
   * @remarks
   * The addon description.
   */
  description?: string;
  /**
   * @remarks
   * The addon icon.
   * 
   * @example
   * /assets/icons/your_icon.svg
   */
  icon?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
  /**
   * @remarks
   * The date when the addon template was last updated.
   * 
   * @example
   * 2024-08-22 18:11:17
   */
  lastUpdate?: string;
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   */
  resourcesSpec?: DescribeAddonTemplateResponseBodyAddonResourcesSpec;
  /**
   * @remarks
   * The addon configurations.
   */
  servicesSpec?: DescribeAddonTemplateResponseBodyAddonServicesSpec[];
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      icon: 'Icon',
      label: 'Label',
      lastUpdate: 'LastUpdate',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: 'string',
      label: 'string',
      lastUpdate: 'string',
      name: 'string',
      resourcesSpec: DescribeAddonTemplateResponseBodyAddonResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpec },
      version: 'string',
    };
  }

  validate() {
    if(this.resourcesSpec && typeof (this.resourcesSpec as any).validate === 'function') {
      (this.resourcesSpec as any).validate();
    }
    if(Array.isArray(this.servicesSpec)) {
      $dara.Model.validateArray(this.servicesSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the addon template.
   */
  addon?: DescribeAddonTemplateResponseBodyAddon;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addon: 'Addon',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addon: DescribeAddonTemplateResponseBodyAddon,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.addon && typeof (this.addon as any).validate === 'function') {
      (this.addon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

