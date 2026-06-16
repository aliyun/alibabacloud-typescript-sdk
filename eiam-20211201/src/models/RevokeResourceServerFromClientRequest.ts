// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeResourceServerFromClientRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the client application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  clientApplicationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the resource server application.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  resourceServerApplicationId?: string;
  static names(): { [key: string]: string } {
    return {
      clientApplicationId: 'ClientApplicationId',
      instanceId: 'InstanceId',
      resourceServerApplicationId: 'ResourceServerApplicationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientApplicationId: 'string',
      instanceId: 'string',
      resourceServerApplicationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

