// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserAuthConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication information.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  authConfig?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * This parameter is required.
   * 
   * @example
   * bailian-01ce5586-420f-4cbf-9392-7001a1c33bc1
   */
  authConfigName?: string;
  /**
   * @remarks
   * The type of the credential.
   * 
   * @example
   * DingdingAccessToken
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-3c60c6e123e146fbb6f8
   */
  connectorId?: string;
  /**
   * @remarks
   * The version of the connector.
   * 
   * @example
   * 1
   */
  connectorVersion?: string;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'AuthConfig',
      authConfigName: 'AuthConfigName',
      authType: 'AuthType',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      authConfigName: 'string',
      authType: 'string',
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

