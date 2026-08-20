// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConnectorRequest extends $dara.Model {
  /**
   * @remarks
   * The bandwidth value (Mbit/s).
   * 
   * @example
   * 1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The connector name. The name must be 1 to 128 characters in length and can contain letters, digits, Chinese characters, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * auto-dr-connector-cq-dl3e4j
   */
  name?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The connector instance status. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Shutdown.
   * 
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      name: 'Name',
      region: 'Region',
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      name: 'string',
      region: 'string',
      switchStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

