// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAuthConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The credential ID.
   * 
   * This parameter is required.
   * 
   * @example
   * uac-ac11e0f1db7647ce8469
   */
  authConfigId?: string;
  /**
   * @remarks
   * The connector ID.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-5e43ef26b53e4a158529
   */
  connectorId?: string;
  /**
   * @remarks
   * The connector version.
   * 
   * @example
   * 1
   */
  connectorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigId: 'AuthConfigId',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigId: 'string',
      connectorId: 'string',
      connectorVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

