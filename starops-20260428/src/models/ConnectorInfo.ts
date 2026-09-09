// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConnectorAuthentication } from "./ConnectorAuthentication";
import { ConnectorRuntime } from "./ConnectorRuntime";


export class ConnectorInfo extends $dara.Model {
  /**
   * @remarks
   * Safe authentication identity
   * 
   * This parameter is required.
   */
  authentication?: ConnectorAuthentication;
  /**
   * @remarks
   * The list of capabilities granted to the Connector.
   * 
   * This parameter is required.
   */
  capabilityGrants?: { [key: string]: any }[];
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
   * Creation time
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-25T12:00:00Z
   */
  createTime?: string;
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
   * Indicates whether the Connector is enabled.
   * 
   * This parameter is required.
   */
  enabled?: boolean;
  /**
   * @remarks
   * ETag
   * 
   * This parameter is required.
   * 
   * @example
   * "connector-rev-1"
   */
  etag?: string;
  /**
   * @remarks
   * Digital employee name
   * 
   * This parameter is required.
   * 
   * @example
   * production-ops
   */
  name?: string;
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
   * Revision
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The runtime configuration of the Connector.
   * 
   * This parameter is required.
   */
  runtime?: ConnectorRuntime;
  /**
   * @remarks
   * Resource status
   * 
   * This parameter is required.
   */
  status?: { [key: string]: any };
  /**
   * @remarks
   * Provider target
   * 
   * This parameter is required.
   */
  target?: { [key: string]: any };
  /**
   * @remarks
   * Update time
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-08-25T12:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      authentication: 'authentication',
      capabilityGrants: 'capabilityGrants',
      configuration: 'configuration',
      connectorName: 'connectorName',
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      enabled: 'enabled',
      etag: 'etag',
      name: 'name',
      policy: 'policy',
      provider: 'provider',
      revision: 'revision',
      runtime: 'runtime',
      status: 'status',
      target: 'target',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authentication: ConnectorAuthentication,
      capabilityGrants: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      connectorName: 'string',
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      enabled: 'boolean',
      etag: 'string',
      name: 'string',
      policy: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      provider: 'string',
      revision: 'number',
      runtime: ConnectorRuntime,
      status: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      target: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'string',
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
    if(this.status) {
      $dara.Model.validateMap(this.status);
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

