// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserAuthConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * uac-8f4bfe29041441d8bdd9
   */
  authConfigId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector-5e43ef26b53e4a158529
   */
  connectorId?: string;
  /**
   * @example
   * 2
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

