// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ConditionBasicInfoCheckRange } from "./ConditionBasicInfoCheckRange";
import { OperatorBasicInfo } from "./OperatorBasicInfo";


export class ConditionBasicInfo extends $dara.Model {
  checkRange?: ConditionBasicInfoCheckRange;
  cid?: string;
  exclusion?: number;
  id?: number;
  lambda?: string;
  name?: string;
  operators?: OperatorBasicInfo[];
  rid?: string;
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

