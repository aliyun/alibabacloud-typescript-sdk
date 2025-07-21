// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerAuthorizationRulesRequestAuthorizationRulesResourceIdentifier extends $dara.Model {
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-cti17hem1hktoruj98ug
   */
  environmentId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ha-cn-li942gy8p03
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
      resourceId: 'resourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateConsumerAuthorizationRulesRequestAuthorizationRules extends $dara.Model {
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-cu08olem1hkokaut34i0
   */
  consumerId?: string;
  /**
   * @remarks
   * The expiration mode. Valid values: LongTerm and ShortTerm.
   * 
   * @example
   * LongTerm
   */
  expireMode?: string;
  /**
   * @remarks
   * The expiration timestamp.
   * 
   * @example
   * 174116222x
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The resource identifier, which is provided to non-standard code sources for space reuse.
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
      consumerId: 'consumerId',
      expireMode: 'expireMode',
      expireTimestamp: 'expireTimestamp',
      resourceIdentifier: 'resourceIdentifier',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      expireMode: 'string',
      expireTimestamp: 'number',
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
   * The consumer authentication rules to be created.
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

