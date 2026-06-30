// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OperatorBasicInfo } from "./OperatorBasicInfo";


export class ConditionBasicInfoCheckRangeAnchor extends $dara.Model {
  /**
   * @remarks
   * Condition ID
   * 
   * @example
   * a
   */
  cid?: string;
  /**
   * @remarks
   * Hit count
   * 
   * @example
   * 1
   */
  hitTime?: number;
  /**
   * @remarks
   * Location
   * 
   * @example
   * BEFORE
   */
  location?: string;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      hitTime: 'Hit_time',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: 'string',
      hitTime: 'number',
      location: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionBasicInfoCheckRangeRange extends $dara.Model {
  /**
   * @remarks
   * Start index of the conversation
   * 
   * @example
   * 1
   */
  from?: number;
  /**
   * @remarks
   * End index of the conversation
   * 
   * @example
   * 2
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionBasicInfoCheckRange extends $dara.Model {
  /**
   * @remarks
   * false: relative position; the sentence position is determined in combination with the anchor and the role
   * 
   * @example
   * true
   */
  absolute?: boolean;
  /**
   * @remarks
   * true: Every sentence must satisfy the condition;
   * 
   * @example
   * true
   */
  allSentencesSatisfy?: boolean;
  /**
   * @remarks
   * Precondition and postcondition
   */
  anchor?: ConditionBasicInfoCheckRangeAnchor;
  /**
   * @remarks
   * Relative range
   */
  range?: ConditionBasicInfoCheckRangeRange;
  /**
   * @remarks
   * Corresponds to RoleType.type
   * 
   * @example
   * 客服
   */
  role?: string;
  /**
   * @remarks
   * Corresponds to RoleType.id
   * 
   * @example
   * 1
   */
  roleId?: number;
  static names(): { [key: string]: string } {
    return {
      absolute: 'Absolute',
      allSentencesSatisfy: 'AllSentencesSatisfy',
      anchor: 'Anchor',
      range: 'Range',
      role: 'Role',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absolute: 'boolean',
      allSentencesSatisfy: 'boolean',
      anchor: ConditionBasicInfoCheckRangeAnchor,
      range: ConditionBasicInfoCheckRangeRange,
      role: 'string',
      roleId: 'number',
    };
  }

  validate() {
    if(this.anchor && typeof (this.anchor as any).validate === 'function') {
      (this.anchor as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionBasicInfo extends $dara.Model {
  /**
   * @remarks
   * Detection range
   */
  checkRange?: ConditionBasicInfoCheckRange;
  /**
   * @remarks
   * Condition ID, which may be the primary key in the database or a transformed identifier such as a, b, or c
   * 
   * @example
   * a
   */
  cid?: string;
  /**
   * @remarks
   * Exclude
   * 
   * @example
   * 0
   */
  exclusion?: number;
  /**
   * @remarks
   * Primary key in the database
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Lambda expression; for example: a&&b
   * 
   * @example
   * a
   */
  lambda?: string;
  /**
   * @remarks
   * Condition name
   * 
   * @example
   * xx
   */
  name?: string;
  /**
   * @remarks
   * List of operators
   */
  operators?: OperatorBasicInfo[];
  /**
   * @remarks
   * ID of the rule to which the condition belongs
   * 
   * @example
   * 1
   */
  rid?: string;
  /**
   * @remarks
   * User group
   * 
   * @example
   * xxxx
   */
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      checkRange: 'Check_range',
      cid: 'Cid',
      exclusion: 'Exclusion',
      id: 'Id',
      lambda: 'Lambda',
      name: 'Name',
      operators: 'Operators',
      rid: 'Rid',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRange: ConditionBasicInfoCheckRange,
      cid: 'string',
      exclusion: 'number',
      id: 'number',
      lambda: 'string',
      name: 'string',
      operators: { 'type': 'array', 'itemType': OperatorBasicInfo },
      rid: 'string',
      userGroup: 'string',
    };
  }

  validate() {
    if(this.checkRange && typeof (this.checkRange as any).validate === 'function') {
      (this.checkRange as any).validate();
    }
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

