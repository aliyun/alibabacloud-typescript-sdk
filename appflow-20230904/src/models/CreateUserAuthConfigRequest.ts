// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserAuthConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ***
   */
  authConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bailian-01ce5586-420f-4cbf-9392-7001a1c33bc1
   */
  authConfigName?: string;
  /**
   * @example
   * DingdingAccessToken
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector-3c60c6e123e146fbb6f8
   */
  connectorId?: string;
  /**
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

