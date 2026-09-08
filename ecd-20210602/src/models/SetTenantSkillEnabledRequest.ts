// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetTenantSkillEnabledRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the skill.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The skill channel.
   * 
   * @example
   * BUSINESS
   */
  skillChannel?: string;
  /**
   * @remarks
   * The list of skill IDs.
   */
  skillIds?: string[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      skillChannel: 'SkillChannel',
      skillIds: 'SkillIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      skillChannel: 'string',
      skillIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.skillIds)) {
      $dara.Model.validateArray(this.skillIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

