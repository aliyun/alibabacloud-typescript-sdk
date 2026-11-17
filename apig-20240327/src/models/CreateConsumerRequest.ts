// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AkSkIdentityConfig } from "./AkSkIdentityConfig";
import { ApiKeyIdentityConfig } from "./ApiKeyIdentityConfig";
import { JwtIdentityConfig } from "./JwtIdentityConfig";


export class CreateConsumerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of AK/SK identity configurations.
   */
  akSkIdentityConfigs?: AkSkIdentityConfig[];
  /**
   * @remarks
   * The identity configuration for API key authentication.
   */
  apikeyIdentityConfig?: ApiKeyIdentityConfig;
  /**
   * @remarks
   * The description of the consumer.
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
   * The expiration time of the consumer. The value must be a positive integer that represents a UNIX timestamp in seconds and is later than the current time. If this parameter is left empty, the consumer never expires. The API key, JWT, and HMAC of the same consumer share this expiration time. Milliseconds are not automatically converted to seconds.
   * 
   * @example
   * 1893456000
   */
  expireAt?: number;
  /**
   * @remarks
   * The gateway type. Valid values:
   * - API: the consumer of a cloud-native API gateway.
   * - AI: the consumer of an AI gateway.
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
   * The name of the consumer.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The idempotence identity. You can invoke the API with a globally unique value (a UUID is recommended) that does not exceed 64 characters in length. If you invoke a duplicate request with the same ClientToken and identical request parameters within 24 hours after the first request succeeds, the system directly returns the consumer ID created by the first request without creating a new consumer. If you invoke a request with the same ClientToken but different request parameters, the system returns IdempotentParameterMismatch. If the first request is still being processed, the system returns IdempotentProcessing. If this parameter is left empty, idempotence control is disabled, and the behavior is the same as that of the existing version.
   * 
   * @example
   * 5f7a2c1e-9b3d-4e8f-a1c6-0d2b8e4f7a13
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. If you set this parameter to true, the system performs the same parameter, permission, IAM, resource policy, resource existence, and business rule checks as a real creation request, but does not create the consumer, write data to the database, create or delete a SecretRef, or generate audit logs. If this parameter is left empty or set to false, the behavior is the same as that of the previous version.
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      akSkIdentityConfigs: 'akSkIdentityConfigs',
      apikeyIdentityConfig: 'apikeyIdentityConfig',
      description: 'description',
      enable: 'enable',
      expireAt: 'expireAt',
      gatewayType: 'gatewayType',
      jwtIdentityConfig: 'jwtIdentityConfig',
      name: 'name',
      clientToken: 'clientToken',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akSkIdentityConfigs: { 'type': 'array', 'itemType': AkSkIdentityConfig },
      apikeyIdentityConfig: ApiKeyIdentityConfig,
      description: 'string',
      enable: 'boolean',
      expireAt: 'number',
      gatewayType: 'string',
      jwtIdentityConfig: JwtIdentityConfig,
      name: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
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

