// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the application secret.
   * 
   * This parameter is required.
   * 
   * @example
   * 2efd5004-005c-4f05-83c6-5b1dd176****
   */
  appSecretId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecretId: 'AppSecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

