// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddonNodeTemplate } from "./AddonNodeTemplate";


export class GetAddonResponseBodyAddonResourcesSpecEipResource extends $dara.Model {
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
   * The EIP.
   * 
   * @example
   * 39.108.xx.xx
   */
  eipAddress?: string;
  /**
   * @remarks
   * The EIP ID.
   * 
   * @example
   * eip-bp1vi9124tbx1g3kr****
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The billing method of the EIP.
   * 
   * *   PostPaid: pay-as-you-go.
   * *   PrePaid: subscription.
   * 
   * Default value: PostPaid.
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
      eipAddress: 'EipAddress',
      eipInstanceId: 'EipInstanceId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'string',
      eipAddress: 'string',
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

export class GetAddonResponseBodyAddonResourcesSpec extends $dara.Model {
  /**
   * @remarks
   * The Elastic Compute Service (ECS) resource configurations of the addon.
   */
  ecsResources?: AddonNodeTemplate[];
  /**
   * @remarks
   * The Elastic IP Address (EIP) configurations.
   */
  eipResource?: GetAddonResponseBodyAddonResourcesSpecEipResource;
  static names(): { [key: string]: string } {
    return {
      ecsResources: 'EcsResources',
      eipResource: 'EipResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsResources: { 'type': 'array', 'itemType': AddonNodeTemplate },
      eipResource: GetAddonResponseBodyAddonResourcesSpecEipResource,
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

export class GetAddonResponseBodyAddonServicesSpecInputParams extends $dara.Model {
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

export class GetAddonResponseBodyAddonServicesSpecNetworkACL extends $dara.Model {
  /**
   * @remarks
   * The protocol type. Valid values:
   * 
   * TCP: forwards TCP packets.
   * 
   * UDP: forwards UDP packets.
   * 
   * Any: forwards all packets.
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

export class GetAddonResponseBodyAddonServicesSpec extends $dara.Model {
  /**
   * @remarks
   * The parameter configurations of the service.
   */
  inputParams?: GetAddonResponseBodyAddonServicesSpecInputParams[];
  /**
   * @remarks
   * The security group configurations of the service.
   */
  networkACL?: GetAddonResponseBodyAddonServicesSpecNetworkACL[];
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
      inputParams: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpecInputParams },
      networkACL: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpecNetworkACL },
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

export class GetAddonResponseBodyAddon extends $dara.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
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
   * The time when the addon was installed.
   * 
   * @example
   * 2024-08-22 18:11:17
   */
  installTime?: string;
  /**
   * @remarks
   * The addon label.
   */
  label?: string;
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
  resourcesSpec?: GetAddonResponseBodyAddonResourcesSpec;
  /**
   * @remarks
   * The service configurations of the addon.
   */
  servicesSpec?: GetAddonResponseBodyAddonServicesSpec[];
  /**
   * @remarks
   * The addon status.
   * 
   * @example
   * Running
   */
  status?: string;
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
      addonId: 'AddonId',
      description: 'Description',
      icon: 'Icon',
      installTime: 'InstallTime',
      label: 'Label',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      icon: 'string',
      installTime: 'string',
      label: 'string',
      name: 'string',
      resourcesSpec: GetAddonResponseBodyAddonResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpec },
      status: 'string',
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

export class GetAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the addon.
   */
  addon?: GetAddonResponseBodyAddon;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2F93D-003A-49C4-850C-B826EECF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addon: 'Addon',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addon: GetAddonResponseBodyAddon,
      requestId: 'string',
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

