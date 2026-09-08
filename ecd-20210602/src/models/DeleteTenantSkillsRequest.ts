// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTenantSkillsRequest extends $dara.Model {
  /**
   * @remarks
   * The skill channel. Valid values:
   * - ENTERPRISE: Enterprise edition.
   * - BUSINESS: Business edition.
   * 
   * @example
   * ENTERPRISE
   */
  skillChannel?: string;
  /**
   * @remarks
   * The list of skill IDs.
   */
  skillIds?: string[];
  static names(): { [key: string]: string } {
    return {
      skillChannel: 'SkillChannel',
      skillIds: 'SkillIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

