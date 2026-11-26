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
   * The API key authentication identity configuration.
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
   * The expiration time of the consumer, in UTC UNIX seconds. The value must be a positive integer and later than the current time. If this parameter is not specified, the consumer is permanently valid. The API key, JWT, and HMAC of the same consumer share this expiration time. Milliseconds are not automatically converted.
   * 
   * @example
   * 1893456000
   */
  expireAt?: number;
  /**
   * @remarks
   * The extended information of the consumer. The value is saved as a raw string and can be up to 65,535 UTF-8 bytes in length. If this parameter is omitted, no extended information is configured.
   * 
   * @example
   * partner-a
   */
  extInfo?: string;
  /**
   * @remarks
   * The gateway type. Valid values:
   * - API: consumer of a cloud-native API gateway
   * - AI: consumer of an AI gateway
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
   * The idempotency token. The caller generates a globally unique value, such as a UUID, with a maximum length of 64 characters. Within approximately 24 hours after the first request succeeds, a repeated request with the same ClientToken and identical request parameters directly returns the consumer ID created in the first request without creating a new consumer. If the request parameters are different, an IdempotentParameterMismatch error is returned. If the first request is still being processed, an IdempotentProcessing error is returned. If this parameter is not specified, idempotency control is disabled, and the behavior is the same as that of the existing version.
   * 
   * @example
   * 5f7a2c1e-9b3d-4e8f-a1c6-0d2b8e4f7a13
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. If you set this parameter to true, the system performs the same parameter, permission, IAM, resource policy, resource existence, and business rule checks as a real creation request. However, the system does not create the consumer, write data to the database, create or delete a SecretRef, or cause side effects such as generating audit logs. If this parameter is not specified or is set to false, the behavior is the same as that of the existing version.
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      akSkIdentityConfigs: 'akSkIdentityConfigs',
      apikeyIdentityConfig: 'apikeyIdentityConfig',
      description: 'description',
      enable: 'enable',
      expireAt: 'expireAt',
      extInfo: 'extInfo',
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
      extInfo: 'string',
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

