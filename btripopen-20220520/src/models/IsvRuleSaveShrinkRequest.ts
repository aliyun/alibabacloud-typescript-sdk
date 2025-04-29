// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsvRuleSaveShrinkRequest extends $dara.Model {
  applyNeed?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  bookType?: string;
  bookuserListShrink?: string;
  ruleNeed?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyNeed: 'apply_need',
      bookType: 'book_type',
      bookuserListShrink: 'bookuser_list',
      ruleNeed: 'rule_need',
      status: 'status',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyNeed: 'boolean',
      bookType: 'string',
      bookuserListShrink: 'string',
      ruleNeed: 'boolean',
      status: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

