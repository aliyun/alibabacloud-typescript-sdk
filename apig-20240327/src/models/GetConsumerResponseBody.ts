// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AkSkIdentityConfig } from "./AkSkIdentityConfig";
import { ApiKeyIdentityConfig } from "./ApiKeyIdentityConfig";
import { JwtIdentityConfig } from "./JwtIdentityConfig";


export class GetConsumerResponseBodyData extends $dara.Model {
  akSkIdentityConfigs?: AkSkIdentityConfig;
  apiKeyIdentityConfig?: ApiKeyIdentityConfig;
  /**
   * @example
   * cs-cvgbtk6m1hkji5sb8dr0
   */
  consumerId?: string;
  /**
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @example
   * ""
   */
  deployStatus?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  jwtIdentityConfig?: JwtIdentityConfig;
  /**
   * @example
   * consumer-1
   */
  name?: string;
  /**
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
      akSkIdentityConfigs: AkSkIdentityConfig,
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
    if(this.akSkIdentityConfigs && typeof (this.akSkIdentityConfigs as any).validate === 'function') {
      (this.akSkIdentityConfigs as any).validate();
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
   * @example
   * Ok
   */
  code?: string;
  data?: GetConsumerResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
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

