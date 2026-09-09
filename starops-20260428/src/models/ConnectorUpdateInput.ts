// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConnectorAuthenticationUpdateInput } from "./ConnectorAuthenticationUpdateInput";
import { ConnectorRuntime } from "./ConnectorRuntime";


export class ConnectorUpdateInput extends $dara.Model {
  /**
   * @remarks
   * The authentication configuration used to replace the existing credentials.
   */
  authentication?: ConnectorAuthenticationUpdateInput;
  /**
   * @remarks
   * The list of capabilities used to replace the existing grants.
   */
  capabilityGrants?: { [key: string]: any }[];
  /**
   * @remarks
   * The provider configuration used to update the Connector. Only AlibabaCloudResources allows null. Other providers must provide an object.
   * 
   * **if can be null:**
   * true
   */
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * The description of the Connector.
   * 
   * @example
   * Production observability data
   */
  description?: string;
  /**
   * @remarks
   * The display name of the Connector.
   * 
   * @example
   * CMS 2.0 production workspace
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether to enable the Connector.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The execution policy used to replace the existing policy.
   */
  policy?: { [key: string]: any };
  /**
   * @remarks
   * The runtime configuration used to update the Connector.
   */
  runtime?: ConnectorRuntime;
  /**
   * @remarks
   * The provider target used to update the Connector.
   */
  target?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      authentication: 'authentication',
      capabilityGrants: 'capabilityGrants',
      configuration: 'configuration',
      description: 'description',
      displayName: 'displayName',
      enabled: 'enabled',
      policy: 'policy',
      runtime: 'runtime',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authentication: ConnectorAuthenticationUpdateInput,
      capabilityGrants: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      displayName: 'string',
      enabled: 'boolean',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

