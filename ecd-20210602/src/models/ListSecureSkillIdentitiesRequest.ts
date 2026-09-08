// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecureSkillIdentitiesRequest extends $dara.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The skill channel. Valid values:
   * 
   * - ENTERPRISE: Enterprise edition.
   * - BUSINESS: Business edition.
   * 
   * This parameter is required.
   * 
   * @example
   * ENTERPRISE
   */
  skillChannel?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      skillChannel: 'SkillChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      skillChannel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

