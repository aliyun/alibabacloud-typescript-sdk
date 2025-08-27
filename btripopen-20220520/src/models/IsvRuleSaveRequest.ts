// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IsvRuleSaveRequestBookuserList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  entityId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  entityType?: number;
  static names(): { [key: string]: string } {
    return {
      entityId: 'entity_id',
      entityType: 'entity_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'string',
      entityType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

