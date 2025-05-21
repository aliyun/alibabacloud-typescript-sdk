// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs } from "./DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs";


export class DeployHttpApiRequestRestApiConfigEnvironment extends $dara.Model {
  /**
   * @remarks
   * API publication scenario.
   * 
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @remarks
   * List of user domains.
   */
  customDomainIds?: string[];
  /**
   * @remarks
   * Environment ID.
   * 
   * @example
   * env-cpqnr6tlhtgubc***
   */
  environmentId?: string;
  /**
   * @remarks
   * Existing service configurations. Only one entry is allowed in a single-service scenario, while multiple entries are allowed in scenarios such as by ratio or by content.
   */
  serviceConfigs?: DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs[];
  static names(): { [key: string]: string } {
    return {
      backendScene: 'backendScene',
      customDomainIds: 'customDomainIds',
      environmentId: 'environmentId',
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendScene: 'string',
      customDomainIds: { 'type': 'array', 'itemType': 'string' },
      environmentId: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': DeployHttpApiRequestRestApiConfigEnvironmentServiceConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.customDomainIds)) {
      $dara.Model.validateArray(this.customDomainIds);
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

