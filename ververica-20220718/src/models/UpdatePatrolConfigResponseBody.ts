// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePatrolConfigResponseBodyDataScopeConfig extends $dara.Model {
  /**
   * @remarks
   * The list of deployment IDs. This parameter is valid only when scopeType is set to DEPLOYMENTS.
   */
  deploymentIds?: string[];
  /**
   * @remarks
   * The tag mapping. This parameter is valid only when scopeType is set to TAGS. The key is the tag name, and the value is a list of tag values.
   */
  tags?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      deploymentIds: 'deploymentIds',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.deploymentIds)) {
      $dara.Model.validateArray(this.deploymentIds);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatrolConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration creation time, in milliseconds (UNIX timestamp).
   * 
   * @example
   * 1756200000000
   */
  configCreatedAt?: number;
  /**
   * @remarks
   * The configuration update time, in milliseconds (UNIX timestamp).
   * 
   * @example
   * 1756250000000
   */
  configUpdatedAt?: number;
  /**
   * @remarks
   * The cron expression that defines the inspection scheduling time.
   * 
   * @example
   * 0 2 * * *
   */
  cron?: string;
  /**
   * @remarks
   * Specifies whether to enable the inspection.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The next inspection time, in milliseconds (UNIX timestamp).
   * 
   * @example
   * 1756260000000
   */
  nextPatrolAt?: number;
  /**
   * @remarks
   * The inspection scope configuration.
   */
  scopeConfig?: UpdatePatrolConfigResponseBodyDataScopeConfig;
  /**
   * @remarks
   * The inspection scope type.
   * 
   * @example
   * ALL
   */
  scopeType?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * a14bda1c4a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      configCreatedAt: 'configCreatedAt',
      configUpdatedAt: 'configUpdatedAt',
      cron: 'cron',
      enabled: 'enabled',
      namespace: 'namespace',
      nextPatrolAt: 'nextPatrolAt',
      scopeConfig: 'scopeConfig',
      scopeType: 'scopeType',
      timezone: 'timezone',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCreatedAt: 'number',
      configUpdatedAt: 'number',
      cron: 'string',
      enabled: 'boolean',
      namespace: 'string',
      nextPatrolAt: 'number',
      scopeConfig: UpdatePatrolConfigResponseBodyDataScopeConfig,
      scopeType: 'string',
      timezone: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.scopeConfig && typeof (this.scopeConfig as any).validate === 'function') {
      (this.scopeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePatrolConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The inspection configuration response data.
   */
  data?: UpdatePatrolConfigResponseBodyData;
  /**
   * @remarks
   * The error code. This parameter is not empty when success is false. This parameter is empty when success is true.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message. This parameter is not empty when success is false. This parameter is empty when success is true.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code, which is always 200. Use the success parameter to determine whether the request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdatePatrolConfigResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

