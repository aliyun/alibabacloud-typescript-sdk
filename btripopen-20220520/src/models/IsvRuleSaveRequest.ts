// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IsvRuleSaveRequestBookuserList } from "./IsvRuleSaveRequestBookuserList";


export class IsvRuleSaveRequest extends $dara.Model {
  applyNeed?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  bookType?: string;
  bookuserList?: IsvRuleSaveRequestBookuserList[];
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
      bookuserList: 'bookuser_list',
      ruleNeed: 'rule_need',
      status: 'status',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyNeed: 'boolean',
      bookType: 'string',
      bookuserList: { 'type': 'array', 'itemType': IsvRuleSaveRequestBookuserList },
      ruleNeed: 'boolean',
      status: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bookuserList)) {
      $dara.Model.validateArray(this.bookuserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

