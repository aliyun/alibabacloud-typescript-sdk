// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to obtain the application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The publishing environment. Valid values: prod and staging.
   * 
   * @example
   * staging
   */
  publishEnv?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      publishEnv: 'PublishEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      publishEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

