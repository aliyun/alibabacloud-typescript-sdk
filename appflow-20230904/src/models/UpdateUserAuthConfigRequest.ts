// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserAuthConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The user authentication credential, provided as a JSON string.
   * 
   * @example
   * {\\"apiKey\\": \\"************\\"}
   */
  authConfig?: string;
  /**
   * @remarks
   * The ID of the credential.
   * 
   * This parameter is required.
   * 
   * @example
   * uac-42b60d53bcce466d9d08
   */
  authConfigId?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * @example
   * name
   */
  authConfigName?: string;
  /**
   * @remarks
   * The ID of the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-6b8df2297dca4a5f8f15
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
      authConfig: 'AuthConfig',
      authConfigId: 'AuthConfigId',
      authConfigName: 'AuthConfigName',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      authConfigId: 'string',
      authConfigName: 'string',
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

