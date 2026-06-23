// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAuthorizationServerRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的授权服务器资源ID。
   * 
   * This parameter is required.
   * 
   * @example
   * iauths_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  authorizationServerId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationServerId: 'AuthorizationServerId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationServerId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

