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
   * The authorization server name.
   * 
   * @example
   * my_authorization_server
   */
  authorizationServerName?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request. You can generate a parameter value on your client to ensure that the value is unique across different requests. ClientToken supports only ASCII characters and can be up to 64 characters in length. For more information, see References: [How to ensure idempotence](https://www.alibabacloud.com/help/zh/ecs/developer-reference/how-to-ensure-idempotence).
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

