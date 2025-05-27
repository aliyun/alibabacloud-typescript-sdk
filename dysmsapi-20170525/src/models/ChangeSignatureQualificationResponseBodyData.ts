// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeSignatureQualificationResponseBodyData extends $dara.Model {
  data?: { [key: string]: any };
  /**
   * @example
   * 示例值
   */
  errCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  errMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errCode: 'string',
      errMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

