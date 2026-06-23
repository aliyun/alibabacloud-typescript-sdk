// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuthorizationServerRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization server ID.
   * 
   * This parameter is required.
   * 
   * @example
   * iauths_system
   */
  authorizationServerId?: string;
  /**
   * @remarks
   * The name of the authorization server.
   * 
   * @example
   * my_authorization_server
   */
  authorizationServerName?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate a parameter value, but you must make sure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see References: [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
   * 
   * This parameter is required.
   * 
   * @example
   * abc123xyz
   */
  clientToken?: string;
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
   * The domain name used by the issuer.
   * 
   * @example
   * xxxx.aliyunidaas.com
   */
  issuerDomain?: string;
  /**
   * @remarks
   * The issuer mode.
   * 
   * @example
   * dynamic
   */
  issuerMode?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationServerId: 'AuthorizationServerId',
      authorizationServerName: 'AuthorizationServerName',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      issuerDomain: 'IssuerDomain',
      issuerMode: 'IssuerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationServerId: 'string',
      authorizationServerName: 'string',
      clientToken: 'string',
      instanceId: 'string',
      issuerDomain: 'string',
      issuerMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

