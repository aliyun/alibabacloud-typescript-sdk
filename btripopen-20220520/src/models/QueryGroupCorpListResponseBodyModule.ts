// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGroupCorpListResponseBodyModule extends $dara.Model {
  /**
   * @example
   * corp1
   */
  corpId?: string;
  corpName?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'corp_id',
      corpName: 'corp_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

