// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCorpRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * corp123
   */
  outerCorpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  outerCorpName?: string;
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
      outerCorpId: 'outer_corp_id',
      outerCorpName: 'outer_corp_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outerCorpId: 'string',
      outerCorpName: 'string',
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

