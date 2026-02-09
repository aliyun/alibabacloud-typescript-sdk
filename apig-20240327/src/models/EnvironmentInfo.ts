// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GatewayInfo } from "./GatewayInfo";
import { SubDomainInfo } from "./SubDomainInfo";


export class EnvironmentInfo extends $dara.Model {
  /**
   * @remarks
   * The environment alias.
   * 
   * @example
   * test-env
   */
  alias?: string;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1721116090326
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Specifies whether the environment is the default environment.
   * 
   * @example
   * false
   */
  default?: boolean;
  /**
   * @remarks
   * The environment descriptiont.
   * 
   * @example
   * This is a test environment.
   */
  description?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cq7l5s5lhtgi6qasrdc0
   */
  environmentId?: string;
  /**
   * @remarks
   * The instance information.
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The subdomains.
   */
  subDomainInfos?: SubDomainInfo[];
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1721116090326
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      createTimestamp: 'createTimestamp',
      default: 'default',
      description: 'description',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      resourceGroupId: 'resourceGroupId',
      subDomainInfos: 'subDomainInfos',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      createTimestamp: 'number',
      default: 'boolean',
      description: 'string',
      environmentId: 'string',
      gatewayInfo: GatewayInfo,
      name: 'string',
      resourceGroupId: 'string',
      subDomainInfos: { 'type': 'array', 'itemType': SubDomainInfo },
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(Array.isArray(this.subDomainInfos)) {
      $dara.Model.validateArray(this.subDomainInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

