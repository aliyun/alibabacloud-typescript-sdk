// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConnectorAuthenticationInput } from "./ConnectorAuthenticationInput";
import { ConnectorRuntime } from "./ConnectorRuntime";


export class ConnectorCreateInput extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration used to access the target service.
   * 
   * This parameter is required.
   */
  authentication?: ConnectorAuthenticationInput;
  /**
   * @remarks
   * The list of capabilities granted to the Connector.
   * 
   * This parameter is required.
   */
  capabilityGrants?: { [key: string]: any }[];
  /**
   * @remarks
   * Idempotency token
   * 
   * This parameter is required.
   * 
   * @example
   * 8f73d0f4-3c8a-4eed-91e6-cf2f7ebcb3d7
   */
  clientToken?: string;
  /**
   * @remarks
   * Provider configuration
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * true
   */
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * Connector name
   * 
   * This parameter is required.
   * 
   * @example
   * cms2-prod
   */
  connectorName?: string;
  /**
   * @remarks
   * Description
   * 
   * @example
   * Production observability data
   */
  description?: string;
  /**
   * @remarks
   * Display name
   * 
   * This parameter is required.
   * 
   * @example
   * CMS 2.0 production workspace
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to enable the Connector after creation.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The execution policy of the Connector.
   * 
   * This parameter is required.
   */
  policy?: { [key: string]: any };
  /**
   * @remarks
   * Provider
   * 
   * This parameter is required.
   * 
   * @example
   * AlibabaCloudCms
   */
  provider?: string;
  /**
   * @remarks
   * The runtime configuration of the Connector.
   * 
   * This parameter is required.
   */
  runtime?: ConnectorRuntime;
  /**
   * @remarks
   * Provider target
   * 
   * This parameter is required.
   */
  target?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      authentication: 'authentication',
      capabilityGrants: 'capabilityGrants',
      clientToken: 'clientToken',
      configuration: 'configuration',
      connectorName: 'connectorName',
      description: 'description',
      displayName: 'displayName',
      enabled: 'enabled',
      policy: 'policy',
      provider: 'provider',
      runtime: 'runtime',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authentication: ConnectorAuthenticationInput,
      capabilityGrants: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      clientToken: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      connectorName: 'string',
      description: 'string',
      displayName: 'string',
      enabled: 'boolean',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      runtime: ConnectorRuntime,
      target: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(Array.isArray(this.capabilityGrants)) {
      $dara.Model.validateArray(this.capabilityGrants);
    }
    if(this.configuration) {
      $dara.Model.validateMap(this.configuration);
    }
    if(this.policy) {
      $dara.Model.validateMap(this.policy);
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(this.target) {
      $dara.Model.validateMap(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

