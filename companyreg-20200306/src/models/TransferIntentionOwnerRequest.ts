// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferIntentionOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * P20210709190452000001
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esp.wangwen
   */
  bizType?: string;
  employeeCode?: string;
  /**
   * @example
   * 67842
   */
  personId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      employeeCode: 'EmployeeCode',
      personId: 'PersonId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      employeeCode: 'string',
      personId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

