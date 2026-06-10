// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppSupabaseSecretsRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * Search keyword
   * 
   * @example
   * v2_
   */
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      keyword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

