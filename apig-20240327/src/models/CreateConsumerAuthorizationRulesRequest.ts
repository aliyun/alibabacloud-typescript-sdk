// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerAuthorizationRulesRequestAuthorizationRulesResourceIdentifier extends $dara.Model {
  /**
   * @remarks
   * The ID of the environment.
   * 
   * @example
   * env-******
   */
  environmentId?: string;
  /**
   * @remarks
   * The ID of the parent resource.
   * 
   * @example
   * api-******
   */
  parentResourceId?: string;
  /**
   * @remarks
   * The ID of the target resource for authorization. The required ID type is determined by resourceType, and the prefix must match.
   * 
   * @example
   * ha-cn-li942gy8p03
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource information.
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      parentResourceId: 'parentResourceId',
      resourceId: 'resourceId',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      parentResourceId: 'string',
      resourceId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerAuthorizationRulesRequestAuthorizationRules extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * csg-8c13d2b4f8a1
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * @example
   * cs-******
   */
  consumerId?: string;
  /**
   * @remarks
   * The expiration mode. Only LongTerm is supported.
   * 
   * @example
   * LongTerm
   */
  expireMode?: string;
  /**
   * @remarks
   * The expiration timestamp. Unit: milliseconds.
   * 
   * @example
   * 1741162221
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The type of the principal.
   * 
   * @example
   * ConsumerGroup
   */
  principalType?: string;
  /**
   * @remarks
   * The resource identifier, which is provided to non-standard code sources as a unique identifier for space reuse.
   */
  resourceIdentifier?: CreateConsumerAuthorizationRulesRequestAuthorizationRulesResourceIdentifier;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * HttpApiRoute
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupId: 'consumerGroupId',
      consumerId: 'consumerId',
      expireMode: 'expireMode',
      expireTimestamp: 'expireTimestamp',
      principalType: 'principalType',
      resourceIdentifier: 'resourceIdentifier',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      consumerId: 'string',
      expireMode: 'string',
      expireTimestamp: 'number',
      principalType: 'string',
      resourceIdentifier: CreateConsumerAuthorizationRulesRequestAuthorizationRulesResourceIdentifier,
      resourceType: 'string',
    };
  }

  validate() {
    if(this.resourceIdentifier && typeof (this.resourceIdentifier as any).validate === 'function') {
      (this.resourceIdentifier as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerAuthorizationRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The consumer authentication rules.
   */
  authorizationRules?: CreateConsumerAuthorizationRulesRequestAuthorizationRules[];
  static names(): { [key: string]: string } {
    return {
      authorizationRules: 'authorizationRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRules: { 'type': 'array', 'itemType': CreateConsumerAuthorizationRulesRequestAuthorizationRules },
    };
  }

  validate() {
    if(Array.isArray(this.authorizationRules)) {
      $dara.Model.validateArray(this.authorizationRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

