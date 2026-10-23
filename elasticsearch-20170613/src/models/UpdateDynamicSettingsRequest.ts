// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDynamicSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure idempotence.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The region ID of the Elasticsearch instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The dynamic configurations of the cluster to be updated. Specify a JSON object where the keys are configuration item names and the values are configuration values.
   * 
   * @example
   * {"indices.recovery.max_bytes_per_sec":"100mb"}
   */
  body?: string;
  /**
   * @remarks
   * The effective mode for dynamic configurations. Valid values:
   * - persistent: persistent configurations.
   * - transient: temporary configurations, which become invalid after the cluster is restarted.
   * 
   * @example
   * persistent
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      body: 'body',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      regionId: 'string',
      body: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

