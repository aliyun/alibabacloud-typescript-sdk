// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEdgeContainerAppImageSecretRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID, which can be obtained using the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) API.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * Name of the image secret.
   * 
   * This parameter is required.
   * 
   * @example
   * reg-123*****
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

