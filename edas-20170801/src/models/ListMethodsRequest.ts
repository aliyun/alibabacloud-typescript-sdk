// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMethodsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * be213a4a-c7e4-473b-ab0****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * Method
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

