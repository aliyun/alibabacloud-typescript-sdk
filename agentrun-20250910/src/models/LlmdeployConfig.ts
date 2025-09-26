// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PolicyConfig } from "./PolicyConfig";
import { TargetServiceConfig } from "./TargetServiceConfig";


export class LLMDeployConfig extends $dara.Model {
  autoDeploy?: boolean;
  backendScene?: string;
  customDomainIds?: string[];
  gatewayType?: string;
  policyConfigs?: PolicyConfig[];
  serviceConfigs?: TargetServiceConfig[];
  static names(): { [key: string]: string } {
    return {
      autoDeploy: 'autoDeploy',
      backendScene: 'backendScene',
      customDomainIds: 'customDomainIds',
      gatewayType: 'gatewayType',
      policyConfigs: 'policyConfigs',
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoDeploy: 'boolean',
      backendScene: 'string',
      customDomainIds: { 'type': 'array', 'itemType': 'string' },
      gatewayType: 'string',
      policyConfigs: { 'type': 'array', 'itemType': PolicyConfig },
      serviceConfigs: { 'type': 'array', 'itemType': TargetServiceConfig },
    };
  }

  validate() {
    if(Array.isArray(this.customDomainIds)) {
      $dara.Model.validateArray(this.customDomainIds);
    }
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

