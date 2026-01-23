// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AkSkIdentityConfig } from "./AkSkIdentityConfig";
import { ApiKeyIdentityConfig } from "./ApiKeyIdentityConfig";
import { JwtIdentityConfig } from "./JwtIdentityConfig";


export class GetConsumerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AK/SK authentication configurations.
   */
  akSkIdentityConfigs?: AkSkIdentityConfig[];
  /**
   * @remarks
   * The API key authentication configurations.
   */
  apiKeyIdentityConfig?: ApiKeyIdentityConfig;
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-cvgbtk6m1hkji5sb8dr0
   */
  consumerId?: string;
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The publishing status of the API in the current environment.
   * 
   * @example
   * ""
   */
  deployStatus?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is the description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates if enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The JWT authentication configurations.
   */
  jwtIdentityConfig?: JwtIdentityConfig;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * consumer-1
   */
  name?: string;
  /**
   * @remarks
   * The last update timestamp.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      akSkIdentityConfigs: 'akSkIdentityConfigs',
      apiKeyIdentityConfig: 'apiKeyIdentityConfig',
      consumerId: 'consumerId',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      description: 'description',
      enable: 'enable',
      jwtIdentityConfig: 'jwtIdentityConfig',
      name: 'name',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      akSkIdentityConfigs: { 'type': 'array', 'itemType': AkSkIdentityConfig },
      apiKeyIdentityConfig: ApiKeyIdentityConfig,
      consumerId: 'string',
      createTimestamp: 'number',
      deployStatus: 'string',
      description: 'string',
      enable: 'boolean',
      jwtIdentityConfig: JwtIdentityConfig,
      name: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.akSkIdentityConfigs)) {
      $dara.Model.validateArray(this.akSkIdentityConfigs);
    }
    if(this.apiKeyIdentityConfig && typeof (this.apiKeyIdentityConfig as any).validate === 'function') {
      (this.apiKeyIdentityConfig as any).validate();
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

export class GetConsumerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response payload.
   */
  data?: GetConsumerResponseBodyData;
  /**
   * @remarks
   * The status message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 880C61B3-7B90-5570-A3F7-D6D92C0E2D36
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetConsumerResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

