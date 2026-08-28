// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerPatrolRequestScopeConfig extends $dara.Model {
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

export class TriggerPatrolRequest extends $dara.Model {
  /**
   * @remarks
   * The inspection scope configuration.
   */
  scopeConfig?: TriggerPatrolRequestScopeConfig;
  /**
   * @remarks
   * The inspection scope type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      scopeConfig: 'scopeConfig',
      scopeType: 'scopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scopeConfig: TriggerPatrolRequestScopeConfig,
      scopeType: 'string',
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

