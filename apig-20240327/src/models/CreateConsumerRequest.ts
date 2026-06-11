// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AkSkIdentityConfig } from "./AkSkIdentityConfig";
import { ApiKeyIdentityConfig } from "./ApiKeyIdentityConfig";
import { JwtIdentityConfig } from "./JwtIdentityConfig";


export class CreateConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * A list of AK/SK identity configurations.
   */
  akSkIdentityConfigs?: AkSkIdentityConfig[];
  /**
   * @remarks
   * The identity configuration for API key authentication.
   */
  apikeyIdentityConfig?: ApiKeyIdentityConfig;
  /**
   * @remarks
   * The consumer description.
   * 
   * @example
   * consumer for test
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
   * The gateway type. Valid values:
   * 
   * - API: For a cloud-native API gateway.
   * 
   * - AI: For an AI gateway.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The JWT identity configuration.
   */
  jwtIdentityConfig?: JwtIdentityConfig;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      akSkIdentityConfigs: 'akSkIdentityConfigs',
      apikeyIdentityConfig: 'apikeyIdentityConfig',
      description: 'description',
      enable: 'enable',
      gatewayType: 'gatewayType',
      jwtIdentityConfig: 'jwtIdentityConfig',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akSkIdentityConfigs: { 'type': 'array', 'itemType': AkSkIdentityConfig },
      apikeyIdentityConfig: ApiKeyIdentityConfig,
      description: 'string',
      enable: 'boolean',
      gatewayType: 'string',
      jwtIdentityConfig: JwtIdentityConfig,
      name: 'string',
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

