// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePatrolConfigRequestScopeConfig extends $dara.Model {
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

export class UpdatePatrolConfigRequest extends $dara.Model {
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
   * The inspection scope configuration.
   */
  scopeConfig?: UpdatePatrolConfigRequestScopeConfig;
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
  static names(): { [key: string]: string } {
    return {
      cron: 'cron',
      enabled: 'enabled',
      scopeConfig: 'scopeConfig',
      scopeType: 'scopeType',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      enabled: 'boolean',
      scopeConfig: UpdatePatrolConfigRequestScopeConfig,
      scopeType: 'string',
      timezone: 'string',
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

