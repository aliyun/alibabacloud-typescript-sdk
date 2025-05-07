// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfoCheckRangeAnchor } from "./ConditionBasicInfoCheckRangeAnchor";
import { ConditionBasicInfoCheckRangeRange } from "./ConditionBasicInfoCheckRangeRange";


export class ConditionBasicInfoCheckRange extends $dara.Model {
  absolute?: boolean;
  allSentencesSatisfy?: boolean;
  anchor?: ConditionBasicInfoCheckRangeAnchor;
  range?: ConditionBasicInfoCheckRangeRange;
  role?: string;
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

