// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFeaturesRequest extends $dara.Model {
  /**
   * @remarks
   * The AgentTeams instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * at-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The target resource name. Required for `WORKER`, `TEAM`, and `HUMAN`. Not required for `INSTANCE`.
   * 
   * @example
   * worker-a
   */
  resourceName?: string;
  /**
   * @remarks
   * The query target type: `INSTANCE` / `WORKER` / `TEAM` / `HUMAN`.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  targetScope?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      resourceName: 'ResourceName',
      targetScope: 'TargetScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      resourceName: 'string',
      targetScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

