// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionZoneEffectiveScopeRequestEffectiveScopes extends $dara.Model {
  /**
   * @remarks
   * The type of the effective scope. Valid value: *account*.
   * 
   * @example
   * account
   */
  effectiveType?: string;
  /**
   * @remarks
   * The values for the scope, which depend on the value of `EffectiveType`. If `EffectiveType` is set to `account`, this parameter is a list of account IDs.
   */
  scope?: string[];
  static names(): { [key: string]: string } {
    return {
      effectiveType: 'EffectiveType',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveType: 'string',
      scope: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scope)) {
      $dara.Model.validateArray(this.scope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecursionZoneEffectiveScopeRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure request idempotence. The token must be unique for each request. It can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  /**
   * @remarks
   * A list of effective scopes.
   */
  effectiveScopes?: UpdateRecursionZoneEffectiveScopeRequestEffectiveScopes[];
  /**
   * @remarks
   * The unique ID of the zone.
   * 
   * This parameter is required.
   * 
   * @example
   * 173671468000011
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      effectiveScopes: 'EffectiveScopes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      effectiveScopes: { 'type': 'array', 'itemType': UpdateRecursionZoneEffectiveScopeRequestEffectiveScopes },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.effectiveScopes)) {
      $dara.Model.validateArray(this.effectiveScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

