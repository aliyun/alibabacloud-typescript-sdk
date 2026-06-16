// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuthorizeResourceServerScopesToClientRequest extends $dara.Model {
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
  /**
   * @remarks
   * The list of scope permission IDs for the resource server.
   * 
   * This parameter is required.
   * 
   * @example
   * ["ress_XXXXX","ress_XXXXX"]
   */
  resourceServerScopeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientApplicationId: 'ClientApplicationId',
      instanceId: 'InstanceId',
      resourceServerApplicationId: 'ResourceServerApplicationId',
      resourceServerScopeIds: 'ResourceServerScopeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientApplicationId: 'string',
      instanceId: 'string',
      resourceServerApplicationId: 'string',
      resourceServerScopeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceServerScopeIds)) {
      $dara.Model.validateArray(this.resourceServerScopeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

