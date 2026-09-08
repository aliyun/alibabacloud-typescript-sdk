// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentitySkillSecurityRequestIdentityIds extends $dara.Model {
  /**
   * @remarks
   * The resource information ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-b9ej3xiok4tjbgf9x
   */
  identityId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      identityId: 'IdentityId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetIdentitySkillSecurityRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the skill installation permission. Valid values:
   * 
   * - true: enabled.
   * - false: disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The list of resource information.
   * 
   * This parameter is required.
   */
  identityIds?: SetIdentitySkillSecurityRequestIdentityIds[];
  /**
   * @remarks
   * The skill channel. Valid values:
   * 
   * - ENTERPRISE: enterprise edition.
   * - BUSINESS: business edition.
   * 
   * This parameter is required.
   * 
   * @example
   * ENTERPRISE
   */
  skillChannel?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      identityIds: 'IdentityIds',
      skillChannel: 'SkillChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      identityIds: { 'type': 'array', 'itemType': SetIdentitySkillSecurityRequestIdentityIds },
      skillChannel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.identityIds)) {
      $dara.Model.validateArray(this.identityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

