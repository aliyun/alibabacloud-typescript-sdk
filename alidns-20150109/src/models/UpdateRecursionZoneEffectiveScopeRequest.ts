// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionZoneEffectiveScopeRequestEffectiveScopes extends $dara.Model {
  /**
   * @example
   * account
   */
  effectiveType?: string;
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
   * @example
   * 21079fa016944979537637959d09bc
   */
  clientToken?: string;
  effectiveScopes?: UpdateRecursionZoneEffectiveScopeRequestEffectiveScopes[];
  /**
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

