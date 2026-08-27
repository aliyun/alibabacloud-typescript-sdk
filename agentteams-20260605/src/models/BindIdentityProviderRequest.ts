// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The client idempotency token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ct-1234abcd
   */
  clientToken?: string;
  /**
   * @remarks
   * The identity provider type. Currently, only DingTalk is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The identity provider metadata. In the DingTalk scenario, this is a JSON object string that contains the `appKey`, `appSecret`, `corpId`, `encryptKey`, and `verificationToken` fields. This is a sensitive parameter.
   * 
   * @example
   * {"appKey":"dingxxxx","appSecret":"xxxxx","corpId":"dingxxxx","encryptKey":"xxxxx","verificationToken":"xxxxx"}
   */
  idpMetadata?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable logon. Default value: `true`. This default value is used if the parameter is not specified or is left empty.
   * 
   * @example
   * true
   */
  loginEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to enable user synchronization. Default value: `false`. User synchronization is enabled only when this parameter is explicitly set to `true`.
   * 
   * @example
   * true
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      identityProviderType: 'IdentityProviderType',
      idpMetadata: 'IdpMetadata',
      instanceId: 'InstanceId',
      loginEnabled: 'LoginEnabled',
      syncEnabled: 'SyncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      identityProviderType: 'string',
      idpMetadata: 'string',
      instanceId: 'string',
      loginEnabled: 'boolean',
      syncEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

