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
   * The description.
   * 
   * @example
   * Test consumer
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the consumer is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The JWT identity authentication configuration.
   */
  jwtIdentityConfig?: JwtIdentityConfig;
  static names(): { [key: string]: string } {
    return {
      akSkIdentityConfigs: 'akSkIdentityConfigs',
      apikeyIdentityConfig: 'apikeyIdentityConfig',
      description: 'description',
      enable: 'enable',
      jwtIdentityConfig: 'jwtIdentityConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akSkIdentityConfigs: { 'type': 'array', 'itemType': AkSkIdentityConfig },
      apikeyIdentityConfig: ApiKeyIdentityConfig,
      description: 'string',
      enable: 'boolean',
      jwtIdentityConfig: JwtIdentityConfig,
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

