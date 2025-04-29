// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCorpResponseBodyModule extends $dara.Model {
  /**
   * @example
   * btrip123
   */
  subCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      subCorpId: 'sub_corp_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subCorpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

