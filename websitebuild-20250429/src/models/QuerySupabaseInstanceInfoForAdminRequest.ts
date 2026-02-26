// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySupabaseInstanceInfoForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * staging
   */
  env?: string;
  /**
   * @example
   * 123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      env: 'Env',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      env: 'string',
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

