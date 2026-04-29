// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetAreaCodeRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 11位手机号；只能查询手机号
   * 
   * This parameter is required.
   * 
   * @example
   * 17750247753
   */
  tel?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      tel: 'Tel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      tel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

