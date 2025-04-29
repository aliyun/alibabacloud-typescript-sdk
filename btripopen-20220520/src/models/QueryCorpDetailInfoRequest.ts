// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCorpDetailInfoRequest extends $dara.Model {
  accountId?: string;
  /**
   * @example
   * btripxxxxxx
   */
  targetCorpId?: string;
  targetThirdCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'account_id',
      targetCorpId: 'target_corp_id',
      targetThirdCorpId: 'target_third_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      targetCorpId: 'string',
      targetThirdCorpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

