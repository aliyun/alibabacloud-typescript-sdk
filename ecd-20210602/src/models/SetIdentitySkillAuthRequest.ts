// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdentitySkillAuthRequestIdentities extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorized object.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-av4u9m5ghko26****
   */
  identityId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
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

export class SetIdentitySkillAuthRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically install. Valid values:
   * 
   * - true: yes
   * - false: no
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * The list of authorized objects.
   * 
   * This parameter is required.
   */
  identities?: SetIdentitySkillAuthRequestIdentities[];
  /**
   * @remarks
   * The operation type.
   * 
   * This parameter is required.
   * 
   * @example
   * SET_AUTH
   */
  operationType?: string;
  /**
   * @remarks
   * The skill channel. Valid values:
   * 
   * - ENTERPRISE: enterprise edition
   * - BUSINESS: business edition
   * 
   * This parameter is required.
   * 
   * @example
   * ENTERPRISE
   */
  skillChannel?: string;
  /**
   * @remarks
   * The list of skill IDs.
   * 
   * This parameter is required.
   */
  skillIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoInstall: 'AutoInstall',
      identities: 'Identities',
      operationType: 'OperationType',
      skillChannel: 'SkillChannel',
      skillIds: 'SkillIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoInstall: 'boolean',
      identities: { 'type': 'array', 'itemType': SetIdentitySkillAuthRequestIdentities },
      operationType: 'string',
      skillChannel: 'string',
      skillIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.identities)) {
      $dara.Model.validateArray(this.identities);
    }
    if(Array.isArray(this.skillIds)) {
      $dara.Model.validateArray(this.skillIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

