// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyQueryRequest extends $dara.Model {
  applyId?: number;
  applyShowId?: string;
  subCorpId?: string;
  thirdpartApplyId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      applyShowId: 'apply_show_id',
      subCorpId: 'sub_corp_id',
      thirdpartApplyId: 'thirdpart_apply_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'number',
      applyShowId: 'string',
      subCorpId: 'string',
      thirdpartApplyId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

