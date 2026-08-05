// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AkSkIdentityConfig } from "./AkSkIdentityConfig";
import { ApiKeyIdentityConfig } from "./ApiKeyIdentityConfig";
import { JwtIdentityConfig } from "./JwtIdentityConfig";


export class GetConsumerResponseBodyDataConsumerGroups extends $dara.Model {
  /**
   * @remarks
   * The consumer group ID.
   * 
   * @example
   * csg-8c13d2b4f8a1
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The consumer group description.
   * 
   * @example
   * Used for grouping online API callers
   */
  description?: string;
  /**
   * @remarks
   * The time when the API consumer joined the consumer group, in Unix milliseconds timestamp.
   * 
   * @example
   * 1715769600000
   */
  joinTimestamp?: number;
  /**
   * @remarks
   * The consumer group name.
   * 
   * @example
   * api-consumer-group
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      description: 'description',
      joinTimestamp: 'joinTimestamp',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      description: 'string',
      joinTimestamp: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AK/SK identity authentication configuration.
   */
  akSkIdentityConfigs?: AkSkIdentityConfig[];
  /**
   * @remarks
   * The API key identity authentication configuration.
   */
  apiKeyIdentityConfig?: ApiKeyIdentityConfig;
  /**
   * @remarks
   * The list of consumer groups to which the API consumer belongs.
   */
  consumerGroups?: GetConsumerResponseBodyDataConsumerGroups[];
  /**
   * @remarks
   * The API consumer ID.
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
   * The publish status of the API in the current environment.
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
   * Test-dedicated consumer
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the API consumer is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The JWT identity authentication configuration.
   */
  jwtIdentityConfig?: JwtIdentityConfig;
  /**
   * @remarks
   * The API consumer name.
   * 
   * @example
   * consumer-1
   */
  name?: string;
  /**
   * @remarks
   * The update timestamp.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      akSkIdentityConfigs: 'akSkIdentityConfigs',
      apiKeyIdentityConfig: 'apiKeyIdentityConfig',
      consumerGroups: 'consumerGroups',
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
      consumerGroups: { 'type': 'array', 'itemType': GetConsumerResponseBodyDataConsumerGroups },
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
    if(Array.isArray(this.consumerGroups)) {
      $dara.Model.validateArray(this.consumerGroups);
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
   * The response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetConsumerResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
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

