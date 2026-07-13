// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecursionZoneEffectiveScopeShrinkRequest extends $dara.Model {
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
  effectiveScopesShrink?: string;
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
      effectiveScopesShrink: 'EffectiveScopes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      effectiveScopesShrink: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

