// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AkSkIdentityConfig } from "./AkSkIdentityConfig";
import { ApiKeyIdentityConfig } from "./ApiKeyIdentityConfig";
import { JwtIdentityConfig } from "./JwtIdentityConfig";


export class UpdateConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of AK/SK identity authentication configurations.
   */
  akSkIdentityConfigs?: AkSkIdentityConfig[];
  /**
   * @remarks
   * The API key identity authentication configuration.
   */
  apikeyIdentityConfig?: ApiKeyIdentityConfig;
  /**
   * @remarks
   * Specifies whether to clear the expiration time and restore permanent validity. If this parameter is set to true, expireAt cannot be specified at the same time. The default value is false, which indicates that the expiration time is not cleared.
   * 
   * @example
   * false
   */
  clearExpireAt?: boolean;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test consumer
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the consumer.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the consumer after renewal. This parameter can be set to true only when renew=true. The default value is false, which retains the current enabled or disabled state and does not implicitly enable a manually disabled consumer.
   * 
   * @example
   * false
   */
  enableAfterRenewal?: boolean;
  /**
   * @remarks
   * The expiration time of the consumer, in UTC UNIX seconds. It must be a positive integer and later than the current time. If this parameter is not specified, the original value is retained. This parameter cannot be set at the same time as clearExpireAt=true. If renew=true, the value must be later than the original unexpired expiration time. If the configuration is saved but fails to be delivered, a retry with the original expiration time is allowed, but shortening the expiration time is still prohibited.
   * 
   * @example
   * 1893456000
   */
  expireAt?: number;
  /**
   * @remarks
   * The JWT identity authentication configuration.
   */
  jwtIdentityConfig?: JwtIdentityConfig;
  /**
   * @remarks
   * Specifies whether to only renew the consumer. If this parameter is set to true, only the validity period is updated and the consumer is explicitly enabled at the same time. The latest credentials, description, and authorizations on the server are retained. You must set expireAt or clearExpireAt=true, and you cannot specify identity configurations or description. The default value is false, which retains the original consumer update semantics.
   * 
   * @example
   * false
   */
  renew?: boolean;
  static names(): { [key: string]: string } {
    return {
      akSkIdentityConfigs: 'akSkIdentityConfigs',
      apikeyIdentityConfig: 'apikeyIdentityConfig',
      clearExpireAt: 'clearExpireAt',
      description: 'description',
      enable: 'enable',
      enableAfterRenewal: 'enableAfterRenewal',
      expireAt: 'expireAt',
      jwtIdentityConfig: 'jwtIdentityConfig',
      renew: 'renew',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akSkIdentityConfigs: { 'type': 'array', 'itemType': AkSkIdentityConfig },
      apikeyIdentityConfig: ApiKeyIdentityConfig,
      clearExpireAt: 'boolean',
      description: 'string',
      enable: 'boolean',
      enableAfterRenewal: 'boolean',
      expireAt: 'number',
      jwtIdentityConfig: JwtIdentityConfig,
      renew: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.akSkIdentityConfigs)) {
      $dara.Model.validateArray(this.akSkIdentityConfigs);
    }
    if(this.apikeyIdentityConfig && typeof (this.apikeyIdentityConfig as any).validate === 'function') {
      (this.apikeyIdentityConfig as any).validate();
    }
    if(this.jwtIdentityConfig && typeof (this.jwtIdentityConfig as any).validate === 'function') {
      (this.jwtIdentityConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

