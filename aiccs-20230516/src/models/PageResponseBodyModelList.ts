// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageResponseBodyModelList extends $dara.Model {
  /**
   * @remarks
   * 添加时间
   * 
   * @example
   * 2020-03-06 10:10:10
   */
  createTime?: string;
  /**
   * @remarks
   * 过期时间
   * 
   * @example
   * 1
   */
  expirationTime?: string;
  /**
   * @remarks
   * 手机号码
   * 
   * @example
   * 13314206082
   */
  number?: string;
  /**
   * @remarks
   * 手机号MD5
   * 
   * @example
   * e10adc3949ba59abbe56e057f20f883e
   */
  numberMD5?: string;
  /**
   * @remarks
   * 备注
   * 
   * @example
   * 示例值
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      expirationTime: 'ExpirationTime',
      number: 'Number',
      numberMD5: 'NumberMD5',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      expirationTime: 'string',
      number: 'string',
      numberMD5: 'string',
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

