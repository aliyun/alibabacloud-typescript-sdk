// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillAuthedIdentitiesRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The unique identifier of the skill.
   * 
   * This parameter is required.
   * 
   * @example
   * s-04rj8mzqj1fu****
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillChannel: 'SkillChannel',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      skillChannel: 'string',
      skillId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

