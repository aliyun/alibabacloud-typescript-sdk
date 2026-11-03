// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The YML file configuration information of the instance.
   */
  esConfig?: { [key: string]: string };
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must ensure that the value is unique among different requests. The value can be up to 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to force the change.
   */
  force?: boolean;
  /**
   * @remarks
   * The change strategy for Elasticsearch, such as the change method during index updates, cluster upgrades, or service deployments. Valid values:
   * - blue_green: Blue-green change. You can run two identical environments (blue and green) in parallel to achieve seamless switching.
   * - normal: In-place change. Changes are applied directly to the current environment (such as upgrades or scaling) without requiring additional resources.
   * - intelligent: Intelligent change. The system automatically analyzes the change type and environment status to dynamically select the optimal change method (blue-green change or in-place change).
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

