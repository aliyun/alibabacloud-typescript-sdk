// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The YML file configuration of the instance.
   */
  esConfig?: { [key: string]: string };
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to forcefully apply the change.
   */
  force?: boolean;
  /**
   * @remarks
   * The change strategy for Elasticsearch (for example, the change method used during index updates, cluster upgrades, or service deployments). Valid values:
   * - blue_green: blue-green change. Implements seamless switchover by running two identical environments (blue and green) in parallel.
   * - normal: in-place change. Performs changes directly in the current environment (for example, upgrades or scaling) without requiring additional resources.
   * - intelligent: intelligent change. The system automatically analyzes the change type and environment state, and dynamically selects the optimal change method (blue-green change or in-place change).
   * 
   * @example
   * normal
   */
  updateStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      esConfig: 'esConfig',
      clientToken: 'clientToken',
      force: 'force',
      updateStrategy: 'updateStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      clientToken: 'string',
      force: 'boolean',
      updateStrategy: 'string',
    };
  }

  validate() {
    if(this.esConfig) {
      $dara.Model.validateMap(this.esConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

